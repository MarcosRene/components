import { useState, InputHTMLAttributes, PropsWithChildren } from 'react';

import { FiEye, FiEyeOff } from 'react-icons/fi';

import './styles.scss';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {};

export const Input = (props: PropsWithChildren<InputProps>) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { id, name, type, placeholder, onChange, ...rest } = props;

  const inputId = id ?? name;

  const handlePasswordVisible = () =>
    setIsPasswordVisible((prevState) => !prevState);

  return (
    <div className="input-container" id={inputId}>
      <input
        id={inputId}
        name={name}
        type={isPasswordVisible ? 'text' : type}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />

      {type === 'password' && (
        <span onClick={handlePasswordVisible}>
          {isPasswordVisible ? (
            <FiEyeOff color="#202123" />
          ) : (
            <FiEye color="#202123" />
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
