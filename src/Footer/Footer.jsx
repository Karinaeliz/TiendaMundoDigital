
import { Link, NavLink } from "react-router-dom"
import LogoMundoDigital from './assest/LogoMundoDigital.png'
import './Footer.css'
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="page-footer font-small blue pt-4 bg-dark">
    <div className="container-fluid text-center text-md-left text-white">
        <div className="row">
            <div className="col-md-4 mt-md-0 mt-3">
                <Link to='/' className="home">
                    <img src={LogoMundoDigital} alt="logo Mundo digital" />
                    <h5 className="text-uppercase link">Mundo Digital</h5>
                </Link>
                <p>Lo mejor en tecnología</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Categorías</h5>
                <ul className="list-unstyled">
                    <li><NavLink  to={`/categoria/Notebook`} className='links'>Notebook</NavLink></li>
                    <li><NavLink to={`/categoria/Impresión`} className='links' >Impresión</NavLink></li>
                    <li><NavLink to={`/categoria/Gaming`} className='links' >Gamings</NavLink></li>
                    <li><NavLink to={`/categoria/AudioyTv`} className='links' >Audio y Tv</NavLink></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Contacto</h5>
                <ul className="list-unstyled">
                    <li ><a href="https://www.linkedin.com/in/karina-fernandez23/" target="_blank" rel="noreferrer"><FaLinkedin className="contacto"/></a></li>
                    <li ><a href="https://github.com/Karinaeliz" target="_blank" rel="noreferrer">< FaGithubSquare className="contacto"/></a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3 text-white">
        <p>
            @{new Date().getFullYear()} Karina Fernandez
        </p>
    </div>

</footer>
    
  )
}

export default Footer