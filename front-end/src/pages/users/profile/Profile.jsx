import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NavBarsLayout } from '../../../components/NavBarLayout/NavBarsLayout'

import profile from '../../../img/foto-profile.png'
import imgCart from '../../../img/cart.png'

import dataTransaction from '../../../fakeData/transaction'




const Profile = () => {
	const title = "Profile";
	document.title = "DumbMerch | " + title;

	return (
		<>
			<NavBarsLayout title={title} />
			<Container>
				<Row>
					<Col md lg={6}>
						<h1 className="text-header-product mb-4">My Profile</h1>
						<Row>
							<Col lg={6}>
								<img src={profile} className="img-fluid rounded" alt="avatar" />
							</Col>
							<Col lg={6}>
								<h5 className='text-danger'>Name</h5>
								<h6>Yosep</h6>

								<h5 className='text-danger'>Email</h5>
								<h6>Yosepgans@gmail.com</h6>

								<h5 className='text-danger'>Phone</h5>
								<h6>0899843843</h6>

								<h5 className='text-danger'>Gender</h5>
								<h6>Laki-laki</h6>

								<h5 className='text-danger'>Address</h5>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
								<button className='btn btn-danger'>Edit Profile</button>
							</Col>
						</Row>
					</Col>

					<Col md lg={6}>
						<h1 className="text-header-product mb-4">My Transaction</h1>
						{dataTransaction.map((item, index) => (
							<div style={{ background: "#303030" }} className="p-2 mb-1" key={index}>
								<Container fluid className="px-1" >
									<Row >
										<Col xs="3">
											<img
												src={item.img}
												alt="img"
												className="img-fluid"
												style={{ height: "120px", width: "170px", objectFit: "cover" }}
											/>
										</Col>
										<Col xs="6">
											<div
												style={{
													fontSize: "18px",
													color: "#F74D4D",
													fontWeight: "500",
													lineHeight: "19px",
												}}
											>
												{item.name}
											</div>
											<div
												className="mt-2"
												style={{
													fontSize: "14px",
													color: "#F74D4D",
													fontWeight: "300",
													lineHeight: "19px",
												}}
											>
												{item.date}
											</div>

											<div
												className="mt-3"
												style={{
													fontSize: "14px",
													fontWeight: "300",
												}}
											>
												Price : {item.price}
											</div>

											<div
												className="mt-3"
												style={{
													fontSize: "14px",
													fontWeight: "700",
												}}
											>
												Sub Total : {item.subtotal}
											</div>
										</Col>
										<Col xs="3">
											<img src={imgCart} alt="img" className="img-fluid" style={{ maxHeight: "120px" }} />
										</Col>
									</Row>
								</Container>
							</div>
						))}
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default Profile