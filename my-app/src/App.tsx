import React from 'react';
import Home from './pages/Home';
import About from './pages/About';


const App: React.FC = ()=>  {

  
  return (
    <div className="App">
      <Home content={<About/>}/>
    </div>
  );
}

export default App;
