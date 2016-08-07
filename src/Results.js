import React, {Component} from 'react'

class Results extends Component {
  render(){

    let {jobs}=this.props
    let results=jobs.map((job, index) => {
      return (
        <div key={index}>
        <p>{job.position_title}</p>
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
