import React from 'react'
import "./style.scss"
import Login from './components/Login'
import Register from './components/Register';
import { Outlet } from 'react-router-dom';

function AuthPage() {
 const [isMember, setIsMemeber] = React.useState<boolean>(false);
  
 const changeComponent = ()=>{
  setIsMemeber(state=>!state)
 }

  return (
    <div className='bg-success h-min-100 d-flex justify-content-center align-items-center'>
       
      <div className='bg-warning p-3 rounded-3'>
        {isMember? <Login changeOption={changeComponent}/>: <Register changeOption={changeComponent}/> }

      </div>

    </div>
  )
}

export default AuthPage