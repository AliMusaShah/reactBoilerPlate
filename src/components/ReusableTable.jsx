
const ReusableTable = ({ columns, data, onClick, }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                <thead>
                    <tr className="bg-gray-100 text-left">
                        {columns.map((column, index) => (
                            <th key={index} className="p-4 border-b-2 border-gray-200" style={{ width: column.width || 'auto' }}>{column.header} </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data?.map((row, rowIndex) => (
                        <tr
                            key={row._id}
                            className={`border-t border-gray-200 ${rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                            onClick={() => onClick && onClick(row)}
                        >
                            {columns.map((column, colIndex) => (
                                <td key={colIndex} className={`p-4 `} style={{ width: column.width || 'auto' }}>
                                    {column.render ?
                                        column.render(row) :
                                        (typeof column.accessor === 'function' ?
                                            column.accessor(row) :
                                            row[column.accessor])}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReusableTable;
