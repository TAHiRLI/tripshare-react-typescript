import React, { useEffect } from "react";
import { useReducer } from "react";
import { DropdownOption } from "../Dropdown/types";
import Dropdown from "../Dropdown";
import { SearchTermType } from "../../pages/Search/types";
import { cityService } from "../../APIs/services/cityService";



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
    case "reset":
    return {
      from:undefined,
      to:undefined,
      count:0,
      when:undefined
    }
    default:
      return state;
  }
};


const DropdownList:React.FC<PropsSetting> =  ({handleSearch})=> {

  const [cities, setCities] = React.useState<Array<DropdownOption>>([])

  React.useEffect(()=>{
    let response
    async function  getCities(){
       response = await  cityService.getAll().catch(err=>console.log(err));;
       setCities(() =>[ {label:"Select...", value:null}, ...response.data] 
       );
    }
  getCities()
  },[])
  
  let dateInputEl = React.useRef<HTMLInputElement>(null);
  let numberInputEl = React.useRef<HTMLInputElement>(null);

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
  const resetState = ()=>{
    dispatch({type:"reset"})
    if(dateInputEl.current)
      dateInputEl.current.value = ""
    if(numberInputEl.current)
      numberInputEl.current.value = "1"

      handleSearch({})
  }


  
  const handleSubmit = () => {
    handleSearch(state)
  };

  let filteredFromOptions = cities.filter((option)=>  option.value !== state.from )
  let filteredToOptions = cities.filter((option)=>  option.value !== state.to)

  return (
    <div className="bg-warning d-flex flex-column  ">
      <div className="d-flex justify-content-evenly">
           <Dropdown
        selection={state.from}
        handleChange={setFrom}
        options={filteredFromOptions}
      />
      <Dropdown selection={state.to} handleChange={setTo} options={filteredToOptions} />
      </div>
      <div className="d-flex mt-3">
      <input className="form-control" type="datetime-local" onChange={setWhen} ref={dateInputEl} />
      <input className="form-control" type="number" defaultValue={1} onChange={setCount} ref={numberInputEl} />

      </div>
   


      <button className="btn btn-info mt-4 px-5 " onClick={handleSubmit}>Axtar</button>
      <button className="btn btn-danger mt-4 px-5 " onClick={resetState}>Reset</button>
    </div>
  );
}

export default DropdownList;



interface PropsSetting {
    handleSearch: Function
}
