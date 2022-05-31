import React from 'react'
import icon from '../../img/cart.png'
import { Link, useNavigate } from 'react-router-dom'
import { Nav, Navbar, Container } from 'react-bootstrap'

export const NavBarsLayout = (props) => {
	// move page
	let navigate = useNavigate()

	//Function Logout page
	const logout = () => {
		navigate('/auth')
	}

	return (
		<>
			<Navbar>
				<Container fluid>
					<Navbar.Brand as={Link} to='/'>
						<img
							src={icon}
							className="img-fluid "
							style={{ width: "60px", height: "60px", marginLeft: '70px' }}
							alt="brand"
						/>
					</Navbar.Brand>
					<Nav className="ms-auto">
						<Nav.Link as={Link} to='/complain'
							className={props?.title == "Complain" ? `text-navbar-active` : `text-navbar`}>
							Complain</Nav.Link>
						<Nav.Link as={Link}
							to='/profile'
							className={props?.title == "Profile" ? `text-navbar-active` : `text-navbar`}>
							Profile
						</Nav.Link>
						<Nav.Link onClick={logout} className='text-navbar'>Logout</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	)
}
