import React,{useState} from "react";
import './App.css';
import data from "./data";

function App() {
  const [people,setPeople]=useState(data);
  return (
    <div className="box">
      <h3>Birthdays Today</h3>
      {
        people.map(el=>{
          return(
            <div key={el.id} className="container">
              <img style={{width:"70px",height:"70px",borderRadius:"50%"}}src={el.image} alt={el.name}/>
              <div>
                  <h5>{el.name}</h5>
                  <h5>{el.age} years</h5>
                </div>
              </div>
          )
        })
      }
    </div>
  );
}

export default App;
