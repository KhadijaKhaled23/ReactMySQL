import React, { useEffect, useState} from 'react'

import './stylesheet.css'

function App(){
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch('http://localhost:8081/courses/')
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
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.description}</td>
            </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default App