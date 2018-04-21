import React from 'react';
import PropTypes from 'prop-types';

import FormManager from './FormManager';

class DBProvider extends React.Component {

  getChildContext() {
    return {
      formManager: new FormManager()
    };
  }

  render() {
    return this.props.children
  }
}

DBProvider.childContextTypes = {
  formManager: PropTypes.object
};

export default DBProvider
