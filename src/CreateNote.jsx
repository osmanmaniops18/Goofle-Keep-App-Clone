import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';


const CreateNote=(props)=>{

    const[data,setdata]=useState({
        title:"",
        content:"",
    });

    const inputdata=(event)=>{
    // const [name,value]=event.target;
    const name=event.target.name;
    const value=event.target.value;
     setdata((prevalue=>{
        return{
            ...prevalue,
            [name]:value,
        }
     }))
    };
    const inputEvent=()=>{
    if (data.target===""  || data.content===""){
        alert("Please Fill the Fields")
    }
    else{
    props.passNote(data);
    setdata({
        title:"",
        content:"",
    });
}
    };
   
    return (
        <>
   <div className="main_note">
    <form>
        <input type="text"  name="title" value={data.title} onChange={inputdata} placeholder="Title" autoComplete="off" />
        <br/>
        <textarea rows="4" name="content" value={data.content} onChange={inputdata} column="5" placeholder="Write a Note...."></textarea>
      <Button onClick={inputEvent}>
      <AddIcon className="addIcon"/>
      </Button>
    </form>
   </div>
        </>
    );
}


export default CreateNote; 