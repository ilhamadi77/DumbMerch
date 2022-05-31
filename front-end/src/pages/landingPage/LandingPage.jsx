import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import { useNavigate } from 'react-router-dom'

import Register from '../../components/auth/Register';
import Login from '../../components/auth/Login'

import image from '../../img/cart.png'


const LandingPage = () => {
  const title = "Landing Page";
  document.title = "DumbMerch | " + title;


  // move page
  // let navigate = useNavigate()

  //move state
  const [isRegister, setIsRegister] = useState(false)


  //TODO function switch component login and register
  const switchLogin = () => {
    setIsRegister(false)
  }
  const switchRegister = () => {
    setIsRegister(true);
  }
  //TODO end function

  return (
    <div className='bg-black'>
      <Container>
        <Row className="vh-100 d-flex align-items-center">
          <Col sm lg={6}>
            {/* leftside */}
            <div>
              <img src={image} className="img-fluid" style={{ width: "264px", height: "264px" }} alt="brand" />
              <h1 className='text-auth-header mt-4'>Easy, Fast and Reliable</h1>
              <p className='text-auth-paragh mt-3'>Go shopping for merchandise, just go to dumb merch shopping. the biggest merchandise in Indonesia</p>
              <button onClick={switchLogin} className="btn btn-login px-5">Login</button>
              <button onClick={switchRegister} className="btn btn-register px-5">Register</button>
            </div>
          </Col>

          <Col sm lg={6}>{isRegister ? <Register /> : <Login />}</Col>
        </Row>
      </Container>
    </div>
  )
}

export default LandingPage