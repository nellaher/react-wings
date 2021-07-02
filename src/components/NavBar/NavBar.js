import React, { useContext }  from 'react';
import * as ReactBoostrap from 'react-bootstrap';
import './NavBar.css';
import { Link } from 'react-router-dom';
import {CartWidget} from './cartWidget/cartWidget'
import { CartContext } from '../../CartContext/CartContext';



export const NavBar = props =>{
  const {itemsCart} = useContext(CartContext)
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
            <Link to={`/categoria/${remeras}`} className="categorias" >Remeras</Link>
            <Link to={`/categoria/${faldas}`} className="categorias" > Faldas </Link>
            <Link to={`/categoria/${pantalones}`} className="categorias" > Pantalones</Link>
            <Link to={`/categoria/${abrigos}`} className="categorias" > Abrigos </Link>

          </ReactBoostrap.Nav>
          <ReactBoostrap.Nav>
              <ReactBoostrap.Nav.Link href="#deets">
                {itemsCart.length > 0 ? <CartWidget/> : ''}
              </ReactBoostrap.Nav.Link>
          </ReactBoostrap.Nav>
      </ReactBoostrap.Navbar.Collapse>
    </ReactBoostrap.Navbar>
    )
}
