import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const CustomNavLink = ({ children, to = '/' }) => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(
      'py-4 font-semibold after:transition-all',
      isActive &&
        'relative  after:absolute after:w-full after:h-1 after:bg-secondary-100 after:bottom-0 after:left-0 after:rounded-xl '
    );
  };

  return (
    <NavLink to={to} className={buildLinkClass}>
      {children}
    </NavLink>
  );
};

export default CustomNavLink;
