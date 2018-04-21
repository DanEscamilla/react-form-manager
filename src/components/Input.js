import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component{

  constructor(props){
    super(props);

    this._changeListener = this._changeListener.bind(this);
  }

  _changeListener(event){
    this.props.onValueChange(event.target.value)
  }

  render(){

    return(
      <div>
        <input
          value={this.props.value}
          onChange={this._changeListener}/>
        <span>{this.props.error||''}</span>
      </div>
    );
  }
}

Input.propTypes = {
  onValueChange: PropTypes.func,
}

export default (Input);
