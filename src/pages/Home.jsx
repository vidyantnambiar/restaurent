import React, { useEffect } from 'react'
import { Row,Col } from 'react-bootstrap'
import Restcard from '../components/Restcard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurent } from '../redux/restaurentSlice'

function Home() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchRestaurent())
  },[])
  const allRest=useSelector(state=>state.restaurentSlice.allRestaurent)
  console.log("===1===");
  console.log(allRest);
  return (
    <>
    <Row>
    {
      allRest?.length>0?
      allRest.map((restaurent)=>(
        <Col classname='px-5 py-3' sm={6} md={4} lg={4}>
        <Restcard restaurent={restaurent}/>
        </Col>

      )):
      <p>No item to display</p>
    }
    
       
    </Row>
    </>
  )
}

export default Home