import React from 'react';
import * as ReactBoostrap from 'react-bootstrap';
import CartWidget from './cartWidget/cartWidget';
import './NavBar.css';
import { Link } from 'react-router-dom';



export const NavBar = () =>{

  const remeras = "remeras";
  const faldas = "faldas";
  const pantalones = "pantalones";
  const abrigos = "abrigos";


      return (<ReactBoostrap.Navbar collapseOnSelect expand="lg"  variant="dark" className="navBar">
              <Link to={`/`} className="titulo"> Wings Style</Link>
    
      <ReactBoostrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBoostrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBoostrap.Nav className="mr-auto">
            <Link to={`/`} className="categorias" >Productos</Link>
            <Link to={`/category/${remeras}`} className="categorias" >Remeras</Link>
            <Link to={`/category/${faldas}`} className="categorias" > Faldas </Link>
            <Link to={`/category/${pantalones}`} className="categorias" > Pantalones</Link>
            <Link to={`/category/${abrigos}`} className="categorias" > Abrigos </Link>

          </ReactBoostrap.Nav>
          <ReactBoostrap.Nav>
              <ReactBoostrap.Nav.Link href="#deets">
                <CartWidget/>
              </ReactBoostrap.Nav.Link>
          </ReactBoostrap.Nav>
      </ReactBoostrap.Navbar.Collapse>
    </ReactBoostrap.Navbar>
    )
}
