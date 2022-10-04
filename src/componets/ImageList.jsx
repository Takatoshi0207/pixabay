import React from 'react'
import Masonry from 'react-masonry-component'

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return (
      <div className="imageList">
        < a
          href={image.pageURL}
          key={image.id}
          target=' _ blank '
          rel=' noopener noreferrer '
          className=' ui medium image '
        >
          < img src={image.webformatURL} alt={image.tags} />
        </a>
      </div>
    )
  })

  return (
    <Masonry>{images}</Masonry>
  )
}

export default ImageList