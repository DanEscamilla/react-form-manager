import React from 'react';
import PropTypes from 'prop-types';

import FormManager from './FormManager';

class FormProvider extends React.Component {

  getChildContext() {
    return {
      formManager: new FormManager()
    };
  }

  render() {
    return this.props.children
  }
}

FormProvider.childContextTypes = {
  formManager: PropTypes.object
};

export default FormProvider
