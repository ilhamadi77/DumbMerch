import React from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import DeleteData from '../../../components/modal/DeleteData'
import { NavBarAdmin } from '../../../components/NavBarLayout/NavBarAdmin'
import dataProduct from '../../../fakeData/product'

const ListProduct = () => {
  let navigate = useNavigate()
  const title = 'Product';
  document.title = "Product | " + title

  return (
    <>
      <NavBarAdmin title={title} />

      <Container className="py-5">
        <Row>
          <Col lg={6}>
            <h3 className="text-header-category mb-4">List Product</h3>
          </Col>
          <Col xs={6} className="text-end">
            <Button
              variant='success'
              style={{ width: "100px" }}
              onClick={() => { navigate('/admin/edit-product') }}
            >
              ADD
            </Button>
          </Col>
          <Col xs="12">
            {dataProduct.length !== 0 ? (
              <Table striped hover size="lg" variant="dark">
                <thead>
                  <tr>
                    <th width="1%" className="text-center">
                      No
                    </th>
                    <th>Photo</th>
                    <th>Product Name</th>
                    <th>Product Desc</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {dataProduct.map((item, index) => (
                    <tr key={index}>
                      <td className="align-middle text-center">{index + 1}</td>
                      <td className="align-middle">
                        <img
                          src={item.url}
                          style={{ width: "80px", height: "80px", objectFit: "cover" }}
                          alt={item.name}
                        />
                      </td>
                      <td className="align-middle">{item.name}</td>
                      <td className="align-middle">{item.desc}
                      </td>
                      <td className="align-middle">{item.price}</td>
                      <td className="align-middle">{item.stock}</td>
                      <td className="align-middle">
                        <Button
                          className="btn-sm btn-success me-2"
                          style={{ width: "110px" }}
                        >
                          Edit
                        </Button>
                        <DeleteData />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              <div className="text-center pt-5">
                <img src='' className="img-fluid" style={{ width: "40%" }} alt="empty" />
                <div className="mt-3">No data product</div>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ListProduct