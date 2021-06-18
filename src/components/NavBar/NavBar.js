import React from 'react';
import * as ReactBoostrap from "react-bootstrap"
import CartWidget from './cartWidget/cartWidget'
import './NavBar.css'

export const NavBar = () =>{
      return (<ReactBoostrap.Navbar collapseOnSelect expand="lg"  variant="dark" className="navBar">
              <ReactBoostrap.Navbar.Brand href="#home" className="titulo">
                  Wings Style
              </ReactBoostrap.Navbar.Brand>
    
      <ReactBoostrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBoostrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBoostrap.Nav className="mr-auto">
            <ReactBoostrap.Nav.Link className="secciones" href="#productos">Productos</ReactBoostrap.Nav.Link>
            <ReactBoostrap.Nav.Link className="secciones" href="#contacto">Contacto</ReactBoostrap.Nav.Link>
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
