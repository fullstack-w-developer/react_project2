import React from 'react'
import {Button,Image,Row,Col} from "react-bootstrap"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import img_seaction5 from "../img/seaction5.jpg"

function Seaction() {
    return (
        <React.Fragment>
           <section className="mx-md-3 mx-0">
            <div className="container-fluid">
                <Row style={{marginTop:"100px"}}>
                    <Col lg={6} md={6} sm={12}  className="order-first order-lg-last  text-center d-flex justify-content-center">
                        <Image src={img_seaction5} fluid rounded/>
                    </Col>
                    <Col lg={6} md={6} sm={12} className="order-last order-lg-first pt-5 pt-lg-0">
                        <div >
                        <div  className="text-center">
                            <h2 className="text-danger font-weight-bold">چرا ما را انتخاب کنید !!!</h2>
                            
                        </div>    
                       
                            <div className="py-3">
                            <p className="text-secondary ">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی</p>
                            </div>
                            <div className=" d-lg-flex justify-content-around text-center">
                                <div>
                                    <h3 className="font-weight-bold">94000 +</h3>
                                    <p className="text-danger font-weight-bold">سفارش ها</p>
                                </div>
                                <div className="pt-5 pt-md-0">
                                    <h3 className="font-weight-bold">11000 +</h3>
                                    <p className="text-danger font-weight-bold"> شخصی</p>
                                </div>
                                <div className="pt-5 pt-md-0">
                                    <h3 className="font-weight-bold">15000 +</h3>
                                    <p className="text-danger font-weight-bold"> آشپز ها</p>
                                </div>
                                
                            </div>
                            <div className="pt-5 pt-md-3  d-flex justify-content-lg-start justify-content-center">
                            <Button variant="primary"><a href="#" className="text-white">همین الان سفارش بدهید</a></Button>
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
