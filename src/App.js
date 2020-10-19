import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const first = "Adam";
  const last = "Clark";
  const age = 32;
  const job = "Anonymous";

  const mArr = [1,2,3,4];

  const mObj ={
    name: "Ankit",
    age: 23
  }

  const iplaceholder="Enter your details";

  const detailsplace =  <input placeholder={iplaceholder}/>
  
  const fullName = (first, last) => {
    return (`${first} ${last}`);
  }

  return (
    <div className="App">
     <div>
       <h3> Blog Title 1</h3>
       <p>  Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
     </div>
    </div>
  );
}

export default App;
