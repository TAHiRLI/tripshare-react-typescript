import React, { FC } from "react";
import { DropdownOption, PropsSetting } from "./types";
import "./style.scss";

const Dropdown: FC<PropsSetting> = ({ options, selection, handleChange }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOptionClick = (item: DropdownOption) => {
    setIsOpen((isOpen) => !isOpen);
    handleChange(item);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  let divEl = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const handleBodyClick = (e) => {
      if (!(divEl.current != null && divEl.current.contains(e.target))) {
        setIsOpen(false);
      }
    };
    document.body.addEventListener("click", handleBodyClick, true);

    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, []);

  const renderedOptions = options.map((item: DropdownOption, i) => {
    return (
      <li
        key={i}
        onClick={() => handleOptionClick(item)}
        className="dropdown__option pointer"
      >
        {item.label}
      </li>
    );
  });

  let content = "Select....";
  if (selection) {
    content = selection;
  }
  return (
    <div
      className=" dropdown"
      ref={divEl}
    >
      <span onClick={() => handleClick()} className="pointer">
        {content}
      </span>
      <ul>{isOpen && renderedOptions}</ul>
    </div>
  );
};

export default Dropdown;
