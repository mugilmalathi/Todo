import React, { useState } from 'react'
import "./index.scss"
import { BsFillGridFill } from "react-icons/bs";
import nodata from "../../assets/Images/nodata.gif"

const ViewTodo = () => {

  const[filter, setFilter]=useState(false)
  const[textcolor, setTextColor]=useState(0)
  const handleFilter =()=>{
    setFilter(true)
  }

  const arr = JSON.parse(localStorage.getItem('todo'))
  const[search, setSearch]=useState('')

  return (
    <>
      <div className='view'>
          <div className='view-filter'>
            <div>
              <input className='search-filter' type="text" name="" id="" placeholder='Search todo...' onChange={(e)=>setSearch(e.target.value)}/>
            </div>
            <div>
              <button onClick={handleFilter}><BsFillGridFill /></button>
            </div>
          </div>
          <div className='view-card'>
            <div>
              {
                arr && arr.length > 0
                ?
                arr.filter((data)=>data.toLowerCase().includes(search))
                .map((el, i)=>{
                  return(
                    <div className='view-box' key={i}>{el}</div>
                  )
                })
                :<div className='no-data'><img src={nodata} alt="" /> No data found..!</div>
              }
            </div>
          </div>
      </div>

      {
        filter===true
        ?
        <div className='filter'>
        <div className='filter-box' onClick={()=>setFilter(false)}>
          <div style={{color:textcolor===1?"#2398ff":"", fontWeight:textcolor===1?"bold":""}} onClick={()=>setTextColor(1)}>Completed</div>
          <div style={{color:textcolor===2?"#2398ff":"", fontWeight:textcolor===2?"bold":""}} onClick={()=>setTextColor(2)}>Alphabetical ↑</div>
          <div style={{color:textcolor===3?"#2398ff":"", fontWeight:textcolor===3?"bold":""}} onClick={()=>setTextColor(3)}>Alphabetical ↓</div>
          <div style={{color:textcolor===4?"#2398ff":"", fontWeight:textcolor===4?"bold":""}} onClick={()=>setTextColor(4)}>Latest</div>
          <div style={{color:textcolor===5?"#2398ff":"", fontWeight:textcolor===5?"bold":""}} onClick={()=>setTextColor(5)}>Oldest</div>
        </div>
      </div>
      :null
      }

    </>
  )
}

export default ViewTodo