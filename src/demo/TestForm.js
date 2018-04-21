import React from 'react';
import connectInput from '../connectInput';
import Input from '../components/Input';
import withForm from '../withForm';

const Button = (props)=>{

  return (
    <button
      onClick={props.form.submit}>
      Submit
    </button>
  );
}

const Nombre = connectInput('nombre','testForm',{
  required:false
})(Input)
const Apellido = connectInput('apellido','testForm',{
  pattern:/abc/
})(Input)
const Telefono = connectInput('telefono','testForm',{
  customValidationFn:(value)=>{
    if (value.length<5){
      return 'longitud tiene que ser mayor a 5, ahora es: '+value.length
    }
  },
  liveValidation:true,
})(Input)
const SubmitButton = withForm('testForm')(Button)

class TestForm extends React.Component{

  render(){

    return(
      <div>
        <div>Nombre</div>
        <Nombre/>
        <div>Apellido</div>
        <Apellido/>
        <div>Telefono</div>
        <Telefono/>
        <SubmitButton/>
      </div>
    );
  }
}

export default (TestForm);
