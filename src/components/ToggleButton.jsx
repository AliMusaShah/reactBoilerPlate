
const ToggleButton = ({ title, onToggle, isToggled, }) => {
    // console.log(isToggled, 'isToggled in ToggleButton');
    return (
        <div className="flex items-center gap-2  border border-gray-200 text-gray-500 rounded-xl p-2">
            <span className="text-sm text-gray-600">{title}</span>
            <div
                onClick={onToggle}
                className={`relative inline-flex h-5 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${isToggled ? 'bg-indigo-600' : 'bg-gray-200'
                    }`}
            >
                <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isToggled ? 'translate-x-6' : 'translate-x-1'
                        }`}
                />
            </div>
        </div>
    )
}

export default ToggleButton