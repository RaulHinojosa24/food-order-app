import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>Food Order</h1>
      <HeaderCartButton></HeaderCartButton>
    </header>
  );
};

export default Header;
