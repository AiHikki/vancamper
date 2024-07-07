import clsx from 'clsx';

const CustomButton = ({
  children,
  handleClick,
  otherStyles = '',
  disabled = false,
  type = 'button',
}) => {
  return (
    <button
      onClick={handleClick}
      type={type}
      disabled={disabled}
      className={clsx(
        'font-medium text-white text-base min-h-[56px] rounded-full bg-secondary-100 hover:bg-secondary-200 focus:bg-secondary-200   transition-colors',
        disabled && 'opacity-70',
        otherStyles
      )}
    >
      {children}
    </button>
  );
};

export default CustomButton;
