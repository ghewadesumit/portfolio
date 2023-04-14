import { Container, Row, Col } from "react-bootstrap";
import { SocialIcons } from "../SocialIcons/SocialIcons";
import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <h1> Thanks for stopping by.</h1>
          </Col> 
          <Col size={12} sm={6} className="text-center text-sm-end">
            <SocialIcons/>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

