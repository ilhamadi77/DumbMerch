import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NavBarsLayout } from '../../../components/NavBarLayout/NavBarsLayout'

const Complain = () => {
	return (
		<>
			<NavBarsLayout />
			<Container>
				<Row>
					<Col lg={4} >
						<div className="d-flex flex-column">
							<div className='d-flex'>
								<img src="" alt="user" className='pe-3' />
								<div>
									<h5>Egi_LOl</h5>
									<p>Hello Admin I need you Help</p>
								</div>
							</div>

							<div className='d-flex'>
								<img src="" alt="user" className='pe-3' />
								<div>
									<h5>Beach Lover</h5>
									<p>Hello Admin this problem product to me</p>
								</div>
							</div>
						</div>
					</Col>
					<Col lg={8} style={{ border: '1px red solid' }} className='mb-0'>
						<div className='d-flex flex-column'>
							<div className="d-flex">
								<img src="" alt="user chat" />
								<p>Hello Admin i need help You</p>
							</div>
							<div>
								<input type="text" />
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default Complain