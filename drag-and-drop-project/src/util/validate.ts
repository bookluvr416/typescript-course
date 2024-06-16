export interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

export function validate(validableInput: Validatable) {
  let isValid = true;
  const inputLength = validableInput.value.toString().trim().length;

  if (validableInput.required) {
    isValid = isValid && inputLength !== 0;
  }
  if (validableInput.minLength != null && typeof validableInput.value === 'string') {
    isValid = isValid && inputLength >= validableInput.minLength;
  }
  if (validableInput.maxLength != null && typeof validableInput.value === 'string') {
    isValid = isValid && inputLength <= validableInput.maxLength;
  }
  if (validableInput.min != null && typeof validableInput.value === 'number') {
    isValid = isValid && validableInput.value >= validableInput.min;
  }
  if (validableInput.max != null && typeof validableInput.value === 'number') {
    isValid = isValid && validableInput.value <= validableInput.max;
  }

  return isValid;
}