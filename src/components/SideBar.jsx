import { MdOutlineDashboard, MdOutlineReceiptLong, MdOutlineShoppingCart } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
// import Logo from '../assets/sideBarLogo.png';
function SideBar() {


    const adminMenuItems = [
        { id: 1, to: "/admin-dashboard", url: "admin-dashboard", label: "Dashboard", icon: <MdOutlineDashboard /> },
        { id: 2, to: "/user-Management", url: " user-Management", label: " User Management", icon: <MdOutlineShoppingCart /> },
        { id: 3, to: "/sDK-api-keys", url: "sDK-api-keys", label: "SDK / API Keys", icon: <MdOutlineShoppingCart /> },
        { id: 4, to: "/billing-analytics", url: "billing-analytics", label: "Billing & Analytics", icon: <MdOutlineReceiptLong /> },
        { id: 5, to: "/profiles", url: "profiles", label: "Profiles", icon: <MdOutlineReceiptLong /> },
        { id: 6, to: "/settings", url: "settings", label: "Settings", icon: <MdOutlineReceiptLong /> }
    ]
    const userMenuItems = [
        { id: 1, to: "/user-dashboard", url: "user-dashboard", label: "Dashboard", icon: <MdOutlineDashboard /> },
        { id: 2, to: "/assistant", url: "assistant", label: "Assistant", icon: <MdOutlineDashboard /> },
        { id: 3, to: "/chat-transcripts", url: "chat-transcripts", label: "Chat Transcripts", icon: <MdOutlineShoppingCart /> },
        { id: 4, to: "/billing", url: "billing", label: "Billing", icon: <MdOutlineReceiptLong /> },
        { id: 5, to: "/workflow", url: "workflow", label: "Workflow", icon: <MdOutlineReceiptLong /> },
        { id: 6, to: "/external-keys", url: "external-keys", label: "External Keys", icon: <MdOutlineReceiptLong /> },
        { id: 7, to: "/profile", url: "profile", label: "Profile", icon: <MdOutlineReceiptLong /> },
        { id: 8, to: "/settings/organization-setting", url: "settings", label: "Settings", icon: <MdOutlineReceiptLong /> }
    ]
    const role = 'user'
    const menuItems = role === "user" ? userMenuItems : adminMenuItems;
    const { pathname } = useLocation();

    return (
        <div className='h-full  p-6 md:w-72 shadow-md rounded-lg overflow-y-auto'>
            <div className="flex items-center justify-start mb-8">
                {/* <img src={Logo} alt="Company Logo" className="h-12 w-auto" /> */}
            </div>
            <div>
                {menuItems.map((item) => {
                    const isActive = pathname.includes(item.url);

                    return (
                        <Link key={item.id} to={item.to}>
                            <div
                                className={`relative min-h-[50px] my-4 flex items-center rounded-lg px-3 py-2 cursor-pointer hover:text-white hover:bg-[var(--defaultPurple)] ${isActive
                                    ? "bg-[var(--defaultPurple)] text-white"
                                    : " bg-transparent"
                                    }`}
                            >
                                <div className="mr-3 text-2xl">
                                    {item.icon}
                                </div>
                                <span className="font-normal">{item.label}</span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}


export default SideBar;
