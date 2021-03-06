import React, { Component } from 'react';

import PropTypes from 'prop-types';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName : null,
            }
        this.handleSearchInput = this.handleSearchInput.bind(this);
      }
      updateCityName(e) {
        this.setState({ cityName: e.target.value })
      }

handleSearchInput() {
    console.log('handleSearchInput fired');
    this.props.searchCity(this.state.cityName);
}
  render() {
    return (
      <div
      style={{textAlign: 'center'}}>
<input
									placeholder="Enter City Name..."
                  value={this.state.cityName}
                

                  style={{ fontSize: '28px' ,width: '600px', background: '#FFFFFF', boxShadow: '#B0B0B0', borderRadius: '4px', border: '1px solid #E5E5E5', color: '#8C8C99' , boxSizing: 'border-box', borderRadius: '4px', padding: '5px'}}
									onChange={e => this.updateCityName(e)}
								/>  
    <button 
       onClick={this.handleSearchInput}
       style={{ background: '#A020F0', color: 'white', fontSize: '33px',cursor: 'pointer' , boxShadow: '#B0B0B0', borderRadius: '4px',}}
        >Search</button>
      </div>
    );
  }
}
SearchBar.propTypes = {
    searchCity: PropTypes.func
  };
export default SearchBar;
