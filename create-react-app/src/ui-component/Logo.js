import logo from 'assets/images/logo.svg';
const Logo = () => {
  return (
    //if you want to use image instead of svg uncomment following, and comment out <svg> element.//

    <img src={logo} alt="logo" width="100" />
  );
};

export default Logo;
