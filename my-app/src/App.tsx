import React from 'react';
import Router from './pages/router';


const App: React.FC = ()=>  {

  
  return (
    <>
     <Router/>
    <div className='privateRoute'></div>
    </>
  );
}

export default App;
