import React, { useState } from 'react';
import Header  from './Header';
import './App.css';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';

function App() {
  const[items,setItems]=useState([]);
  const addNote=(data)=>{
   setItems((prevalue)=>{
    return [...prevalue,data];
   });
  
  };
  const onDelete=(id)=>{
   setItems((olddata)=>
   olddata.filter((currentdata,index)=>{
    return index !==id;
   })
   )
  };
  return (
    <>
<Header/>

<CreateNote passNote={addNote}/>

{
  items.map((val,index)=>{
    return <Note
      key={index}
      id={index}
      title={val.title}
      content={val.content}
      deleteItem={onDelete}
    />
  })
}
<Footer/>
    </>
  );
}

export default App;
