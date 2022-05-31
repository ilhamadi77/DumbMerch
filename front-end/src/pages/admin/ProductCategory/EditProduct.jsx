import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NavBarAdmin } from '../../../components/NavBarLayout/NavBarAdmin'


const EditProduct = () => {
  const title = 'Product';
  document.title = "Product | " + title

  return (
    <>
      <NavBarAdmin title={title} />
      <Container>
        <Row>
          <Col>
            <h1 className='text-white'>Edit Product</h1>
            <div className="d-flex mb-3">
              <button className='btn btn-danger'>Upload Image</button>
              <h6>Mouse.jpg</h6>
            </div>

            <input type="text" placeholder='mouse' className="col-lg-12 mb-3 " />
            <textarea name="" id="" cols="10" rows="5" className="col-lg-12 mb-3 bg-secondary"></textarea>
            <input type="text" placeholder='500.000' className="col-lg-12 mb-3 bg-secondary" />
            <input type="text" placeholder='600' className="col-lg-12 mb-3 bg-secondary" />

            <button className='btn btn-success col-lg-12'>Save</button>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default EditProduct