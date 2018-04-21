import Field from './Field';

class Form {

  constructor(id){
    this.id = id;
    this.fields = [];
    this.submitListeners = [];
    this.changeListeners = [];
    this.submit = this.submit.bind(this);
  }

  addSubmitListener(listener){
    this.submitListeners.push(listener);
  }

  addChangeListener(listener){
    this.changeListeners.push(listener);
  }

  getValues(){
    let formValues = {}

    this.fields.forEach(field=>{
      formValues[field.id] = field.getValues();
    })

    return formValues;
  }

  createField(fieldId,options){
    this[fieldId] = new Field(fieldId,options);
    this.fields.push(this[fieldId]);

    return this[fieldId];
  }

  getField(fieldId){
    return this[fieldId];
  }

  validate(){
    let error;
    this.fields.forEach(field=>{
      error = field.validate()||error;
    })
    return !error;
  }

  submit(){
    console.log(this);
    let isValid = this.validate();

    return isValid;
  }

  reset(){
    this.fields.forEach(field=>{
      field.reset()
    })
  }
}
export default Form;
