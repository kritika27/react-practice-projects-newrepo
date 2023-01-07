import React,{useState} from "react";
import './App.css';
import reviews from './data';

function App() {
  const [review,setReview]=useState(reviews);
 const [index,setIndex]=useState(0);
 const item=review[index];

const prev=()=>{
  
  if(index===0)
  {
    setIndex(reviews.length-1);
  }
  else if(index<=reviews.length-1)
  {
    setIndex(prev=>prev-1);
  }
 } 

 const next=()=>{
  if(index<reviews.length-1)
  {
    setIndex(prev=>prev+1);
  }
  else if(index===reviews.length-1)
  {
    setIndex(0);
  }
 }
  return (
    <div className="container">
      <img style={{width:"100px",height:"100px"}}src={item.image} alt={item.name}/>
      <h2>{item.name}</h2>
      <p>{item.job}</p>
      <p>{item.text}</p>
  <i onClick={prev} className="fa fa-chevron-left" aria-hidden="true"></i>
  {" "}
      <i onClick={next} className="fa fa-chevron-right" aria-hidden="true"></i>
    </div>
  );
}

export default App;
