import React from 'react'


function ImageCard({index,title,description,img}) {
    
    
    return (
        <div className="relative h-80 w-72 p-1 mb-7 group">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 transition-all duration-500 group-hover:from-green-500 group-hover:via-blue-500 group-hover:to-purple-500"></div>

            <div className="relative h-full w-full flex flex-col items-center bg-gray-800 text-white rounded-lg p-5 gap-4">
                
                <img src={img} alt="Image" className="w-64 h-40 object-cover rounded-md" />

                <h3 className="text-2xl font-bold">{title} # {index}</h3>
                <p className="text-base text-gray-300 text-center">{description} #{index}</p>
            </div>
        </div>


    )
}

export default ImageCard
