import React from "react";
import { Nav, Button, Row, Col, Alert, Image } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import img1 from "../img/aboutUs.png";
import { BsCheckCircle } from "react-icons/bs";
import "./about.css";

function AboutUs() {
  return (
    <React.Fragment>
      <header className="mt-4 mx-sm-3">
        <div className="container-fluid">
          <Row>
            <Col lg={10} md={12} className="p-0 order-last order-lg-first">
              <Nav className=" justify-content-center justify-content-lg-start pt-5 pt-lg-0">
                <Button size="md" className="btn-download d-none d-md-block">
                  همین الان دانلود کنید
                </Button>

                <Nav.Item className="navItem active">
                  <Nav.Link href="#" className="navLink">
                    مجوز و استفاده
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="navItem">
                  <Nav.Link href="#" className="navLink">
                    من کی هستم ؟
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="navItem">
                  <Nav.Link href="#" className="navLink ">
                    تویتیر
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="navItem">
                  <Nav.Link href="#" className="navLink">
                    من را استخدام کن !
                  </Nav.Link>
                </Nav.Item>
              </Nav>

              <div className="pt-5 d-flex justify-content-center">
                <Button size="md" className="btn-download d-lg-none d-md-none">
                  همین الان دانلود کنید
                </Button>
              </div>
            </Col>
            <Col lg={2} md={12} className="p-0">
              <div className="text-center">
                <span className="logo font-weight-bold ">MAHDI</span>
              </div>
            </Col>
          </Row>
        </div>
      </header>
      <main>
        <div className="container-fluid mt-3 mt-lg-0">
          <Row>
            <Col lg={12}>
              <Alert
                variant="danger"
                className="d-flex justify-content-lg-start justify-content-center pr-3 py-2 p-0 m-0"
              >
                <p className="alert-custom p-0 m-0">
                  اخرین اپدیت در 12 اردیبهشت سال 1400، اضافه شده برای ری اکت
                  ورژن17 و سی اس اس ورژن 2 !
                </p>
              </Alert>
            </Col>
          </Row>
        </div>
        <section className="mt-5 mx-md-3">
          <div className="container-fluid">
            <Row className="align-items-center d-flex justify-content-center">
              <Col
                lg={7}
                md={12}
                sm={12}
                col={12}
                className="justify-content-center text-center align-item-center order-last order-lg-first pt-5 pt-lg-0"
              >
                <figure className="d-flex justify-content-center ">
                  <Image fluid src={img1} className="img-fluid " />
                </figure>
              </Col>
              <Col
                lg={5}
                md={8}
                sm={8}
                col={8}
                className="justify-content-center"
              >
                <div>
                  <h1 className="font-weight-bold sec1-h1">
                    قالب های آماده ی ری اکت برای همه چیز که نیاز دارید
                  </h1>
                  <p className="text-secondary py-5">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                    آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                    افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                    طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
                    صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                    راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل
                    حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
                    موجود طراحی اساسا مورد استفاده قرار گیرد.
                  </p>
                </div>
                <div className="d-md-flex justify-content-md-around text-center">
                  <p className="font-weight-bold">
                    <BsCheckCircle className="icon-check" />
                    با ریسپانسیو فوق العاده
                  </p>
                  <p className="font-weight-bold">
                    <BsCheckCircle className="icon-check" />8 پیج داخلی
                  </p>
                </div>
                <div className="d-md-flex justify-content-md-around text-center">
                  <p className="font-weight-bold">
                    <BsCheckCircle className="icon-check" />
                    52 کامپوننت
                  </p>
                  <p className="font-weight-bold">
                    <BsCheckCircle className="icon-check" />
                    فول ریسپانسیو
                  </p>
                </div>
                <div className="d-md-flex justify-content-md-around text-center">
                  <p className="font-weight-bold">
                    <BsCheckCircle className="icon-check" />
                    با استفاده از sass , css
                  </p>
                  <p className="font-weight-bold">
                    <BsCheckCircle className="icon-check" />
                    فول شخصی
                  </p>
                </div>
                <div className="d-md-flex justify-content-md-around  pt-5 pt-md-0 text-center">
                 <div>
                 <Button className="btn btn-sec1 rounded ">
                    دیدن قالب های بیشتر
                  </Button>
                 </div>
                 <div className="pt-3 pt-md-0">
                 <Button variant="light" className="d-block m-auto">
                    دیدن کامپوننت ها
                  </Button>
                 </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export default AboutUs;
