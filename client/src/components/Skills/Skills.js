
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../../assets/img/color-sharp.png"
import {Container,Row,Col} from 'react-bootstrap';
import {skills,skillDescription} from '../../common/constants';
import { SkillStarRating } from '../SkillStarRating';
import './Skills.scss';

export const Skills = () => {
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    }



    const skillsContent = skills.map((skill,index)=>{
        return ( <SkillStarRating key={`${skill.skillName}-index`} skillIcon={skill.icon} rating={skill.rating} skillName={skill.skillName}/>)
    })
    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>Skills</h2>
                            <p>{skillDescription}</p>
                                <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                    {skillsContent}    
                                </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}
