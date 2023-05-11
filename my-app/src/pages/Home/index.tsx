import React from 'react'


 interface PropsSetting{
    content?:JSX.Element;
  }

const Home:React.FC<PropsSetting> = (props:PropsSetting)=> {
 
  return (
    <div>Home page
      <div>
        <h1>this is nested component</h1>
      {props.content}

      </div>
    </div>
  )
}

export default Home