import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CartWidget from "../CartWidget/CartWidget"
import LogoMundoDigital from './assest/LogoMundoDigital.png'
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand  >
                        <img src={LogoMundoDigital} alt="Logo Mundo Digital" width="40"
                            height="40"/>
                        <Link to={"/"} className='linkPrincipal'>
                            Mundo Digital
                        </Link>
                        
                    </Navbar.Brand>
                        
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="navCategory ms-5" variant="tabs"  >
                            <Nav.Item className='item'>
                                <NavLink  to={`/categoria/Notebook`} className='links'>Notebook</NavLink>
                            </Nav.Item>
                            <Nav.Item >
                                <NavLink to={`/categoria/Impresión`} className='links' >Impresión</NavLink>
                            </Nav.Item>
                            <Nav.Item className='item'>
                                <NavLink to={`/categoria/Gaming`} className='links' >Gamings</NavLink>
                            </Nav.Item>
                            <Nav.Item className='item'> 
                                <NavLink to={`/categoria/AudioyTv`} className='links' >Audio y Tv</NavLink>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                <CartWidget />
                </Container>
            </Navbar>
        </header>
        
    )
}

export default NavBar