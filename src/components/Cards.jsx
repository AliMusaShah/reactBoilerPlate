
const Cards = ({ cardData }) => {
    return (
        <>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 xl:grid-cols-2 2xl:gap-7.5">
                {cardData.map((item, index) => (
                    <div key={index} className=" p-6 shadow-md rounded-lg">
                        <div className="flex items-center justify-between">
                            <div className="w-full">
                                <h1 className="text-gray-500 font-semibold text-xl">
                                    {item.title}
                                </h1>
                                <h1 className=" font-semibold text-3xl w-full flex items-center justify-between">
                                    {item.value}
                                    {/* <span className='mx-1 text-sm text-green-400'> 12% </span> */}
                                </h1>
                            </div>
                        </div>
                        {/* <div className="mt-4">
                            <h3 className="flex items-center text-gray-500 font-semibold"><span>{item.icon}</span> <span className='mx-1'> 12 </span> +10.2% this week</h3>
                        </div> */}
                    </div>))}
            </div>
        </>
    )
}

export default Cards