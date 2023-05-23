import React, { useEffect, useState} from 'react'

import './stylesheet.css'

function App(){
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch('http://localhost:8081/flights')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err));

  }, [])
  return (
    <div class='box'>
      <table>
        <tbody>
          {data.map((d, i)=>(
            <tr key={i}>
              <td>{d.flightID}</td>
              <td>{d.seats_available}</td>
              <td>{d.destination}</td>
              <td>{d.ISO_to}</td>
              <td>{d.ISO_from}</td>
            </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default App