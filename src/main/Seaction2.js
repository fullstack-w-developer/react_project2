import React from 'react'
import {Image, Row,Col,Button} from "react-bootstrap"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import section2 from "../img/section2.jpeg"

function Seaction2() {
    return (
        <React.Fragment>
        <section className="mx-md-3 mx-0 ">
        <div className="container-fluid">
        <Row style={{marginTop:"100px"}}>
                   
                    <Col lg={6} md={12} className="order-last order-lg-first pt-5 pt-lg-0 ">
                        <div >
                            <div className="text-center">
                            <p className="text-info">فعالیت از سال ۱۳۹۶</p>
                            </div>
                        <div  className="text-center">
                            <h5 className="text-dark font-weight-bold">ما <span className="bg-dark p-3 text-white rounded-circle">پنج سال</span> است بهترین سرویس را ارائه میدهیم</h5>
                        </div>    
                        <div className="bg-danger text-center py-5 mt-5">
                            <p className="text-white">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                            </div> 
                            <div className="py-3">
                                <p className="text-secondary">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                            </div>
                            <div >
                            <Button variant="primary">همین الان سفارش بدهید</Button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={12}  className="order-first order-lg-last text-center">
                        <Image src={section2} fluid rounded/>
                    </Col>
                </Row>
             </div> 
        </section>  
        </React.Fragment>
    )
}

export default Seaction2
