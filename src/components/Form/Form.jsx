import React, { useState } from 'react'
import './Form.css'

function MyForm( {setCoords } ) {
    const [inputs, setInputs] = useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
        event.preventDefault()
        setCoords(()=> ({
            latitude: inputs.latitude,
            longitude: inputs.longitude
        }))
    }

    return (
      <>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="latitude" 
            value={inputs.latitude || ""} 
            onChange={handleChange}
            placeholder='Latitude'
          />
            <input 
              type="text" 
              name="longitude" 
              value={inputs.longitude || ""} 
              onChange={handleChange}
              placeholder='Longitude'
            />
            <input className="searchButton" type="submit" value="Search"/>
        </form>
      </>
    )
  }

export default MyForm
