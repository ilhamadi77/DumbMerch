import React from 'react'
import { Col, Container, Row, Table, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { NavBarAdmin } from '../../../components/NavBarLayout/NavBarAdmin'
import dataCategory from '../../../fakeData/category'

const ProductCategory = () => {
  let navigate = useNavigate()
  const title = 'Category';
  document.title = 'DumbMerch | ' + title



  return (
    <>
      <NavBarAdmin title={title} />
      <Container>
        <Row>
          <Col lg={12} >
            <h3 className='text-header-category my-4'>List Category</h3>
          </Col>
          <Col lg={12} className='text-end'>
            <Button variant='success'
              style={{ width: "100px" }}
              onClick={() => { navigate('/admin/edit-category') }}
            > ADD</Button>
          </Col>
          <Col lg={12} className='my-3'>
            {dataCategory.length !== 0 ? (
              <Table striped hover size="lg" variant="dark">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Category Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {dataCategory.map((item, index) => (
                    <tr key={index}>
                      <td width="10%" className="align-middle">
                        {index + 1}
                      </td>
                      <td width="60%" className="align-middle">
                        {item.name}
                      </td>
                      <td width="30%">
                        <Button
                          className="btn-sm btn-success me-2"
                          style={{ width: "135px" }}
                        >
                          Edit
                        </Button>
                        <Button
                          className="btn-sm btn-danger"
                          style={{ width: "135px" }}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              <div className="text-center pt-5">
                <img src='' className="img-fluid" style={{ width: "40%" }} alt="empty" />
                <div className="mt-3">No data category</div>
              </div>
            )}
          </Col>

        </Row>
      </Container>
    </>
  )
}

export default ProductCategory