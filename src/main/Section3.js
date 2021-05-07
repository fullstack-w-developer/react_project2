import React from 'react'
import { Card, Row, Col, Nav, Tab } from "react-bootstrap"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import img1 from "../img/img1.jpg"
import img2 from "../img/img2.jpg"
import img4 from "../img/img4.jpg"
import img3 from "../img/img3.jpg"
import img5 from "../img/img5.jpg"
import img6 from "../img/img6.jpg"
import img7 from "../img/img7.jpg"
import img8 from "../img/img8.jpg"





function Section3() {
    return (
        <React.Fragment>
            <section className="mx-md-3 mx-0" style={{ marginTop: "100px" }}>
                <div className="container-fluid">
                    <Tab.Container defaultActiveKey="first">
                        <Row className="text-center">
                            <Col lg={6} md={12} sm={12} col={12} className="text-center mt-5 mt-lg-0 d-flex justify-content-center">
                                <Nav variant="pills" className="bg-light">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">مبتدی ها</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">غذای اصلی</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="three">سوپ ها</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="four">دسر ها</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col lg={6} md={12} sm={12} col={12} className="order-first order-lg-last">
                                <div>
                                    <h5 className="font-weight-bold"> لطفا از<span className="text-white font-weight-bolder bg-danger p-1 rounded-circle"> منوی </span>  ما دیدن کنید !!!</h5>
                                </div>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col lg={12}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            <Col lg={3} md={6} sm={12} col={12}>
                                                <Card className="card-order border-0 shadow">
                                                    <Card.Img variant="top" className="img-order" style={{ height: "200px" }} src={img3} />
                                                    <button  className="w-50 bg-danger rounded order-button-img"><a href="#" className="text-white">خرید</a></button>
                                                    <Card.Body className="border-0">
                                                        <Card.Title className="" style={{ fontSize: "16px" }}>پیتزای دو نفره ی مخصوص</Card.Title>
                                                        <Card.Text className="text-secondary">خوشمزه و لذیذ</Card.Text>
                                                        <Card.Text className="text-danger">۲۵,۰۰۰ هزار تومان</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3} md={6} sm={12} col={12} className="pt-4 pt-md-0">
                                                <Card className="card-order border-0 shadow">
                                                    <Card.Img variant="top" className="img-order" style={{ height: "200px" }} src={img1} />
                                                    <button  className="w-50 bg-danger rounded order-button-img"><a href="#" className="text-white">خرید</a></button>
                                                    <Card.Body className="border-0">
                                                        <Card.Title className="" style={{ fontSize: "16px" }}>پیتزای دو نفره ی مخصوص</Card.Title>
                                                        <Card.Text className="text-secondary">خوشمزه و لذیذ</Card.Text>
                                                        <Card.Text className="text-danger">۲۵,۰۰۰ هزار تومان</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3} md={6} sm={12} col={12} className="pt-4 pt-lg-0">
                                                <Card className="card-order border-0 shadow">
                                                    <Card.Img variant="top" className="img-order" style={{ height: "200px" }} src={img2} />
                                                    <button  className="w-50 bg-danger rounded order-button-img"><a href="#" className="text-white">خرید</a></button>
                                                    <Card.Body className="border-0">
                                                        <Card.Title className="" style={{ fontSize: "16px" }}>پیتزای دو نفره ی مخصوص</Card.Title>
                                                        <Card.Text className="text-secondary">خوشمزه و لذیذ</Card.Text>
                                                        <Card.Text className="text-danger">۲۵,۰۰۰ هزار تومان</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3} md={6} sm={12} col={12} className="pt-4 pt-lg-0">
                                                <Card className="card-order border-0 shadow">
                                                    <Card.Img variant="top" className="img-order" style={{ height: "200px" }} src={img4} />
                                                    <button  className="w-50 bg-danger rounded order-button-img"><a href="#" className="text-white">خرید</a></button>
                                                    <Card.Body className="border-0">
                                                        <Card.Title className="" style={{ fontSize: "16px" }}>پیتزای دو نفره ی مخصوص</Card.Title>
                                                        <Card.Text className="text-secondary">خوشمزه و لذیذ</Card.Text>
                                                        <Card.Text className="text-danger">۲۵,۰۰۰ هزار تومان</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                        <Row className="mt-5">
                                            <Col lg={3} md={6} sm={12} col={12}>
                                                <Card className="card-order border-0 shadow">
                                                    <Card.Img variant="top" className="img-order" style={{ height: "200px" }} src={img5} />
                                                    <button  className="w-50 bg-danger rounded order-button-img"><a href="#" className="text-white">خرید</a></button>
                                                    <Card.Body className="border-0">
                                                        <Card.Title className="" style={{ fontSize: "16px" }}>پیتزای دو نفره ی مخصوص</Card.Title>
                                                        <Card.Text className="text-secondary">خوشمزه و لذیذ</Card.Text>
                                                        <Card.Text className="text-danger">۲۵,۰۰۰ هزار تومان</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3} md={6} sm={12} col={12} className="pt-4 pt-md-0">
                                                <Card className="card-order border-0 shadow">
                                                    <Card.Img variant="top" className="img-order" style={{ height: "200px" }} src={img6} />
                                                    <button  className="w-50 bg-danger rounded order-button-img"><a href="#" className="text-white">خرید</a></button>
                                                    <Card.Body className="border-0">
                                                        <Card.Title className="" style={{ fontSize: "16px" }}>پیتزای دو نفره ی مخصوص</Card.Title>
                                                        <Card.Text className="text-secondary">خوشمزه و لذیذ</Card.Text>
                                                        <Card.Text className="text-danger">۲۵,۰۰۰ هزار تومان</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3} md={6} sm={12} col={12} className="pt-4 pt-lg-0">
                                                <Card className="card-order border-0 shadow">
                                                    <Card.Img variant="top" className="img-order" style={{ height: "200px" }} src={img7} />
                                                    <button  className="w-50 bg-danger rounded order-button-img"><a href="#" className="text-white">خرید</a></button>
                                                    <Card.Body className="border-0">
                                                        <Card.Title className="" style={{ fontSize: "16px" }}>پیتزای دو نفره ی مخصوص</Card.Title>
                                                        <Card.Text className="text-secondary">خوشمزه و لذیذ</Card.Text>
                                                        <Card.Text className="text-danger">۲۵,۰۰۰ هزار تومان</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3} md={6} sm={12} col={12} className="pt-4 pt-lg-0">
                                                <Card className="card-order border-0 shadow">
                                                    <Card.Img variant="top" className="img-order" style={{ height: "200px" }} src={img8} />
                                                    <button  className="w-50 bg-danger rounded order-button-img"><a href="#" className="text-white">خرید</a></button>
                                                    <Card.Body className="border-0">
                                                        <Card.Title className="" style={{ fontSize: "16px" }}>پیتزای دو نفره ی مخصوص</Card.Title>
                                                        <Card.Text className="text-secondary">خوشمزه و لذیذ</Card.Text>
                                                        <Card.Text className="text-danger">۲۵,۰۰۰ هزار تومان</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                        
                                        
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                    <Row>
                                            <Col lg={3} md={6} sm={12} col={12}>
                                                <Card className="card-order border-0 shadow">
                                                    <Card.Img variant="top" className="img-order" style={{ height: "200px" }} src={img3} />
                                                    <button  className="w-50 bg-danger rounded order-button-img"><a href="#" className="text-white">خرید</a></button>
                                                    <Card.Body className="border-0">
                                                        <Card.Title className="" style={{ fontSize: "16px" }}>پیتزای دو نفره ی مخصوص</Card.Title>
                                                        <Card.Text className="text-secondary">خوشمزه و لذیذ</Card.Text>
                                                        <Card.Text className="text-danger">۲۵,۰۰۰ هزار تومان</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3} md={6} sm={12} col={12} className="pt-4 pt-md-0">
                                                <Card className="card-order border-0 shadow">
                                                    <Card.Img variant="top" className="img-order" style={{ height: "200px" }} src={img1} />
                                                    <button  className="w-50 bg-danger rounded order-button-img"><a href="#" className="text-white">خرید</a></button>
                                                    <Card.Body className="border-0">
                                                        <Card.Title className="" style={{ fontSize: "16px" }}>پیتزای دو نفره ی مخصوص</Card.Title>
                                                        <Card.Text className="text-secondary">خوشمزه و لذیذ</Card.Text>
                                                        <Card.Text className="text-danger">۲۵,۰۰۰ هزار تومان</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3} md={6} sm={12} col={12} className="pt-4 pt-lg-0">
                                                <Card className="card-order border-0 shadow">
                                                    <Card.Img variant="top" className="img-order" style={{ height: "200px" }} src={img2} />
                                                    <button  className="w-50 bg-danger rounded order-button-img"><a href="#" className="text-white">خرید</a></button>
                                                    <Card.Body className="border-0">
                                                        <Card.Title className="" style={{ fontSize: "16px" }}>پیتزای دو نفره ی مخصوص</Card.Title>
                                                        <Card.Text className="text-secondary">خوشمزه و لذیذ</Card.Text>
                                                        <Card.Text className="text-danger">۲۵,۰۰۰ هزار تومان</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3} md={6} sm={12} col={12} className="pt-4 pt-lg-0">
                                                <Card className="card-order border-0 shadow">
                                                    <Card.Img variant="top" className="img-order" style={{ height: "200px" }} src={img4} />
                                                    <button  className="w-50 bg-danger rounded order-button-img"><a href="#" className="text-white">خرید</a></button>
                                                    <Card.Body className="border-0">
                                                        <Card.Title className="" style={{ fontSize: "16px" }}>پیتزای دو نفره ی مخصوص</Card.Title>
                                                        <Card.Text className="text-secondary">خوشمزه و لذیذ</Card.Text>
                                                        <Card.Text className="text-danger">۲۵,۰۰۰ هزار تومان</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                        <Row className="mt-5">
                                            <Col lg={3} md={6} sm={12} col={12}>
                                                <Card className="card-order border-0 shadow">
                                                    <Card.Img variant="top" className="img-order" style={{ height: "200px" }} src={img5} />
                                                    <button  className="w-50 bg-danger rounded order-button-img"><a href="#" className="text-white">خرید</a></button>
                                                    <Card.Body className="border-0">
                                                        <Card.Title className="" style={{ fontSize: "16px" }}>پیتزای دو نفره ی مخصوص</Card.Title>
                                                        <Card.Text className="text-secondary">خوشمزه و لذیذ</Card.Text>
                                                        <Card.Text className="text-danger">۲۵,۰۰۰ هزار تومان</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3} md={6} sm={12} col={12} className="pt-4 pt-md-0">
                                                <Card className="card-order border-0 shadow">
                                                    <Card.Img variant="top" className="img-order" style={{ height: "200px" }} src={img6} />
                                                    <button  className="w-50 bg-danger rounded order-button-img"><a href="#" className="text-white">خرید</a></button>
                                                    <Card.Body className="border-0">
                                                        <Card.Title className="" style={{ fontSize: "16px" }}>پیتزای دو نفره ی مخصوص</Card.Title>
                                                        <Card.Text className="text-secondary">خوشمزه و لذیذ</Card.Text>
                                                        <Card.Text className="text-danger">۲۵,۰۰۰ هزار تومان</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3} md={6} sm={12} col={12} className="pt-4 pt-lg-0">
                                                <Card className="card-order border-0 shadow">
                                                    <Card.Img variant="top" className="img-order" style={{ height: "200px" }} src={img7} />
                                                    <button  className="w-50 bg-danger rounded order-button-img"><a href="#" className="text-white">خرید</a></button>
                                                    <Card.Body className="border-0">
                                                        <Card.Title className="" style={{ fontSize: "16px" }}>پیتزای دو نفره ی مخصوص</Card.Title>
                                                        <Card.Text className="text-secondary">خوشمزه و لذیذ</Card.Text>
                                                        <Card.Text className="text-danger">۲۵,۰۰۰ هزار تومان</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3} md={6} sm={12} col={12} className="pt-4 pt-lg-0">
                                                <Card className="card-order border-0 shadow">
                                                    <Card.Img variant="top" className="img-order" style={{ height: "200px" }} src={img8} />
                                                    <button  className="w-50 bg-danger rounded order-button-img"><a href="#" className="text-white">خرید</a></button>
                                                    <Card.Body className="border-0">
                                                        <Card.Title className="" style={{ fontSize: "16px" }}>پیتزای دو نفره ی مخصوص</Card.Title>
                                                        <Card.Text className="text-secondary">خوشمزه و لذیذ</Card.Text>
                                                        <Card.Text className="text-danger">۲۵,۰۰۰ هزار تومان</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                        
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="three">
                                       <Row>
                                            <Col lg={3} md={6} sm={12} col={12}>
                                                <Card className="card-order border-0 shadow">
                                                    <Card.Img variant="top" className="img-order" style={{ height: "200px" }} src={img3} />
                                                    <button  className="w-50 bg-danger rounded order-button-img"><a href="#" className="text-white">خرید</a></button>
                                                    <Card.Body className="border-0">
                                                        <Card.Title className="" style={{ fontSize: "16px" }}>پیتزای دو نفره ی مخصوص</Card.Title>
                                                        <Card.Text className="text-secondary">خوشمزه و لذیذ</Card.Text>
                                                        <Card.Text className="text-danger">۲۵,۰۰۰ هزار تومان</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3} md={6} sm={12} col={12} className="pt-4 pt-md-0">
                                                <Card className="card-order border-0 shadow">
                                                    <Card.Img variant="top" className="img-order" style={{ height: "200px" }} src={img1} />
                                                    <button  className="w-50 bg-danger rounded order-button-img"><a href="#" className="text-white">خرید</a></button>
                                                    <Card.Body className="border-0">
                                                        <Card.Title className="" style={{ fontSize: "16px" }}>پیتزای دو نفره ی مخصوص</Card.Title>
                                                        <Card.Text className="text-secondary">خوشمزه و لذیذ</Card.Text>
                                                        <Card.Text className="text-danger">۲۵,۰۰۰ هزار تومان</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3} md={6} sm={12} col={12} className="pt-4 pt-lg-0">
                                                <Card className="card-order border-0 shadow">
                                                    <Card.Img variant="top" className="img-order" style={{ height: "200px" }} src={img2} />
                                                    <button  className="w-50 bg-danger rounded order-button-img"><a href="#" className="text-white">خرید</a></button>
                                                    <Card.Body className="border-0">
                                                        <Card.Title className="" style={{ fontSize: "16px" }}>پیتزای دو نفره ی مخصوص</Card.Title>
                                                        <Card.Text className="text-secondary">خوشمزه و لذیذ</Card.Text>
                                                        <Card.Text className="text-danger">۲۵,۰۰۰ هزار تومان</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3} md={6} sm={12} col={12} className="pt-4 pt-lg-0">
                                                <Card className="card-order border-0 shadow">
                                                    <Card.Img variant="top" className="img-order" style={{ height: "200px" }} src={img4} />
                                                    <button  className="w-50 bg-danger rounded order-button-img"><a href="#" className="text-white">خرید</a></button>
                                                    <Card.Body className="border-0">
                                                        <Card.Title className="" style={{ fontSize: "16px" }}>پیتزای دو نفره ی مخصوص</Card.Title>
                                                        <Card.Text className="text-secondary">خوشمزه و لذیذ</Card.Text>
                                                        <Card.Text className="text-danger">۲۵,۰۰۰ هزار تومان</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                        <Row className="mt-5">
                                            <Col lg={3} md={6} sm={12} col={12}>
                                                <Card className="card-order border-0 shadow">
                                                    <Card.Img variant="top" className="img-order" style={{ height: "200px" }} src={img5} />
                                                    <button  className="w-50 bg-danger rounded order-button-img"><a href="#" className="text-white">خرید</a></button>
                                                    <Card.Body className="border-0">
                                                        <Card.Title className="" style={{ fontSize: "16px" }}>پیتزای دو نفره ی مخصوص</Card.Title>
                                                        <Card.Text className="text-secondary">خوشمزه و لذیذ</Card.Text>
                                                        <Card.Text className="text-danger">۲۵,۰۰۰ هزار تومان</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3} md={6} sm={12} col={12} className="pt-4 pt-md-0">
                                                <Card className="card-order border-0 shadow">
                                                    <Card.Img variant="top" className="img-order" style={{ height: "200px" }} src={img6} />
                                                    <button  className="w-50 bg-danger rounded order-button-img"><a href="#" className="text-white">خرید</a></button>
                                                    <Card.Body className="border-0">
                                                        <Card.Title className="" style={{ fontSize: "16px" }}>پیتزای دو نفره ی مخصوص</Card.Title>
                                                        <Card.Text className="text-secondary">خوشمزه و لذیذ</Card.Text>
                                                        <Card.Text className="text-danger">۲۵,۰۰۰ هزار تومان</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3} md={6} sm={12} col={12} className="pt-4 pt-lg-0">
                                                <Card className="card-order border-0 shadow">
                                                    <Card.Img variant="top" className="img-order" style={{ height: "200px" }} src={img7} />
                                                    <button  className="w-50 bg-danger rounded order-button-img"><a href="#" className="text-white">خرید</a></button>
                                                    <Card.Body className="border-0">
                                                        <Card.Title className="" style={{ fontSize: "16px" }}>پیتزای دو نفره ی مخصوص</Card.Title>
                                                        <Card.Text className="text-secondary">خوشمزه و لذیذ</Card.Text>
                                                        <Card.Text className="text-danger">۲۵,۰۰۰ هزار تومان</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3} md={6} sm={12} col={12} className="pt-4 pt-lg-0">
                                                <Card className="card-order border-0 shadow">
                                                    <Card.Img variant="top" className="img-order" style={{ height: "200px" }} src={img8} />
                                                    <button  className="w-50 bg-danger rounded order-button-img"><a href="#" className="text-white">خرید</a></button>
                                                    <Card.Body className="border-0">
                                                        <Card.Title className="" style={{ fontSize: "16px" }}>پیتزای دو نفره ی مخصوص</Card.Title>
                                                        <Card.Text className="text-secondary">خوشمزه و لذیذ</Card.Text>
                                                        <Card.Text className="text-danger">۲۵,۰۰۰ هزار تومان</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="four">
                                       <Row>
                                            <Col lg={3} md={6} sm={12} col={12}>
                                                <Card className="card-order border-0 shadow">
                                                    <Card.Img variant="top" className="img-order" style={{ height: "200px" }} src={img3} />
                                                    <button  className="w-50 bg-danger rounded order-button-img"><a href="#" className="text-white">خرید</a></button>
                                                    <Card.Body className="border-0">
                                                        <Card.Title className="" style={{ fontSize: "16px" }}>پیتزای دو نفره ی مخصوص</Card.Title>
                                                        <Card.Text className="text-secondary">خوشمزه و لذیذ</Card.Text>
                                                        <Card.Text className="text-danger">۲۵,۰۰۰ هزار تومان</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3} md={6} sm={12} col={12} className="pt-4 pt-md-0">
                                                <Card className="card-order border-0 shadow">
                                                    <Card.Img variant="top" className="img-order" style={{ height: "200px" }} src={img1} />
                                                    <button  className="w-50 bg-danger rounded order-button-img"><a href="#" className="text-white">خرید</a></button>
                                                    <Card.Body className="border-0">
                                                        <Card.Title className="" style={{ fontSize: "16px" }}>پیتزای دو نفره ی مخصوص</Card.Title>
                                                        <Card.Text className="text-secondary">خوشمزه و لذیذ</Card.Text>
                                                        <Card.Text className="text-danger">۲۵,۰۰۰ هزار تومان</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3} md={6} sm={12} col={12} className="pt-4 pt-lg-0">
                                                <Card className="card-order border-0 shadow">
                                                    <Card.Img variant="top" className="img-order" style={{ height: "200px" }} src={img2} />
                                                    <button  className="w-50 bg-danger rounded order-button-img"><a href="#" className="text-white">خرید</a></button>
                                                    <Card.Body className="border-0">
                                                        <Card.Title className="" style={{ fontSize: "16px" }}>پیتزای دو نفره ی مخصوص</Card.Title>
                                                        <Card.Text className="text-secondary">خوشمزه و لذیذ</Card.Text>
                                                        <Card.Text className="text-danger">۲۵,۰۰۰ هزار تومان</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3} md={6} sm={12} col={12} className="pt-4 pt-lg-0">
                                                <Card className="card-order border-0 shadow">
                                                    <Card.Img variant="top" className="img-order" style={{ height: "200px" }} src={img4} />
                                                    <button  className="w-50 bg-danger rounded order-button-img"><a href="#" className="text-white">خرید</a></button>
                                                    <Card.Body className="border-0">
                                                        <Card.Title className="" style={{ fontSize: "16px" }}>پیتزای دو نفره ی مخصوص</Card.Title>
                                                        <Card.Text className="text-secondary">خوشمزه و لذیذ</Card.Text>
                                                        <Card.Text className="text-danger">۲۵,۰۰۰ هزار تومان</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                        <Row className="mt-5">
                                            <Col lg={3} md={6} sm={12} col={12}>
                                                <Card className="card-order border-0 shadow">
                                                    <Card.Img variant="top" className="img-order" style={{ height: "200px" }} src={img5} />
                                                    <button  className="w-50 bg-danger rounded order-button-img"><a href="#" className="text-white">خرید</a></button>
                                                    <Card.Body className="border-0">
                                                        <Card.Title className="" style={{ fontSize: "16px" }}>پیتزای دو نفره ی مخصوص</Card.Title>
                                                        <Card.Text className="text-secondary">خوشمزه و لذیذ</Card.Text>
                                                        <Card.Text className="text-danger">۲۵,۰۰۰ هزار تومان</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3} md={6} sm={12} col={12} className="pt-4 pt-md-0">
                                                <Card className="card-order border-0 shadow">
                                                    <Card.Img variant="top" className="img-order" style={{ height: "200px" }} src={img6} />
                                                    <button  className="w-50 bg-danger rounded order-button-img"><a href="#" className="text-white">خرید</a></button>
                                                    <Card.Body className="border-0">
                                                        <Card.Title className="" style={{ fontSize: "16px" }}>پیتزای دو نفره ی مخصوص</Card.Title>
                                                        <Card.Text className="text-secondary">خوشمزه و لذیذ</Card.Text>
                                                        <Card.Text className="text-danger">۲۵,۰۰۰ هزار تومان</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3} md={6} sm={12} col={12} className="pt-4 pt-lg-0">
                                                <Card className="card-order border-0 shadow">
                                                    <Card.Img variant="top" className="img-order" style={{ height: "200px" }} src={img7} />
                                                    <button  className="w-50 bg-danger rounded order-button-img"><a href="#" className="text-white">خرید</a></button>
                                                    <Card.Body className="border-0">
                                                        <Card.Title className="" style={{ fontSize: "16px" }}>پیتزای دو نفره ی مخصوص</Card.Title>
                                                        <Card.Text className="text-secondary">خوشمزه و لذیذ</Card.Text>
                                                        <Card.Text className="text-danger">۲۵,۰۰۰ هزار تومان</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3} md={6} sm={12} col={12} className="pt-4 pt-lg-0">
                                                <Card className="card-order border-0 shadow">
                                                    <Card.Img variant="top" className="img-order" style={{ height: "200px" }} src={img8} />
                                                    <button  className="w-50 bg-danger rounded order-button-img"><a href="#" className="text-white">خرید</a></button>
                                                    <Card.Body className="border-0">
                                                        <Card.Title className="" style={{ fontSize: "16px" }}>پیتزای دو نفره ی مخصوص</Card.Title>
                                                        <Card.Text className="text-secondary">خوشمزه و لذیذ</Card.Text>
                                                        <Card.Text className="text-danger">۲۵,۰۰۰ هزار تومان</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Section3
