import React, { useState } from 'react'

export default function mapSelector () {
    const [map, setMap] = useState("");
    const [confirm, setConfirm] = useState(false);
    
    function handleMapChange () {
      
    }
  return (
    <div>
      <div className='Paris'>
        <p> Paris Map</p>
        <img src=''></img>
        <button onClick={handleMapChange}>

        </button>
      </div>
    </div>
  )
}
