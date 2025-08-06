import { useState } from 'react';

const StatusToggle = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = async (e) => {
        const isChecked = e.target.checked;
        const newState = isChecked;

        setIsToggled(newState);

        const payload = {
            status: newState
        };
        console.log(payload)
        // try {
        //     await onToggle(row, payload);

        // } catch (error) {
        //     console.error('Error updating status:', error);
        //     setIsToggled(!isToggled);

        // }
    }
    return (
        <div className="flex items-center gap-2  border border-gray-400 text-gray-500 rounded-xl p-2">
            <span className="text-sm text-gray-600">Active</span>

            <label className="inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={isToggled}
                    onChange={handleToggle}
                />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[var(--defaultPurple)]">
                </div>
            </label>
        </div>
    )
}

export default StatusToggle