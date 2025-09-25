import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    let navigate = useNavigate()
    let [input,setInput]=useState("")
    function handlejoin(){
     navigate(`/room/${input}`)
    }
  return (
    <div id="home">
      <input type="text" placeholder='enter room id' value={input}  onChange={(e) => setInput(e.target.value)
      }/>
      <button onClick={handlejoin}>Join Now</button>
    </div>
  )
}

export default Home
