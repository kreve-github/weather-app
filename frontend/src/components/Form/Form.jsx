import React, { useState } from 'react'

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
        // updateCoords(()=> ({
        //     latitude: inputs.latitude,
        //     longitude: inputs.longitude
        //     }))
        console.log("form", inputs.latitude, inputs.longitude)
    }

    return (
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="latitude" 
          value={inputs.latitude || ""} 
          onChange={handleChange}
        />
          <input 
            type="number" 
            name="longitude" 
            value={inputs.longitude || ""} 
            onChange={handleChange}
          />
          <input type="submit" />
      </form>
    )
  }

export default MyForm
