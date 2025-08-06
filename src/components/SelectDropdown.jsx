
const SelectDropdown = ({ value, onChange, options, setCurrentModel }) => {
    // console.log(options, 'options in select dropdown');
    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        const selectedOption = options.find(item => item.id === parseInt(selectedValue));

        // Set the current model first
        if (selectedOption) {
            setCurrentModel(selectedOption);
        }

        // Then call the original onChange handler with the selected option
        onChange(e, selectedOption);
    };
    return (
        <div className="relative">
            <select
                className=" rounded focus:outline-none transition duration-200 ease-in-out  px-4 py-2 text-base  border border-gray-400 text-gray-500 cursor-pointer"
                value={value || ''}
                onChange={handleSelectChange}
            >
                <option value="" disabled >Select </option>
                {options.map((item, index) => (
                    <option key={index} value={item.id} className='capitalize'>
                        {item?.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default SelectDropdown