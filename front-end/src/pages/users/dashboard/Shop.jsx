import React from 'react'

import dataProduct from '../../../fakeData/product'
import { Card, Row, Container, Col } from 'react-bootstrap'
import { NavBarsLayout } from '../../../components/NavBarLayout/NavBarsLayout'
import { Link } from 'react-router-dom'

const Shop = () => {
	const title = "Shop";
	document.title = "DumbMerch | " + title;

	return (
		<>
			<NavBarsLayout />
			<Container className="mt-3">
				<Row>
					<Col>
						<div className="text-header-product">Product</div>
					</Col>
				</Row>
				<Row className="my-5 gx-3">
					{dataProduct.map((item, index) => (
						<Col lg={3} md={4} xs={6} className='mb-4' key={index}>
							<Card className='shadow bg-dark' style={{ width: '240px' }} >
								<Link to='/detail'>
									<Card.Img variant="top"
										src={item.url}
										className="img-fluid img-rounded"
										style={{ width: '240px', height: '220px' }}
									/>
								</Link>
								<Card.Body>
									<Card.Title className="text-header-product-item"> <strong>{item.name}</strong> </Card.Title>
									<Card.Text className="text-product-item">
										Rp. {item.price}
									</Card.Text>
									<Card.Text className="text-product-item"> Stock {item.stock}</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					))}

				</Row>
			</Container>

		</>
	)
}

export default Shop