import React, {Component} from 'react'

class Results extends Component {
  render(){

    let {movies}=this.props
    let results=jobs.map((movie, index) => {
      return (
        <div key={index}>
        <p>{movie.Title}</p>
        </div>
      )
    })
    return(
      <div>
      {results}
      </div>
    )
  }
}

export default Results
