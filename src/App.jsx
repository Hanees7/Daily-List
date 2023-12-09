import React, { useState } from 'react'
import Form from './Form'
import Table from './Table'

const App = () => {

  const [table, settable] = useState([
    {
      id:1,
      title:'Do Hard Work ==>',
      desc: 'Jab Tak Hai Jaan'

    },
    
   
  ])

  const [id, setId] = useState('')


  const deleteTo = (id)=>{
    settable(table.filter((d)=>d.id !=id))
  }
 
  return (
    <>
       <div className="container">
        <h1 className='text-center'>Tasks List</h1>
        <Form table={table} settable={settable} id={id} setId={setId}/>
        <Table table={table} deleteTo={deleteTo} setId={setId}/>
       
       </div>
    </>
  )
}

export default App