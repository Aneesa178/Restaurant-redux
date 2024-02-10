import React from 'react'
import { Row, Col } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import RestReview from '../components/RestReview';
import { useSelector } from 'react-redux';

function Restview() {
    const { id } = useParams();
    console.log("===id===", id);
    const allRestaurant = useSelector(state => state.restaurantSlice.allRestaurant)
    const selectedRest = allRestaurant?.filter(item => item.id == id)
    console.log(selectedRest);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <>

            <Row className='mt-5 mb-5'>
                <Col md={1}>

                </Col>
                <Col md={3}>
                    <img
                        width={'100%'} className='rounded'
                        src={selectedRest[0]?.photograph} alt="" />
                </Col>
                <Col md={7} className='px-5'>
                    <hr />
                    <h4 className='text-center'>
                        <span className='text-warning'>Restaurant</span> Details
                    </h4>
                    <hr />
                    <ListGroup>
                        <ListGroup.Item>Restaurant Name:{selectedRest[0]?.name}</ListGroup.Item>
                        <ListGroup.Item>Neighbourhood:{selectedRest[0]?.neighborhood}</ListGroup.Item>
                        <ListGroup.Item>Cuisine Type:{selectedRest[0]?.cuisine_type}</ListGroup.Item>
                        <ListGroup.Item>Address:{selectedRest[0]?.address}</ListGroup.Item>
                        <ListGroup.Item className='text-center p-3 mb-2'>
                            <button onClick={handleShow} className='btn btn-warning'>Operating Hours</button>
                            <RestReview selectedRest={selectedRest?.selectedRest}/>

                            

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
                        <ListGroup.Item>Monday:<span className='text-primary ms-3'>{selectedRest[0]?.operating_hours.Monday}</span></ListGroup.Item>
                        <ListGroup.Item>Tuesday:<span className='text-primary ms-3'>{selectedRest[0]?.operating_hours.Tuesday}</span></ListGroup.Item>
                        <ListGroup.Item>Wednesday:<span className='text-primary ms-3'>{selectedRest[0]?.operating_hours.Wednesday}</span></ListGroup.Item>
                        <ListGroup.Item>Thursday:<span className='text-primary ms-3'>{selectedRest[0]?.operating_hours.Thursday}</span></ListGroup.Item>
                        <ListGroup.Item>Friday:<span className='text-primary ms-3'>{selectedRest[0]?.operating_hours.Friday}</span></ListGroup.Item>
                        <ListGroup.Item>Saturday:<span className='text-primary ms-3'>{selectedRest[0]?.operating_hours.Saturday}</span></ListGroup.Item>
                        <ListGroup.Item>Sunday:<span className='text-primary ms-3'>{selectedRest[0]?.operating_hours.Sunday}</span></ListGroup.Item>
                    </ListGroup>
                </Modal.Body>

            </Modal>


        </>
    )
}

export default Restview