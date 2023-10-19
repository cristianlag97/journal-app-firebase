import { useEffect, useMemo, useState } from "react";


const useForm = (initialForm = {}, formValidations = {}) => {

  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState({});

  useEffect(() => {
    createValidators();
  }, [formState]);

  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      if(formValidation[formValue] !== null) return false;
    }
    return true;
  }, [formValidation])
  

  const onInputChanged = ({target}) => {
    const {value, name} = target;
    setFormState({
      ...formState,
      [ name ] : value
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  }

  const createValidators = () => {
    const formCheckValues = {};

    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage] = formValidations[formField];

      formCheckValues[`${ formField }Valid`] = fn(formState[formField])
      ? null 
      : errorMessage;
    }

    setFormValidation(formCheckValues);
  }
  
  return {
    ...formState,
    formState,
    onInputChanged,
    onResetForm,
    ...formValidation,
    isFormValid,
  }
}

export default useForm;