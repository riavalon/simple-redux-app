import React from 'react';


const classNames = {
  container: 'mv4 ph3',
  containerFlex: 'mv4 w-100 ph3 flex items-center justify-start',
  label: 'bold f5 gray ttu db mb2',
  labelInline: 'bold f5 gray ttu dib mr2',
  input: 'pa4 h2 ph3 outline-0 ba b--black-30',
};


export const Input = ({updateFn, fieldVal, fieldName, fieldPlaceholder = '', fieldId, fieldType = 'text'}) => {
  const handleOnChange = (event) => {
    event.target.type === 'text' ?
      updateFn(event.target.value) :
      updateFn(event.target.checked);
  };

  console.log(fieldVal);

  return (
    <div className={fieldType === 'checkbox' ? classNames.containerFlex : classNames.container}>
      <label
        className={fieldType === 'checkbox' ? classNames.labelInline : classNames.label}
        htmlFor={fieldId}
      >
        {fieldName}
      </label>

      <input
        className={classNames.input}
        id={fieldId}
        placeholder={fieldPlaceholder}
        type={fieldType}
        value={fieldVal}
        checked={fieldVal}
        onChange={handleOnChange}
      />
    </div>
  );
}
