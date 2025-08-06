import { tabs } from "../mock/data";

const TabNavigation = ({ activeTab, onTabChange, }) => {
    return (
        <div className="flex space-x-8 m-6 border-b border-gray-200">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => onTabChange(tab)}
                    className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors cursor-pointer ${activeTab === tab
                        ? 'text-[var(--defaultPurple)] border-[var(--defaultPurple)]'
                        : 'text-gray-500 border-transparent hover:text-gray-700'
                        }`}
                >
                    {tab}
                </button>
            ))}
        </div>

    );
};
export default TabNavigation;