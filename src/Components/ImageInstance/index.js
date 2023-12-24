import './index.css'

const ImageInstance = props => {
  const {onClick, imageDetails} = props
  const {id, category, thumbnailUrl, imageUrl} = imageDetails

  const onClickCheck = () => {
    onClick(id)
  }
 
  return (
    <li className="image-list-container">
      <button
        className="image-checking-button"
        type="button"
        onClick={onClickCheck}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="image-resizer" />
      </button>
    </li>
  )
}

export default ImageInstance
