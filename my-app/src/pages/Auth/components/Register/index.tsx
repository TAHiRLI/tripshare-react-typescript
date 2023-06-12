import React from 'react'

function Register({changeOption}) {

  const handleClick = (e)=>{
    e.preventDefault();
    changeOption();
  }
  return (
    <div className='p-4' >
      <form action="">
        <div className="my-3">
          <label htmlFor="" className="form-label">Telefon nömrəsi</label>
          <input type="text" className='form-control' placeholder='(xx) xxx-xx-xx' />
        </div>
        <div className="my-3">
          <label htmlFor="" className="form-label">Yeni Şifrə</label>
          <input type="password" className='form-control' />
        </div>
        <div className='my-3'>
          <label className='form-label' htmlFor="">Təkrar şifrə</label>
          <input className='form-control' type="password" />
        </div>
        <div>
          <button type='submit' className='btn btn-success m-auto d-block mt-3'>Qeydiyyatdan keç</button>
        </div>
      </form>

      <p className="mt-3 text-center mb-0">

      <a href='#' onClick={handleClick}>Daxil Ol</a>

      </p>
    </div>
  )
}

export default Register