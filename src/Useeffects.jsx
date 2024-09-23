import React,{useEffect, useState } from 'react'
function UseEffects(){
   const [resourseType, setResourceType]= useState("posts")
   
   useEffect(()=>{
     alert("clicked");
    fetch(`https://jsonplaceholder.typicode.com/${resourseType}`)
    .then(response => response.json())
    .then(json => console.log(json))
   },[resourseType])
   function posts(){
     return setResourceType("posts")
   }
   function likes(){
    return setResourceType("users")
  }
  function comments(){
    return setResourceType("comments")
  }
   return (
    <>
    <button onClick={posts}>posts</button>
    <button onClick={likes}>likes</button>
    <button onClick={comments}>comments</button>
    <h1>{resourseType}</h1>
   

    </>
   )
   


}
export default UseEffects 