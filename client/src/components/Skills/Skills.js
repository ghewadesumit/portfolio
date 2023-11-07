import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import colorSharp from "../../assets/img/color-sharp.png"
import { Container, Row, Col } from "react-bootstrap"
import { skills, skillDescription } from "../../common/constants"
import { SkillStarRating } from "./SkillStarRating"
import "./Skills.scss"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 12,
    },
    largeDesktop: {
      breakpoint: { max: 3000, min: 2000 },
      items: 9,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 5,
    },
    miniTablet: {
      breakpoint: { max: 700, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  }

  const skillsContent = skills.map((skill, index) => {
    return (
      <SkillStarRating
        key={`${skill.skillName}-index`}
        skillIcon={skill.icon}
        rating={skill.rating}
        skillName={skill.skillName}
      />
    )
  })
  return (
    <section className="skill" id="skills">
      <Container fluid>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>{skillDescription}</p>
              <Carousel
                autoPlay={true}
                responsive={responsive}
                infinite={true}
                arrows={false}
                className="owl-carousel owl-theme skill-slider"
                sliderClass="react-multi-carousel-track"
              >
                {skillsContent}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt={"background"} />
    </section>
  )
}
