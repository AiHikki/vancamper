import CustomNavLink from './CustomNavLink';
import Logo from './Logo';

const NavBar = () => {
  return (
    <div className="flex justify-between items-center">
      <Logo />
      <nav className="flex gap-4">
        <CustomNavLink to="/">Home</CustomNavLink>
        <CustomNavLink to="/catalog">Catalog</CustomNavLink>
        <CustomNavLink to="/favorites">Favorites</CustomNavLink>
      </nav>
    </div>
  );
};

export default NavBar;
