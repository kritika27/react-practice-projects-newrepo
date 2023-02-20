import React,{ useState,useEffect} from "react";
import './App.css';
import { TOURS_URL } from './constants';

function App() {
const [list,setList] =useState([]);

  useEffect(()=>{
  fetch(TOURS_URL).then(response=>response.json())
  .then(data=>setList(data))
  },[])

  const deleteItem=(id)=>{
    setList(list.filter(el=>el.id!==id))
  }
  return (
   <>
   <h1>Tours</h1>
   <div className="card">{
   list.map(el=>{
     return(
       <div className="tour" key={el.id}>
         <img src={el.image} alt={el.name}/>
         <div className="item">
         <p>{el.name}</p>
         <p className="price">${el.price}</p>
         </div>
         <div className="btn">
         <button  onClick={()=>deleteItem(el.id)}>Not Interested</button>
        
           </div>
        </div>
     )
   })
}</div>
   </>
  );
}

export default App;
