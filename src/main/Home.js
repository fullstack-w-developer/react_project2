import React from 'react'
import {Button, Row, Col, Image} from "react-bootstrap"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import NavbarNav from "../header/NavbarNav"
import imgHeader from "../img/header.jpeg"
import Seaction2 from './Seaction2'
import Seaction4 from './Seaction4'
import Section3 from './Section3'
import Section5 from './Seaction5'
import Seaction6 from './Seaction6'
import Seaction7 from './Seaction7'
import Footer from './Footer'

function Home() {
    return (
        <React.Fragment>
        <header>
            <NavbarNav/>
        </header>
        <main>
           <section className="mx-md-3 mx-0">
            <div className="container-fluid">
                <Row style={{marginTop:"100px"}}>
                    <Col lg={6} md={12}  className="order-last order-lg-first pt-5 pt-lg-0 text-center">
                        <Image src={imgHeader} fluid rounded/>
                    </Col>
                    <Col lg={6} md={12} className="order-first order-lg-last ">
                        <div >
                        <div  className="text-center">
                            <h1 className="text-danger font-weight-bold">خوشمزه و دوست داشتنی</h1>
                            
                        </div>    
                        <div className="bg-primary text-center py-5 mt-5">
                                <h5 className="text-white font-weight-bold">بهترین لحضه های زندگی</h5>
                            </div> 
                            <div className="py-3">
                                <p className="text-secondary">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                            </div>
                            <div className="d-flex justify-content-around">
                            <Button variant="primary">همین الان سفارش بدهید</Button>
                            <Button variant="danger">در یوتیوب ببیند !</Button>

                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            </section>  
            <Seaction2 />
            
            <Section3/>

            <Seaction4/>

            <Section5/>
            <Seaction6/>
            <Seaction7/>
            </main>
            <Footer/>
  
        </React.Fragment>
    )
}

export default Home
