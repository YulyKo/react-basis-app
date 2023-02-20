import { FC, ReactNode } from 'react';

type ButtonTypes = 'button' | 'submit' | 'reset';

interface ButtonComponentProps {
  id: string;
  className: string;
  spinnerClassName: string;
  type: ButtonTypes;
  loaderOn: boolean;
  disabled: boolean;
  width: string;
  height: string;
  children: ReactNode;
  onBlur: () => void;
  onClick: () => void;
};

export const Button: FC<ButtonComponentProps> = ({
    id,
    className = '',
    onClick,
    onBlur,
    type,
    loaderOn,
    disabled,
    children
  }) => {
  return <button
    id={ id }
    className={ `button ${ className }` }
    disabled={ disabled }
    onClick={ onClick }
    onBlur={ onBlur }
    type={ type }
  >
    { children }
    {
      loaderOn && (
        <div className="button__spinner-wrapper">
          <div>Loading...</div>
        </div>
      )
    }
  </button>;
};
