import {useState,useEffect} from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Download} from 'react-bootstrap-icons';
import 'animate.css';
import download from 'downloadjs';
import {SocialIcons} from './SocialIcons';

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

    const handleDownload = async(e)=>{
        e.preventDefault();
        const resumeData = await fetch('/resume');
        const blob = await resumeData.blob();
        download(blob,'Sumit Ghewade Resume.pdf');
    }

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
            <button  onClick={(e)=> handleDownload(e)}className="vvd"><span>Download Resume <span className="download"><Download size={25} /></span></span></button>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>);
}


