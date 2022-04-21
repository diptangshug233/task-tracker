import PropTypes from "prop-types";
import Button from "./Button";
const Header = ({ title, toggleShow, show }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={show ? "red" : "green"}
        text={show ? "Close" : "New"}
        addClick={toggleShow}
      />
    </header>
  );
};
Header.defaultProps = {
  title: "Task Tracker",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
