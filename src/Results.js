import React, {Component} from 'react'

class Results extends Component {
  render(){

    let {jobs}=this.props
    let results=jobs.map((movie, index) => {
      return (
        <div key={index}>
        <p>{job.name}</p>
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
