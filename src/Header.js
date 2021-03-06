import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <div>
      <header className="header">
        <h1>{title}</h1>
        <Button
          color={showAdd ?'red ':'green'}
          text={showAdd ? "close" : "Add"}
          onClick={onAdd}
        />
      </header>
    </div>
  );
};
Header.defaultProps = {
  title: "Task Tracker",
};
Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
