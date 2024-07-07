import clsx from 'clsx';

const LoadMoreButton = ({ handleClick, otherStyles = '', disabled = false }) => {
  return (
    <button
      onClick={handleClick}
      className={clsx(
        'text-primary font-medium text-base h-[56px] px-8 border-[1px] border-slate-blue border-opacity-20 rounded-full hover:border-secondary-100 hover:border-opacity-100  focus:border-secondary-100 focus:border-opacity-100 transition-colors',
        otherStyles,
        disabled && 'opacity-70'
      )}
      disabled={disabled}
    >
      Load more
    </button>
  );
};

export default LoadMoreButton;
