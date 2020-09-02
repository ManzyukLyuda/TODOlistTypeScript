// Validatin

export interface validationConfig{
    value: string | number;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
}

export function validation(validatebleInput: validationConfig){
    let isValid = true;
    if(validatebleInput.required){
        isValid = isValid && validatebleInput.value.toString().trim().length > 0;
    }
    if(validatebleInput.minLength){
        isValid = isValid && validatebleInput.value.toString().trim().length >  validatebleInput.minLength;
    }
    if(validatebleInput.maxLength){
        isValid = isValid && validatebleInput.value.toString().trim().length <  validatebleInput.maxLength;
    }
    if(validatebleInput.min){
        isValid = isValid && +validatebleInput.value >=  validatebleInput.min;
    }
    if(validatebleInput.max){
        isValid = isValid && +validatebleInput.value <= validatebleInput.max;
    }
    return isValid;
}
