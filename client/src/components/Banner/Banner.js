import {useEffect, useState} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import {ArrowRightCircle} from 'react-bootstrap-icons';
import 'animate.css';
import headerImg from "../../assets/img/header-img.svg";
import TrackVisibility from 'react-on-screen';
import {aboutme} from '../../common/constants';
import './Banner.scss';

export const Banner = ({contactRef})=>{
    const period = 350;
    const deletingPeriod = 100;
    const [loopNum,setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [delta,setDelta] = useState(period);
    const [text,setText] = useState('');
    const toRotate = ['Web Developer', "Software Developer", "Full-Stack Developer"];
    const [index, setIndex] = useState(1);


    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick()
        },delta)

        return ()=>{ clearInterval(ticker)};
    },[text]);

    const tick = ()=>{
        
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length + 1);

        setText(updatedText);

        if(isDeleting){
            setDelta(deletingPeriod);
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(period);
          } else {
            setIndex(prevIndex => prevIndex + 1);
          }
    }

    return (
        <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  {/* <span className="tagline">Welcome to my Portfolio</span> */}
                  <h1>{`Hi! I'm Sumit`} </h1>
                  <div className="profile">
                    <h1><span className="txt-rotate" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  </div>
                  <div className="aboutme">
                    <p>{aboutme}</p>
                    <button onClick={()=> contactRef.current?.scrollIntoView({behavior: 'smooth'})}>Let’s Connect <ArrowRightCircle size={25} /></button>
                  </div>
                </div>}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img src={headerImg} alt="Header Img"/>
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    )
}