import React, { useState } from 'react'
import "./index.scss"
import { BsFillBrushFill } from "react-icons/bs";
import { BsTrashFill } from "react-icons/bs";
import { BsCheckCircle } from "react-icons/bs";

const AddTodo = () => {

    const[search, setSearch]=useState('')
    const[todo, setTodo]=useState([])

    const arr = JSON.parse(localStorage.getItem('todo'))
    console.log(arr);
  
    const handleTodo=()=>{
      if(search != ""){
        setTodo([...todo, search])
        localStorage.setItem('todo', JSON.stringify([...todo, search]))
      }
    }

    const handleTododelete=(id)=>{
        const deleteData = arr.filter((el, i)=>i !== id)
        setTodo(deleteData)
        localStorage.setItem('todo', JSON.stringify(deleteData))
    }

  return (
    <div className='add'>
        <div className='add-search'>
            <input 
            type="text" 
            placeholder="Enter"
            onChange={(e)=>setSearch(e.target.value)}
            />
            <div onClick={()=>handleTodo()} className="submit"><BsFillBrushFill /></div>
        </div>

        <div className='table'>
        <table>
            <thead>
                <tr>
                    <td>S No</td>
                    <td>Your Task</td>
                    <td>Status</td>
                </tr>
            </thead>
            <tbody>
                {
                    arr && arr.length > 0
                    ? 
                    arr.map((el, i)=>{
                        return(
                            <tr>
                                <td>{i+1}</td>
                                <td>{el}</td>
                                <td>
                                    <div
                                      onClick={()=>{
                                        handleTododelete(i)
                                      }}
                                    ><BsTrashFill /></div>
                                    <div><BsCheckCircle /></div>
                                </td>
                            </tr>
                        )
                    })
                    :
                    <tr style={{
                        position:"absolute",
                        left:"30%",
                        top:"35%",
                        color:"red"
                    }}>
                        No Data Found
                    </tr>
                }
            </tbody>
        </table>
        </div>
        
    </div>
  )
}

export default AddTodo