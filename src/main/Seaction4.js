import React from 'react'
import {Row,Col,Card,Button} from "react-bootstrap"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { FcShop } from "react-icons/fc"
import { GiCook } from "react-icons/gi"
import { FcIcons8Cup } from "react-icons/fc"

function Seaction4() {
    return (
        <React.Fragment>
        <section className="mx-md-3 mx-0 " style={{marginTop:"130px"}}>
        <div className="container-fluid">
             <Row>
                 <Col lg={12} md={12} sm={12} col={12} className="d-flex justify-content-center">
                     <div>
                         
                         <h4 className="font-weight-bold text-primary">سروی های اینترنتی در  <span className="bg-danger pt-md-2 px-3 rounded-circle text-white">گوگل !!!</span></h4>
                     </div>
                 </Col>
             </Row>
             <Row className="d-flex justify-content-center mt-5">
                 <Col lg={3} md={12} sm={12} col={12} className=" d-flex justify-content-center">
                   <a href="#">
                   <Card className="shadow border-0 card-seaction4-custom ">
                     <div className="d-flex justify-content-center">
                     <FcShop className="display-2"/>
                     </div>
                     <Card.Body className="pt-4">
                         <Card.Title className='text-center font-font-weight-light text-info'>230 فروشگاه در سراسر کشور</Card.Title>
                         <Card.Text className="text-dark">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</Card.Text>
                         <Button variant="danger">بیشتر بدانید</Button>
                     </Card.Body>
                    </Card>
                   </a>
                 </Col>
                 <Col lg={3} md={12} sm={12} col={12} className="pt-5 pt-lg-0 d-flex justify-content-center">
                   <a href="#">
                   <Card className="shadow border-0 card-seaction4-custom ">
                     <div className="d-flex justify-content-center">
                     <GiCook className="display-2 text-danger"/>
                     </div>
                     <Card.Body className="pt-4">
                         <Card.Title className='text-center font-font-weight-light text-info'>پرسنل و آشپز های ما</Card.Title>
                         <Card.Text className="text-dark">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</Card.Text>
                         <Button variant="danger">بیشتر بدانید</Button>
                     </Card.Body>
                    </Card>
                   </a>
                 </Col>
                 <Col lg={3} md={12} sm={12} col={12} className="pt-5 pt-lg-0 d-flex justify-content-center">
                   <a href="#">
                   <Card className="shadow border-0 card-seaction4-custom ">
                     <div className="d-flex justify-content-center">
                     <FcIcons8Cup className="display-2"/>
                     </div>
                     <Card.Body className="pt-4">
                         <Card.Title className='text-center font-font-weight-light text-info'>تولد ما</Card.Title>
                         <Card.Text className="text-dark">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</Card.Text>
                         <Button variant="danger">بیشتر بدانید</Button>
                     </Card.Body>
                    </Card>
                   </a>
                 </Col>
             </Row>
             </div>
        </section>
        </React.Fragment>
    )
}

export default Seaction4
