import Form from './Form';


class FormManager{

  constructor(){
    this.forms = [];
  }

  getForm(formId){
    let newForm = this[formId];

    if (!newForm){
        newForm = new Form(formId);
        this.forms.push(newForm);
    }
    this[formId] = newForm;

    return this[formId];
  }

  getFormsObject(){
    let formsObject = {}

    this.forms.forEach(form=>{
      formsObject[form.id] = form.getValues();
    })

    return formsObject;
  }

}

export default FormManager;
