import React, { useState } from 'react'

export const formWithValidation = (FormWrappedComponent) => {
    const NewFormWithValidation = (props) => {
        const [errors, setErrors] = useState({});
        
        const validateForm = () => {
            let newErrors = [];
            let isValid = true;

            if (!props.formData.nombre) {
                newErrors.nombre = "El campo nombre es obligatorio";
                isValid = false;
            }

            if (!props.formData.email) {
                newErrors.email = "El campo email es obligatorio";
                isValid = false;
            }

            setErrors(newErrors);


        }

        return (
            <FormWrappedComponent
                {...props}
                errors = {errors}
                validateForm={validateForm}
            /> 
            
            
        )
    }

  return NewFormWithValidation
}

