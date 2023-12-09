import React, { useEffect, useState } from "react";

const Form = ({table, settable, id, setId}) => {
  const [title, settitle] = useState("");
  const [desc, setdescri] = useState("");


  const handleSubmit = (e) =>{
    e.preventDefault();
    
    
     if(id){
        upDid(id)
        setId('');
     }
     else{
        const obj = {
        id:Math.random(),
        title,
        desc,
     }
         settable([...table, obj])

     }
     setId('');

     settitle('');
     setdescri('');
  }

useEffect(() => {
 if(id){
    const updData = table.filter((d)=>d.id === id)
settitle(updData[0].title)
setdescri(updData[0].desc)
}


}, [id])

const upDid = (id) =>{
    const obj = 
    {
        title,
        desc,
    }
    settable((prevData)=>prevData.map((todo)=>todo.id === id ? {...todo, ...obj}:todo))
}

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="container my-5 text-center"
      >
        <input 
        value={title}
         placeholder="Enter Your Task" className="mx-2" type="text" 
            onChange={(e)=>{
settitle(e.target.value)
            }}
         />
        <input
        value={desc} className="mx-2" type="text" placeholder="Details" 
            onChange={(e)=>setdescri(e.target.value)
            }
        />
        {
            id && (<button className="btn btn-warning">Edit</button>)
        }
        {
            !id && (<button className="btn btn-warning">Add</button>)
        }
        
      </div>
      </form>
    </>
  );
};

export default Form;
