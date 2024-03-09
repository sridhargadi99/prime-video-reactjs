/* eslint-disable jsx-a11y/control-has-associated-label */
// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {eachMovie} = props
  const {thumbnailUrl, videoUrl} = eachMovie
  return (
    <>
      <Popup
        modal
        trigger={
          <button className="button-style" type="button">
            <img src={thumbnailUrl} alt="thumbnail" className="image-style" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="display-container">
            <button
              type="button"
              className="close-button-style1"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size="25" />
            </button>
            <div className="video-container">
              <ReactPlayer url={videoUrl} />
            </div>
          </div>
        )}
      </Popup>
    </>
  )
}

export default MovieItem
