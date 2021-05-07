import React from 'react'
import {Nav,Button} from "../../node_modules/react-bootstrap"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {Link} from "react-router-dom"


class AsideBar extends React.Component{
    constructor(props){
      super(props);
      this.state={
        sideBar: false
      }
  
    }
  
    handleSidebar = () =>{
      this.setState({
        sideBar : !this.state.sideBar
      });
    }
  
    render(){
      return(
        <div>
          <header className="header">
            <div className="navContainer">
              <div className="mainNav"
                  style={this.state.sideBar ? { transform: "translateX(0)" } : null}>
                
                <Nav>
                    <Nav.Item className=" font-weigh-bold">
                        <Link className="text-white px-4 py-3" to="/">خانه</Link>
                    </Nav.Item>
                    <Nav.Item className=" font-weigh-bold">
                        <Link className="text-white px-4 py-3" to="/AboutUs">درباره ی ما</Link>
                    </Nav.Item>
                    <Nav.Item className=" font-weigh-bold">
                        <Link className="text-white px-4 py-3" to="/pricing">قیمت گذاری</Link>
                    </Nav.Item>

                    <Nav.Item className=" font-weigh-bold">
                        <Link className="text-white px-4 py-3" to="/Blog">بلاگ</Link>
                    </Nav.Item>
                    <Nav.Item className=" font-weigh-bold">
                        <Link className="text-white px-4 py-3" to="/ContentUs">تماس با ما</Link>
                    </Nav.Item>
                </Nav>
                
               <div className="border-top mt-4">
                  <div className="mt-4 d-flex justify-content-around">
                    
                  <Button variant="primary">ثبت نام</Button> 
                   
               
                   <Button variant="secondary">ورود</Button>
                 
                  </div>
               </div>
              </div>
              <button
                onClick = {this.handleSidebar}
                className={`navToggle ${this.state.sideBar ? "open" : null}`}>
                <span />
                <span />
                <span />
              </button>
              <div
                onClick={this.handleSidebar}
                className={`overlay ${this.state.sideBar ? "open" : ""}`}
                />
            </div>
          </header>
        </div>
  
      );
    }
  
  }
 export default AsideBar  