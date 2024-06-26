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
        if (!parseFloat(inputs.latitude) || inputs.latitude < -90 || inputs.latitude > 90) {
          alert("Latitude must be a number between -90 and 90")
        }
        else if (!parseFloat(inputs.longitude) || inputs.longitude < -180 || inputs.longitude > 180) {
          alert("Longitude must be a number between -180 and 180")
        }
        else {
          setCoords(()=> ({
            latitude: inputs.latitude,
            longitude: inputs.longitude
        }))
        }   
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
