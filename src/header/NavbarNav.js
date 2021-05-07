import React from 'react'
import {Navbar,Nav,Button} from "../../node_modules/react-bootstrap"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Sidebar from "./AsideBar"
import {Link } from "react-router-dom"


function NavbarNav() {
   
    return (
        <React.Fragment>
         <div className="d-none d-lg-block">
         <Navbar >
                <Navbar.Brand className="text-danger font-weight-bold">
                    MAHDI
                </Navbar.Brand>
                <Nav className="px-5">
                    <Nav.Item className="nav-item-nav ">
                        <Link className="nav-link-nav px-3" to="/">خانه</Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item-nav ">
                        <Link className="nav-link-nav px-3" to="/AboutUs">درباره ی ما</Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item-nav ">
                        <Link className="nav-link-nav px-3" to="/Pricing">قیمت گذاری</Link>
                    </Nav.Item>

                    <Nav.Item className="nav-item-nav ">
                        <Link className="nav-link-nav px-3" to="/Blog">بلاگ</Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item-nav ">
                        <Link className="nav-link-nav px-3" to="/ContentUs">تماس با ما</Link>
                    </Nav.Item>
                    
                </Nav>
                <div className="mr-auto px-3" style={{marginRight:"auto"}}>
                  <div className="d-flex">
                  <div className="px-3">
                   <Button variant="primary">ثبت نام</Button> 
                   </div>
                   <div>
                   <Button variant="secondary">ورود</Button>
                   </div>
                  </div>
                </div>
            </Navbar>
         </div>
            <div className="d-lg-none mt-3">
                <div className="d-flex justify-content-between">
                <Navbar.Brand className="text-danger" style={{fontWeight:"bold", fontSize:"25px" }}>
                    MAHDI
                </Navbar.Brand>
                        <Sidebar/>    
                </div>         
            </div>

           
        </React.Fragment>
    )
}

export default NavbarNav



