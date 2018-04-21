export default function generateValidationFn(options={}) {

  const validationFns = createValidationFns(options);

  return (value)=>{
    let error;
    let index=0;
    while (!error && index<validationFns.length){
      error = validationFns[index++](value)
    }

    return error;
  }

}

const createValidationFns = (options)=>{
  const {pattern,required,customValidationFn} = options;

  const validationFns = [];

  if (required!==false){
    validationFns.push(createRequiredValidationFn())
  }
  if (pattern){
    validationFns.push(createPatternValidationFn(pattern))
  }
  if (customValidationFn){
    validationFns.push(customValidationFn);
  }

  return validationFns;

}

const createPatternValidationFn = (pattern) => (value) =>{
  let regex = new RegExp(pattern);

  if (!regex.test(value) || value==null){
    return 'No cumple con el formato requerido';
  }
}

const createRequiredValidationFn = () => (value) =>{
  if (!value && value!==0){
    return 'Este campo es requerido'
  }
}
