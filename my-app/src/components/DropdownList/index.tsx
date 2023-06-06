import React from "react";
import { useReducer } from "react";
import { DropdownOption } from "../Dropdown/types";
import Dropdown from "../Dropdown";
import { SearchTermType } from "../../pages/Search/types";



const reducer = (state: SearchTermType, action: any): SearchTermType => {
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


const DropdownList:React.FC<PropsSetting> =  ({handleSearch})=> {

  const FromOptions: Array<DropdownOption> = [
    {label:"Select...", value:null},
    { label: "Lənkəran", value: "Lənkəran" },
    { label: "Bakı", value: "Bakı" },
    { label: "Masallı", value: "Masallı" },
    { label: "Sumqayıt", value: "Sumqayıt" },
    { label: "Quba", value: "Quba" },
    
  ];
  
  const ToOptions: Array<DropdownOption> = [
    {label:"Select...", value:null},
    { label: "Lənkəran", value: "Lənkəran" },
    { label: "Bakı", value: "Bakı" },
    { label: "Masallı", value: "Masallı" },
    { label: "Sumqayıt", value: "Sumqayıt" },
    { label: "Quba", value: "Quba" },
  ];


  const [state, dispatch] = useReducer(reducer, {
    from: undefined,
    to: undefined,
    when: undefined,
    count: 0,
  });
  const setTo = (option: DropdownOption) => {
    if(option.value === state.from){
    dispatch({ type: "set/from", payload: null});

    }
    dispatch({ type: "set/to", payload: option.value });
  };
  const setFrom = (option: DropdownOption) => {
    if(option.value === state.to){
      dispatch({ type: "set/to", payload: null });
      
    }
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

  let filteredFromOptions = FromOptions.filter((option)=>  option.value !== state.from )
  let filteredToOptions = ToOptions.filter((option)=>  option.value !== state.to)

  return (
    <div className="bg-danger d-flex flex-column  ">
      <div className="d-flex justify-content-evenly">
           <Dropdown
        selection={state.from}
        handleChange={setFrom}
        options={filteredFromOptions}
      />
      <Dropdown selection={state.to} handleChange={setTo} options={filteredToOptions} />
      </div>
      <div className="d-flex mt-3">
      <input className="form-control" type="datetime-local" onChange={setWhen} />
      <input className="form-control" type="number" defaultValue={1} onChange={setCount} />

      </div>
   


      <button className="btn btn-info mt-4 px-5 " onClick={handleSubmit}>Axtar</button>
    </div>
  );
}

export default DropdownList;



interface PropsSetting {
    handleSearch: Function
}
