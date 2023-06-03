import React from "react";
import { useReducer } from "react";
import { DropdownOption } from "../Dropdown/types";
import Dropdown from "../Dropdown";
import { SearchTerm } from "../../pages/Search/types";

const FromOptions: Array<DropdownOption> = [
  { label: "Lənkəran", value: "Lənkəran" },
  { label: "Bakı", value: "Bakı" },
  { label: "Masallı", value: "Masallı" },
  { label: "Sumqayıt", value: "Sumqayıt" },
  { label: "Qəbələ", value: "Qəbələ" },
];

const ToOptions: Array<DropdownOption> = [
  { label: "Lənkəran", value: "Lənkəran" },
  { label: "Bakı", value: "Bakı" },
  { label: "Masallı", value: "Masallı" },
  { label: "Sumqayıt", value: "Sumqayıt" },
  { label: "Qəbələ", value: "Qəbələ" },
];

const reducer = (state: SearchTerm, action: any): SearchTerm => {
  switch (action.type) {
    case "set/to":
      return {
        ...state,
        to: action.payload,
      };
    case "set/from":
      return {
        ...state,
        from: action.payload,
      };

    case "set/when":
      return {
        ...state,
        when: action.payload,
      };
    case "set/count":
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};

function DropdownList ({handleSearch}) {
  const [state, dispatch] = useReducer(reducer, {
    from: "",
    to: "",
    when: "",
    count: 0,
  });
  const setTo = (option: DropdownOption) => {
    dispatch({ type: "set/to", payload: option.value });
  };
  const setFrom = (option: DropdownOption) => {
    dispatch({ type: "set/from", payload: option.value });
  };
  const setWhen = (e) => {
    dispatch({ type: "set/when", payload: e.target.value });
  };
  const setCount = (e) => {
    dispatch({ type: "set/count", payload: parseInt(e.target.value) });
  };

  const handleSubmit = () => {
    handleSearch(state)
  };

  return (
    <div className="bg-danger p-5 d-flex">
      <Dropdown
        selection={state.from}
        handleChange={setFrom}
        options={FromOptions}
      />
      <Dropdown selection={state.to} handleChange={setTo} options={ToOptions} />

      <input type="date" onChange={setWhen} />
      <input type="number" defaultValue={1} onChange={setCount} />

      <button onClick={handleSubmit}>Axtar</button>
    </div>
  );
}

export default DropdownList;
