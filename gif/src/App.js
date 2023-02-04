import React,{useState,useEffect} from "react";
import './App.css';
import axios from "axios";

function App() {
const [text,setText] =useState("");
const [list,setList] =useState([]);
const [gif,setGif] =useState("");
const [showSearch,setShowSearch]=useState(false);
const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const results = await axios("https://api.giphy.com/v1/gifs/trending", {
          params: {
            api_key: "1YzFON7sL6ki0l061GknZH5FXlzjqeVb",
            limit: 10
          }
        });

        console.log(results);
        setData(results.data.data);
      } catch (err) {
        setIsError(true);
        setTimeout(() => setIsError(false), 4000);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  useEffect(()=>{
if(gif)
{
  setShowSearch(false);
}
  },[gif])

const handleSubmit=(e)=>{
  e.preventDefault();
  const newItem={
    id:Math.random(),
    text,
    gif

  }
  if(text && gif)
  {
    setList([...list,newItem]);
    setText("");
    setGif("");
  }
  
}
  return (
    <>
      <form onSubmit={handleSubmit} className="form">
      <textarea type="text" value={text} onChange={(e)=>setText(e.target.value)} />
      {gif && <img src={gif} alt="name"/>}
      <div style={{display:"flex"}}>
      <button onClick={()=>setShowSearch(!showSearch)}>GIF</button>
     
      <button type="submit">Post</button>
      </div>
      {showSearch && <div className="gif">
        <input type="search" onChange={(e)=>setSearch(e.target.value)}/>
        <div>
          {
            data.map(el => {
              return (
                <div key={el.id}>
                  <img src={el.images.fixed_height.url} alt="hello" onClick={()=>setGif(el.images.fixed_height.url)}/>
                </div>
            )})}
        </div>
        </div>}
      
      
</form>

<div>{
  list.map(el=>{
    return(
      <div>
        <p>{el.text}</p>
        <img src={el.gif} alt="title"/>
        </div>
    )
  })
}</div>
    </>
  );
}

export default App;
