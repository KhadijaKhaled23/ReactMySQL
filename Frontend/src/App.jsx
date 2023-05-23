import React, { useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card';

import './stylesheet.css'

function App(){
  const [data, setData] = useState([])
  
  useEffect(()=>{
    async function fetchData() {
      const response = await fetch('http://localhost:8081/flights');
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, [])
  return (
    <div>
      {data.map(item => (
        <Card key={item.flightID} style={{ width: '18rem' }}>
          <Card.Body className='styleCardContent'>
            <Card.Text >{item.flightID} {item.seats_available} {item.destination}</Card.Text>
          </Card.Body>
        </Card>
      ))}
  </div>
  )
}

export default App