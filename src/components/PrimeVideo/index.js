// Write your code here

import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const filterMoviesList = genre =>
    moviesList.filter(eachMovie => eachMovie.categoryId === genre)

  const renderContainer = genre => (
    <div className="movie-slider">
      <MoviesSlider finalMoviesList={filterMoviesList(genre)} />
    </div>
  )

  return (
    <>
      <div className="prime-video-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime-video-image-style"
        />
      </div>
      <div className="movies-container">
        <div className="movies-container1">
          <h1 className="name-style">Action Movies</h1>
          {renderContainer('ACTION')}
        </div>

        <div className="movies-container1">
          <h1 className="name-style">Comedy Movies</h1>
          {renderContainer('COMEDY')}
        </div>
      </div>
    </>
  )
}

export default PrimeVideo
