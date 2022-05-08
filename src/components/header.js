import React, { Component } from 'react';

class header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            }
      }
  render() {
    return (
      <div
      style={{width:  '100%' , padding: '0px !important', margin: '0px !important', paddingTop: '10px', paddingLeft: '10px',  background:  '#A020F0', height: '52px'}}>
     <span style={{color: 'white' , fontSize: '34px'}}>Weather App</span>
      </div>
    );
  }
}
export default header;
