import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NavBarAdmin } from '../../../components/NavBarLayout/NavBarAdmin'


const EditCategory = () => {
  const title = 'Category';
  document.title = "Category | " + title

  return (
    <>
      <NavBarAdmin title={title} />
      <Container>
        <Row>
          <Col lg={12} >
            <h4 className='text-white'>List Category</h4>
            <input type="text" placeholder='Category list' className='col-lg-12 py-2' />
            <button className='btn btn-success col-lg-12 my-5'>Save</button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default EditCategory