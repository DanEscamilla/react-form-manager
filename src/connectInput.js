import React from "react";

import withForm from './withForm';
import generateValidationFn from './generateValidationFn';

const connectInput = (fieldId,formId,options)=>(WrappedComponent)=>{

  // const { required, validationFn, pattern } = options;

  class connectedInput extends React.Component{

    constructor(props){
      super(props);


      this._valueChangeListener = this._valueChangeListener.bind(this);
      this._findFieldInForm = this._findFieldInForm.bind(this);
      this._submitOnEnterKey = this._submitOnEnterKey.bind(this);
      this._inputStateListener = this._inputStateListener.bind(this);

      this.state = {
        field: this._findFieldInForm(),
      }

      this.state.field.error = null;
      this.state.value = this.state.field.value;
    }

    _valueChangeListener(newValue){
      this.state.field.setState({
        value:newValue,
      });
    }

    _inputStateListener(newState){
      this.setState({
        ...this.state,
        ...newState,
      });
    }

    _submitOnEnterKey(event){
      if (event.key === 'Enter') {
        this.props.form.submitForm()
      }
    }

    _findFieldInForm(){
      let field = this.props.form.getField(fieldId);
      if (!field){
        field = this.props.form.createField(fieldId,{
          ...options,
          listener:this._inputStateListener,
          validationFn:generateValidationFn(options),
        });
      }
      return field;
    }

    render(){
      const { form ,...passProps} = this.props;


      let addedProps = {
        ...this.state,
        onValueChange:this._valueChangeListener,
        onKeyPress:this._submitOnEnterKey,
      }

      return (
        <WrappedComponent
          {...passProps}
          {...addedProps}
          onChange={this._valueChangeListener}/>
      );
    }
  }


  return withForm(formId)(connectedInput);

}

export default connectInput;
