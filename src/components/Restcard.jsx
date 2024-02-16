import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Restcard({restaurent}) {
  return (
<>
<Link to={`/restview/${restaurent.id}`}style={{textDecoration:"none"}}>
<Card style={{ width: '18rem' }}>
      <Card.Img height={"300px"}width={"100%"} variant="top" src={restaurent.photograph}/>
      <Card.Body>
        <Card.Title>{restaurent.name}</Card.Title>
        <Card.Text>{restaurent.neighborhood}</Card.Text>
      </Card.Body>
    </Card>
    </Link>
</>
  )
}
export default Restcard