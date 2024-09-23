import React,{ useState,useEffect } from 'react'

function Usestatee(){
  const [name, setName]=useState("md")
  const [flag,setFlag] =useState(false)
  const [steps,setSteps]=useState(0)
  const [names,setNamaes]=useState([])
  
  function changeName(){
    console.log("clicked")
    
    return setFlag(!flag);
  }
  function incr(){
   return setSteps(steps+1)
  }
  function decr(){
    
    
    return setSteps(steps-1);
  }
  function addNames(e){
    e.preventDefault();
    setNamaes([...names,{id:names.length,name:name}])
    setName(" ")
  }
    return(
          <div>
            <div>hello {flag? name:""}</div>
            <button onClick={changeName}>click me</button>
            <hr></hr>
            <button onClick={incr}>+</button>
            <div>  {steps}</div>
            <button onClick={decr}>-</button>
            <hr></hr>
            <form onSubmit={addNames}>
             <input 
             type="text" 
             value={name}
             placeholder='add names'
             onChange={(e)=>setName(e.target.value)}
             />
             <button> submit</button>
            </form>
           <br />
           <ul>
             {names.map((items)=>(<li   key={items.id}>
                    {items.name}  
             </li>
             ))}
           </ul>
           <hr></hr>
</div>
    );
}
export default Usestatee;