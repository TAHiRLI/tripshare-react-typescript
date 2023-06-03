import React from 'react'
import Dropdown from '../../components/Dropdown';
import { DropdownOption } from '../../components/Dropdown/types';

import 'bootstrap/dist/css/bootstrap.min.css';

 interface PropsSetting{
    content?:JSX.Element;
  }

const options =[
  {label:"red", value:"red"},
  {label:"blue", value:"red"},
  {label:"green", value:"red"},
  {label:"yellow", value:"red"}
]

const Home:React.FC<PropsSetting> = (props)=> {
  
  const [selection, setSelection] = React.useState<DropdownOption | undefined>();
  const handleSelect =(option:DropdownOption)=>{
    setSelection(option);
  }


  return (
    <div>Home page
      <div>
        <h1>this is nested component</h1>
      {props.content}


      <div className='d-flex'>

      <Dropdown options={options} selection={selection} handleChange={handleSelect}/>
      <Dropdown options={options} selection={selection} handleChange={handleSelect}/>
      </div>
      </div>
    </div>
  )
}

export default Home