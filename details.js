import React from 'react'

function details({name, age}) {
  return (
    <div className="box">
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
    </div>
  )
}

export default details
