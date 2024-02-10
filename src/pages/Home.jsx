import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Restcard from '../components/Restcard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurant } from '../redux/restaurantSlice';


function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRestaurant())

  }, [])
  const allRest = useSelector(state => state.restaurantSlice.allRestaurant)
  console.log("==1==");
  console.log(allRest);
  return (
    <>
      <Row>{
        allRest?.length>0?
        allRest.map((restaurant)=>(
        <Col className='px-5 py-3' sm={6} md={4} lg={4}>
          <Restcard restaurant={restaurant} />

        </Col>
        )):
        <p>No item to display</p>
      }
      </Row>
    </>
  )
}

export default Home