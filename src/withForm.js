import React from 'react';
import PropTypes from 'prop-types';

const withForm = (formId)=>(WrappedComponent)=>{

  class withFormHOC extends React.Component{


    render(){

      let form =  this.context.formManager.getForm(formId)

      return(
        <WrappedComponent
          {...this.props}
          form={form}/>
      );
    }
  }

  withFormHOC.contextTypes = {
    formManager: PropTypes.object
  }

  return (withFormHOC);
}

export default withForm;
