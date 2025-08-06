import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './App.css'
// import AdminDashboard from './features/admin'
// import LoginPage from './features/auth/components/LoginPage'
import PageNotFound from './components/PageNotFound'
import LoginPage from './features/auth/components/LoginPage'
import SignUp from './features/auth/components/SignUp'
import Assistant from './features/user/assistant'
import UserDashboard from './features/user/dashboard'
import ExternalKeys from './features/user/externalkeys'
import Profile from './features/user/profile'
import OrganizationSetting from './features/user/setting/OrganizationSetting'
import ChatTranscript from './features/user/transcripts'
import WorkFlow from './features/user/workflow'
import DefaultLayout from './ui/DefaultLayout'
import InnerLayout from './ui/InnerLayout'
import ChatDetail from './features/user/transcripts/ChatDetail'






const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    element: (
      <DefaultLayout />
    ),
    children: [
      { path: '/user-dashboard', element: (<UserDashboard />) },
      { path: '/assistant', element: (<Assistant />) },
      { path: '/chat-transcripts', element: (<ChatTranscript />) },
      { path: '/chat-transcripts/:id', element: (<ChatDetail />) },

      { path: '/Workflow', element: (<WorkFlow />) },
      { path: '/external-keys', element: (<ExternalKeys />) },
      { path: '/profile', element: (<Profile />) },
    ]
  },
  {
    element: (
      <InnerLayout />
    ),
    children: [
      { path: '/settings/organization-setting', element: (<OrganizationSetting />) },

    ]
  },
  {
    path: '*',
    element: <PageNotFound />
  }


])

function App() {

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <RouterProvider router={router} />

    </>
  )
}

export default App
