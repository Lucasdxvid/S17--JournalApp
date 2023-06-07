import { useEffect, useMemo, useState } from "react";

//! Agregamos el formValidations
export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const [formValidation, setFormValidation] = useState({});

  useEffect(() => {
    createValidators();
  }, [formState]); // si cambia el formState se vuelve a llamar el createValidators

  //Este valor solo cambiaria cuando modifiquemos el formValidation
  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      //* formValidation en la propiedad formValue
      if (formValidation[formValue] !== null) return false; // Si es diferente de null retorna false y nos salimos de la funcion por lo que ya no continua iterando
    }

    return true;
  }, [formValidation]);

  //! El componente no se esta destruyendo y volviendo a genera, cambia la nota activa pero nunca le decimos a nuestro useForm que si el initialForm cambia que vuelva a colocar los valores del initialForm
  useEffect(() => {
    setFormState(initialForm); // Si el formulario inicial cambia volvemos a llamar el useEffect
  }, [initialForm]); // Cuando la NOTE activa de noteView.jsx cambie, se reconstruye nuestro initialForm

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const createValidators = () => {
    const formCheckedValues = {};
    //Barremos las propiedades de formValidations del RegisterPage.jsx
    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage] = formValidations[formField]; // Aqui basicamente obtuvimos la funcion + error del formValidations del otro jsx desestructurando

      formCheckedValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMessage; // Propiedad computada de formfield+Valid que es igual a la funcion
    }
    //Establecemos ese nuevo valor en nuestro setFormValidation
    setFormValidation(formCheckedValues);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    ...formValidation,
    isFormValid,
  };
};
