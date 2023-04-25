import { useState ,useRef} from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';
import './Contact.scss';

export const Contact = ({handleShowModal,contactRef}) => {
  const formInitialDetails = {
    fullName: '',
    email: '',
    phone: '',
    message: ''
  }

  const form = useRef();

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const buttonText= 'Send';
  // const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }


  const sendEmail = (e) => {
    e.preventDefault();
    // console.log(formDetails);
    const sender = formDetails.firstName;
    emailjs.sendForm('service_rtynb9j', 'template_t2i6k8r',form.current , 'fFl_6CBl0du1-BbOJ')
      .then((result) => {
          console.log(result.text);
          handleShowModal(true,true,`Hey ${sender}, I will get in touch with you soon. `);
      }, (error) => {
          handleShowModal(true,false,`Hey ${sender}, There is some issue with this. Please reach me out on LinkedIn. Thanks!`);
          console.log(error.text);
      });

    setFormDetails(formInitialDetails);
  };

  return (
    <section ref={contactRef} className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form ref ={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={12} className="px-1">
                      <input type="text" value={formDetails.firstName} name="firstName" placeholder="Full Name" onChange={(e) => onFormUpdate('fullName', e.target.value)} />
                    </Col>
                    {/* <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lasttName} name="lastName" placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col> */}
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} name="email" placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="number" value={formDetails.phone} name="phone" placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} name="message" placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {/* {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    } */}
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
