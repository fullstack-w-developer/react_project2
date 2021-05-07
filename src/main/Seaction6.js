import React from 'react'
import {Row,Col,Card,Button} from "react-bootstrap"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import per1 from "../img/per1.jpg"
import per2 from "../img/per2.jpg"
import per3 from "../img/per3.jpg"

function Seaction4() {
    return (
        <React.Fragment>
        <section className="mx-md-3 mx-0 " style={{marginTop:"130px"}}>
        <div className="container-fluid">
             <Row>
                 <Col lg={12} md={12} sm={12} col={12} className="d-flex justify-content-center">
                     <div>
                         
                         <h3 className="font-weight-bold bg-danger text-white p-3 rounded">مشتریان ما را دوست دارند !!!</h3>
                     </div>
                 </Col>
             </Row>
             <Row className="d-flex justify-content-around  mt-5">
                 <Col lg={3} md={12} sm={12} col={12} className="">
                   <a href="#">
                   <Card className=" text-center border-0  align-items-center   ">
                        <Card.Img variant="top" src={per1}  className=" w-25 rounded-circle"/>
                     <Card.Body className="pt-4">
                         <Card.Text className="text-dark">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</Card.Text>
                     </Card.Body>
                    </Card>
                   </a>
                 </Col>
                 <Col lg={3} md={12} sm={12} col={12} className="pt-5 pt-lg-0">
                   <a href="#">
                   <Card className=" text-center border-0   align-items-center">
                   <Card.Img variant="top" src={per2} className=" w-25 rounded-circle"/>

                     <Card.Body className="pt-4">
                         <Card.Text className="text-dark">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</Card.Text>
                     </Card.Body>
                    </Card>
                   </a>
                 </Col>
                 <Col lg={3} md={12} sm={12} col={12} className="pt-5 pt-lg-0">
                   <a href="#">
                   <Card className=" text-center border-0  align-items-center ">
                   <Card.Img variant="top" src={per3} className=" w-25 rounded-circle"/>

                     <Card.Body className="pt-5">
                         <Card.Text className="text-dark">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</Card.Text>
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
