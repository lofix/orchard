export const updateObject = (oldObj, updatedProps) => {
  return {
    ...oldObj,
    ...updatedProps
  };
};

export const checkValidation = (value, rule) => {
  let isValid = true;
  if (rule.required) {
    isValid = value.trim() !== '' && isValid;
  }

  return isValid;
}