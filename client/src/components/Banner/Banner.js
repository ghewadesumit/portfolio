import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import "animate.css"
import profileImage from "../../assets/img/profile_pic.JPG"
import TrackVisibility from "react-on-screen"
import { aboutme } from "../../common/constants"
import { useJobTitle } from "../../hooks/useJobTitle"
import "./Banner.scss"

export const Banner = ({ contactRef }) => {
  const text = useJobTitle()
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate__animated animate__fadeIn" : ""}
                >
                  {/* <span className="tagline">Welcome to my Portfolio</span> */}
                  <h1>{`Hi! I'm Sumit`} </h1>
                  <div className="profile">
                    <h1>
                      <span
                        className="txt-rotate"
                        data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                      >
                        <span className="wrap">{text}</span>
                      </span>
                    </h1>
                  </div>
                  <div className="aboutme">
                    <p>{aboutme}</p>
                    <button
                      onClick={() =>
                        contactRef.current?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      Let’s Connect <ArrowRightCircle size={25} />
                    </button>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                >
                  <img src={profileImage} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
