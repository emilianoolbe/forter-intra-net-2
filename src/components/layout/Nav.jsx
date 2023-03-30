import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

export const NavBarN = () => {
  return (
    <>
      <Navbar expand="lg" className="nav"  bg="dark"  variant="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
         
           
              <NavLink to="/" className='ancor'>Inicio</NavLink>
          
            <NavDropdown title="Personal" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://beta.es.reactjs.org/" target='_blank'>Action</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Solicitudes" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Marcas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
            
              
              <NavLink to="/calendario" className='ancor' >Calendario</NavLink>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
