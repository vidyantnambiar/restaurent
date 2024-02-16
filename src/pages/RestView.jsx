import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Restreview from '../components/Restreview';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


function RestView() {
const{id}=useParams();
console.log("===id===",id);
const allRestaurent=useSelector(state=>state.restaurentSlice.allRestaurent)
const selectedRestaurent=allRestaurent?.filter(item=>item.id==id)
console.log(selectedRestaurent);



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={3}>
                    <img width={"100%"} className='rounded' src={selectedRestaurent[0]?.photograph} alt="" />
                </Col>
                <Col md={7}>
                    <h4 className='text-center'>
                        <span className='text-warning'>Restaurent </span>Details
                    </h4>
                    <hr />
                    <ListGroup >
                        <ListGroup.Item className='text-center p-3'>Restaurent Name:<span className='ms-3 text-primary'>{selectedRestaurent[0].name}</span></ListGroup.Item>
                        <ListGroup.Item>Neibhourhood:<span className='ms-3 text-primary'>{selectedRestaurent[0].neighborhood}</span></ListGroup.Item>
                        <ListGroup.Item>Cuisine Type:<span className='ms-3 text-primary'>{selectedRestaurent[0].cuisine_type}</span></ListGroup.Item>
                        <ListGroup.Item>Address:<span className='ms-3 text-primary'>{selectedRestaurent[0].address}</span></ListGroup.Item>
                        <ListGroup.Item className='text-center p-3 mb-2'>
                            <button  className='btn btn-warning me-3' onClick={handleShow}>Operating Hours</button>
                            <Restreview selectedRestaurent={selectedRestaurent[0]} />
                        </ListGroup.Item>
                    </ListGroup>

                </Col>
                <Col md={1}></Col>
            </Row>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Operating Hours</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <ListGroup>
      <ListGroup.Item>Monday: <span className='text-primary ms-3'>{selectedRestaurent[0].operating_hours.Monday}</span></ListGroup.Item>
      <ListGroup.Item>Tuesday: <span className='text-primary ms-3'>{selectedRestaurent[0].operating_hours.Tuesday}</span></ListGroup.Item>
      <ListGroup.Item>Wednesday: <span className='text-primary ms-3'>{selectedRestaurent[0].operating_hours.Wednesday}</span></ListGroup.Item>
      <ListGroup.Item>Thursday: <span className='text-primary ms-3'>{selectedRestaurent[0].operating_hours.Thursday}</span></ListGroup.Item>
      <ListGroup.Item>Friday: <span className='text-primary ms-3'>{selectedRestaurent[0].operating_hours.Friday}</span></ListGroup.Item>
      <ListGroup.Item>Saturday: <span className='text-primary ms-3'>{selectedRestaurent[0].operating_hours.Saturday}</span></ListGroup.Item>
      <ListGroup.Item>Sunday: <span className='text-primary ms-3'>{selectedRestaurent[0].operating_hours.Sunday}</span></ListGroup.Item>
    </ListGroup>
                </Modal.Body>
                
            </Modal>
        </>
    )
}

export default RestView