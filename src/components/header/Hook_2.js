import React from 'react'
import { useState } from 'react'

export default function Hook2() {
    const [count, setCount] = useState(1)
    function give_count(){
        setCount(count+10)
    }
  return (
    <div>
      <button onClick={give_count}>Up</button>
      {count}
    </div>
  )
}
