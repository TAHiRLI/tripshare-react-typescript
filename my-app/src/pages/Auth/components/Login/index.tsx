import React from 'react'

function Login({changeOption}) {

  const handleClick = (e)=>{
    e.preventDefault();
    changeOption()
  }
  return (
    <div className='p-4' >

      <form action="">
        <div className='my-3'>
            <label className='form-label' htmlFor="">Telefon nömrəsi</label>
            <input className='form-control' type="text"  placeholder='(xx) xxx-xx-xx'/>
        </div>

        <div className='my-3'>
          <label className='form-label' htmlFor="">Şifrə</label>
          <input className='form-control' type="password" />
        </div>
     

        <div className="">
          <button className="m-auto d-block mt-3 btn btn-success">Daxil</button>
        </div>

      </form>

    <p className='text-center mt-3 mb-0'>

      <a href="" onClick={handleClick}>Qeydiyyatdan keç</a>
    </p>
    </div>
  )
}

export default Login