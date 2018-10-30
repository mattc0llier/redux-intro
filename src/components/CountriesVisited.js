import React from 'react'

class CountriesVisited extends React.Component {

  render(){
    return(
      <div>
        { this.props.countriesVisited.map( country => {
          return (
            <p>{country}</p>
          )
        })}
      </div>
    )
  }
}

export default CountriesVisited
