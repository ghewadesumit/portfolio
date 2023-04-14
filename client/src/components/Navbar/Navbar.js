import {useState,useEffect} from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Eye} from 'react-bootstrap-icons';
import 'animate.css';
import {SocialIcons} from '../SocialIcons/SocialIcons';
import './Navbar.scss';
import SumitResume from '../../assets/docs/Sumit Resume.pdf';

export const NavbarContainer = ()=>{
    const [activeLink,setActiveLink] = useState('home');
    const [isScrolled,setIsScrolled] = useState(false);

    useEffect(()=>{
        const onScroll = ()=>{
            if(window.scrollY > 50){
                setIsScrolled(true);
            }else{
                setIsScrolled(false);
            }
        }
        window.addEventListener('scroll',onScroll);

        return ()=> window.removeEventListener('scroll',onScroll);
    },[])

    const handleUpdateActiveLink = (value) => {
        setActiveLink(value);
      }

    return(
    <Navbar expand="lg" className={isScrolled ? 'scrolled':''}>
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" onClick = {()=> handleUpdateActiveLink('home')} className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}>Home</Nav.Link>
          <Nav.Link href="#skills" onClick = {()=> handleUpdateActiveLink('skills')} className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}>Skills</Nav.Link>
          <Nav.Link href="#project" onClick = {()=> handleUpdateActiveLink('projects')} className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}>Projects</Nav.Link>
        </Nav>
        <span className="navbar-text">
            <SocialIcons/>
            <Nav.Link href={SumitResume} className="vvd" target='blank'><span>View Resume <span className="download"><Eye size={25} /></span></span></Nav.Link>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>);
}


