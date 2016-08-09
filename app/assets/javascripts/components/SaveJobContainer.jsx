class SaveJobContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasSaved: false,
      job: []
    }
  }


  handleSaveSubmit(e){
    e.preventDefault()
    let job=this.props.job
    console.log(job)

    $.ajax({
      url: '/api/jobs',
      type: 'POST',
      data: { job: { title: job.title, description: job.description, company: job.company } },
      success: (job) => { this.props.handleSaveSubmit(job);
      }

    // saveTheJob(this.state.job).then( data => {
      // component.setState({
      //   hasSaved: true,
      //   job: data
      // })
    // })
  });
}

  render(){
    return (
      <SaveJobButton
        handleSaveSubmit={(e) => this.handleSaveSubmit(e)}/>
    )
  }

}
