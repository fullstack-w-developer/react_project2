import React, {useState} from 'react'
import {Row,Col,Nav,InputGroup,Form} from "react-bootstrap"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

function Footer() {
    const [iEmail,setIEmail] = React.useState("")
    return (
        <React.Fragment>
           <footer className="mx-md-3 mx-0">
               <div className="container-fluid border-bottom">
                  <Row>
                      <Col lg={4} md={12} sm={12} col={12}>
                          <div className="py-5">
                              <h5 className="font-weight-bold">جدید ترین خبر های ما را دنبال کنید .</h5>
                          </div>
                          <div>
                              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                              <InputGroup>
                                <InputGroup.Prepend>
                                <InputGroup.Text className="bg-danger"><span className="text-white">مارا دنبال کنید</span></InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control id="inlineFormInputGroupUsername" value={iEmail} onChange={(e)=> setIEmail(e.target.value)} placeholder="ایمیل" />
                            </InputGroup>
                          </div>
                      </Col>
                      <Col lg={8} md={12} sm={12} col={12} >
                          <Row className="p-0 d-flex justify-content-center">
                              <div  className="col-lg-3 col-md-6 col-sm-3 col-3 pt-5 text-center p-0">
                                  <h5 className="font-weight-bold ">اصلی</h5>
                              <Nav  className="flex-column pt-4">
                                    <Nav.Link className="text-secondary nav-link-footer " href="#">بلاگ</Nav.Link>
                                    <Nav.Link className="text-secondary nav-link-footer " href="#">FAQs</Nav.Link>
                                    <Nav.Link className="text-secondary nav-link-footer " href="#">ساپورت</Nav.Link>
                                    <Nav.Link className="text-secondary nav-link-footer " href="#">درباره ما</Nav.Link>
                                    </Nav>
                              </div>
                              <div  className="col-lg-3 col-md-6 col-sm-3 col-3 pt-5 text-center p-0">
                                  <h5 className="font-weight-bold ">تولید</h5>
                              <Nav  className="flex-column pt-4">
                                    <Nav.Link className="text-secondary nav-link-footer" href="#">ورود</Nav.Link>
                                    <Nav.Link className="text-secondary nav-link-footer" href="#">شخصی</Nav.Link>
                                    <Nav.Link className="text-secondary nav-link-footer" href="#">کار</Nav.Link>
                                    <Nav.Link className="text-secondary nav-link-footer" href="#"> تم</Nav.Link>
                                    </Nav>
                              </div>
                              <div  className="col-lg-3 col-md-6 col-sm-3 col-3 pt-5 text-center p-0">
                                  <h5 className="font-weight-bold ">پرس</h5>
                              <Nav  className="flex-column pt-4">
                                    <Nav.Link className="text-secondary nav-link-footer" href="#">حروج</Nav.Link>
                                    <Nav.Link className="text-secondary nav-link-footer" href="#">ایونت</Nav.Link>
                                    <Nav.Link className="text-secondary nav-link-footer" href="#">استوری</Nav.Link>
                                    <Nav.Link className="text-secondary nav-link-footer" href="#"> تخفیف ها</Nav.Link>
                                    </Nav>
                              </div>
                              <div  className="col-lg-3 col-md-6 col-sm-12 col-12 pt-5 text-center p-0">
                              <h5 className="font-weight-bold">logical</h5>
                              <Nav  className="flex-column pt-4">
                                    <Nav.Link className="text-secondary nav-link-footer" href="#">حروج</Nav.Link>
                                    <Nav.Link className="text-secondary nav-link-footer" href="#">ایونت</Nav.Link>
                                    <Nav.Link className="text-secondary nav-link-footer" href="#">استوری</Nav.Link>
                                    <Nav.Link className="text-secondary nav-link-footer" href="#"> تخفیف ها</Nav.Link>
                                    </Nav>
                              </div>
                          </Row>
                      </Col>
                     </Row> 
               </div>
           </footer> 
        </React.Fragment>
    )
}

export default Footer;
