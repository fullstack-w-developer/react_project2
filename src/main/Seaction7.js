import React from 'react'
import {Row,Col,Image,Button} from "react-bootstrap"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import mobile_img from "../img/mpbile.png"
import {AiFillApple} from "react-icons/ai"
import {FaGooglePlay} from "react-icons/fa"

function Seaction() {
    return (
        <React.Fragment>
           <section className=" mt-5" >
           <div className="container-fluid ">
                <Row className="text-center sec7_bg  align-items-center">
                    <Col lg={6} md={12} sm={12} col={12} className=" order-last order-lg-first">
                        <Image fluid src={mobile_img} className="img-fluid img-mobile" />
                    </Col>
                    <Col lg={6} md={12} sm={12} col={12} className=" ">
                       <div>
                       <div className="pt-md-5">
                            <h2 className="text-warning">دانلود برنامه</h2>
                            <h5 className="text-white pt-lg-5 pt-3" >مردم عذا ی خود را به صورت انلاین سفارش میدهند .</h5>
                            <h5 className="text-white"> اپلکیشن مارا نصب کنید و پختن غذا را به ما بسپارید .</h5>
                        </div>
                        <div className=" d-flex justify-content-center pt-lg-5 pt-5">
                            <div className="px-2">
                            <Button variant="light" size="lg" ><a href="#" className="text-dark"><AiFillApple className="text-dark"/> App Store</a></Button>

                            </div>
                            <div className="px-2">
                            <Button variant="light" size="lg" ><a href="#" className="text-dark"><FaGooglePlay className="text-primary"/> Google Play</a></Button> 

                            </div>
                        </div>
                       </div>
                    </Col>
                </Row>
                </div>
           </section>
        </React.Fragment>
    )
}

export default Seaction
