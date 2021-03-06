import React, {Component} from 'react'
import Search from './Search'
import Results from './Results'
import {queryOmdb} from "./Utils"

class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query:'',
      hasSearched: false,
      jobs: []

    }
  }

  handleSearchInput (e) {
    this.setState({
      query: e.target.value
    })
  }

  handleSearchSubmit(e){
    e.preventDefault()
    let component=this
    queryOmdb(this.state.query).then( data => {
    component.setState({
      query: '',
      hasSearched: true,
      jobs: data
    })
  })
  }

  render(){

    if (this.state.hasSearched){
      return(
        <Results jobs={this.state.jobs}/>
      )
    } else {
        return (
          <Search
          handleSearchInput={(e) => this.handleSearchInput(e)}
          handleSearchSubmit={(e) => this.handleSearchSubmit(e)}
          query={this.state.query}
          />
        )
      }
    }
  }


export default SearchContainer
