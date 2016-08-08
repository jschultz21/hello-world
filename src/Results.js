import React, {Component} from 'react'

class Results extends Component {
  render(){
    let {jobs}=this.props
    let results=jobs.map((job, index) => {
      return (
        <div key={index}>
        <p>{job.title}</p>
          <p>{job.location}</p>
            <p>{job.company}</p>
            <img width="200px" src={job.company_logo} alt={job.company}></img>

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
