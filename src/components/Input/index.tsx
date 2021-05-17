import { useState, InputHTMLAttributes, PropsWithChildren } from 'react';

import { FiEye, FiEyeOff } from 'react-icons/fi';

import './styles.scss';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {};

export const Input = (props: PropsWithChildren<InputProps>) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const { id, name, type, placeholder, onChange, ...rest } = props;

  const inputId = id ?? name;

  const handlePasswordVisible = () =>
    setIsPasswordVisible((prevState) => !prevState);

  const handleFocused = (event: any) => {
    if (event.currentTarget === event.target) {
      setIsFocused(true);
    }
  };

  const handleBlur = (event: any) => {
    if (event.currentTarget === event.target) {
      setIsFocused(false);
    }
  };

  return (
    <div className="input-container" id={inputId}>
      <input
        id={inputId}
        name={name}
        onFocus={(event) => handleFocused(event.target)}
        onBlur={(event) => handleBlur(event.target)}
        type={isPasswordVisible ? 'text' : type}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />

      {type === 'password' && (
        <span onClick={handlePasswordVisible}>
          {isPasswordVisible ? (
            <FiEyeOff color={isFocused ? '#ea7129' : '#202123'} />
          ) : (
            <FiEye color={isFocused ? '#ea7129' : '#202123'} />
          )}
        </span>
      )}
    </div>
  );
};

Input.defaultProps = {
  name: '',
  type: 'text',
  onChange: () => null,
  placeholder: 'Text here...',
};
