import React from 'react'

const PreviewsImage = ({handleImages, imgSrc}) => {
  return (
    <div
    onClick={() => handleImages(imgSrc)}
    className="hover:shadow-xl hover:-translate-y-1 hover:cursor-pointer transition-all duration-300"
  >
    <img
      src={imgSrc}
      alt=""
      className="object-cover lg:h-24 w-6/6 lg:w-24 rounded-md border-2 hover:border-green-300 transition-all duration-300 border-white"
    />
  </div>
  )
}

export default PreviewsImage;