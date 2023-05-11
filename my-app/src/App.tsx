import React from 'react';


const App: React.FC = ()=>  {
  const arr: string[] = ["salam","sagol",""]

  
  return (
    <div className="App">
      <ul>
        {arr.map((item,i) =>(
        <li key={i}>{item}</li>
         ))}
      </ul>
    </div>
  );
}

export default App;
