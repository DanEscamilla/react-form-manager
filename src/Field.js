
class Field {

  constructor(id,options={}){
    this.id = id;
    this.changeListeners = [];
    if (options.listener){
      this.changeListeners.push(options.listener);
    }
    this.validationFn = options.validationFn||(()=>(null));
    this.defaultValue = (options.defaultValue===undefined)
      ?''
      :options.defaultValue;
    this.options = options;
    this.state = {
      value:this.defaultValue
    }
  }

  addListener(listener){
    this.changeListeners.push(listener);
  }

  setState({value,error}={}){
    console.log(this.options.liveValidation);
    if (this.state.error||this.options.liveValidation){
      error = this.validationFn(value);
    }

    this.state = {
      value: value,
      error: error,
    }

    this.changeListeners.forEach(listener=>{
      listener(this.state)
    })
  }

  getValues(){
    return this.state;
  }

  validate(){
    let error = this.validationFn(this.state.value);

    this.setState({
      value:this.state.value,
      error:error
    })

    return this.error;
  }

  reset(){
    this.setState({
      value: this.defaultValue,
      error: null,
    })
  }

}
export default Field;
