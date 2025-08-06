import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";

export const array = [
  "ali",
  "tayyab",
  "ali",
  "tayyab",
  "ali",
  "tayyab",
  "ali",
  "tayyab",
  "ali",
  "tayyab",
  "ali",
  "tayyab",
  "ali",
  "tayyab",
];
export const voiceProviders = [
  {
    title: "ElevenLabs",
    description: "For using custom voices from ElevenLabs.",
    fields: [
      {
        name: "apiKey",
        label: "API Key",
        type: "password",
        placeholder: "Enter API Key",
      },
    ],
    initialData: { apiKey: "" },
  },
  {
    title: "Deepgram",
    description: "For using custom STT and TTS models.",
    fields: [
      {
        name: "apiKey",
        label: "API Key",
        type: "password",
        placeholder: "Enter API Key",
      },
      {
        name: "apiUrl",
        label: "API URL",
        type: "url",
        placeholder: "Enter API Url",
      },
    ],
    initialData: { apiKey: "", apiUrl: "" },
  },
];

export const modelProviders = [
  {
    title: "OpenAI",
    description: "For using your OpenAI account.",
    fields: [
      {
        name: "apiKey",
        label: "API Key",
        type: "password",
        placeholder: "Enter API Key",
      },
    ],
    initialData: { apiKey: "" },
  },
  {
    title: "Anthropic",
    description: "For using your Anthropic account.",
    fields: [
      {
        name: "apiKey",
        label: "API Key",
        type: "password",
        placeholder: "Enter API Key",
      },
    ],
    initialData: { apiKey: "" },
  },
];

export const transcriberProviders = [
  {
    title: "Deepgram",
    description: "For using custom STT and TTS models.",
    fields: [
      {
        name: "apiKey",
        label: "API Key",
        type: "password",
        placeholder: "Enter API Key",
      },
      {
        name: "apiUrl",
        label: "API URL",
        type: "url",
        placeholder: "Enter API Url",
      },
    ],
    initialData: { apiKey: "", apiUrl: "" },
  },
  {
    title: "Azure Speech",
    description: "For using Azure Speech Services.",
    fields: [
      {
        name: "apiKey",
        label: "API Key",
        type: "password",
        placeholder: "Enter API Key",
      },
      {
        name: "country",
        label: "Country",
        type: "select",
        placeholder: "Select Country",
        options: [
          "United States",
          "United Kingdom",
          "Canada",
          "Australia",
          "Germany",
          "France",
          "Japan",
          "Other",
        ],
      },
      {
        name: "apiUrl",
        label: "API URL",
        type: "url",
        placeholder: "Enter API Url",
      },
    ],
    initialData: { apiKey: "", country: "", apiUrl: "" },
  },
];
export const chats = [
  {
    id: 1,
    name: "Sarah Johnson",
    message: "I need help with my recent order...",
    time: "5m ago",
    status: "Open",
    platform: "whatsapp",
  },
  {
    id: 2,
    name: "Michael Chen",
    message: "When will my package arrive?",
    time: "5m ago",
    status: "Pending",
    platform: "whatsapp",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    message: "I need help with my recent order...",
    time: "5m ago",
    status: "Open",
    platform: "whatsapp",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    message: "I need help with my recent order...",
    time: "5m ago",
    status: "Open",
    platform: "whatsapp",
  },
  {
    id: 5,
    name: "Sarah Johnson",
    message: "I need help with my recent order...",
    time: "5m ago",
    status: "Open",
    platform: "whatsapp",
  },
  {
    id: 6,
    name: "Sarah Johnson",
    message: "I need help with my recent order...",
    time: "5m ago",
    status: "Open",
    platform: "whatsapp",
  },
];
export const sidebarArray = [
  { id: 1, name: "Alice Johnson" },
  { id: 2, name: "Bob Smith" },
  { id: 3, name: "Carol Davis" },
  { id: 4, name: "David Wilson" },
  { id: 5, name: "Emma Brown" },
  { id: 6, name: "Frank Miller" },
  { id: 7, name: "Grace Lee" },
  { id: 8, name: "Henry Garcia" },
  { id: 9, name: "Isabella Martinez" },
  { id: 10, name: "Jack Anderson" },
];
export const legendItems = [
  { name: "Vapi Fixed Cost", color: "bg-emerald-500", progress: "25%" },
  { name: "deepgram", color: "bg-orange-500", progress: "25%" },
  { name: "gpt 4o", color: "bg-yellow-500", progress: "25%" },
  { name: "vapi", color: "bg-blue-500", progress: "25%" },
];
export const tabs = [
  "Model",
  "Transcriber",
  "Voice Configuration",
  "Tools",
  "Predefined Functions",
  "Custom Functions",
];
// export const channelIconMap = {
//   facebook: <FaFacebook className="text-blue-600" size="22" />,
//   whatsapp: <FaWhatsapp className="text-green-500" />,
//   instagram: <FaInstagram className="text-pink-500" size="22" />,
//   telegram: <FaTelegramPlane className="text-blue-500" />,
// };
