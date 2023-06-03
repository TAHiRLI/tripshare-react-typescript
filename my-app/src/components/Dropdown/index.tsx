import React, { FC } from 'react'
import { DropdownOption, PropsSetting } from './types';






const Dropdown:FC<PropsSetting> = ({options,selection, handleChange})=> {

    const [isOpen, setIsOpen] = React.useState(false);

    const handleOptionClick =(item:DropdownOption)=>{
        console.log(item.label)
        setIsOpen((isOpen)=> !isOpen)

        handleChange(item)
    }

    const handleClick=()=>{
        setIsOpen(!isOpen)
    }
  

   let divEl = React.useRef<HTMLDivElement|null>(null);
   
    React.useEffect(()=>{
        const handleBodyClick = (e)=>{
            
            if( !(divEl.current != null && divEl.current.contains(e.target)) ){
                setIsOpen(false)
            }
          
        }
        document.body.addEventListener("click",handleBodyClick,true)

     return ()=>{
        document.body.removeEventListener("click", handleBodyClick)
     }
        
    },[])

    

    const renderedOptions = options.map((item:DropdownOption,i)=>{
        return <div key={i} onClick={()=>handleOptionClick(item)}  className='pointer bg-danger my-2'  >{item.label}</div>
    })


    let content = "Select....";
    if(selection){
        content = selection.label
    }
  return (
    <div className='p-2 bg-warning border border-dark mx-2 rounded select' ref={divEl}>
        <div onClick={()=>handleClick()}  className='pointer' >{content}</div>
        {isOpen && renderedOptions}
    </div>
  )
}

export default Dropdown