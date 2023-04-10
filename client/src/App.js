import './App.css';
import {useState,useRef} from 'react';
import { NavbarContainer } from './components/Navbar/Navbar';
import {Banner} from './components/Banner/Banner';
import {Skills} from './components/Skills'
import {Projects} from './components/Projects';
import {Contact} from './components/Contact';
import {Footer} from './components/Footer';
import {ModalEmail} from './components/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [isModalVisible,setModalVisible] = useState(false);
  const [modalMessage,setModalMessage] = useState('');
  const [isEmailSent,setIsEmailSent] = useState(false);
  const contactRef = useRef(null);

  const handleShowModal = (isModalVisible,isEmailSent,modalMessage)=>{
    setIsEmailSent(isEmailSent);
    setModalVisible(isModalVisible);
    setModalMessage(modalMessage);
  }

  

  return (
    <div className="App">
     <NavbarContainer/>
      <Banner contactRef={contactRef}/>
      <Skills/>
      <Projects/>
      <Contact contactRef={contactRef} handleShowModal={handleShowModal}/>
      <Footer/>
      <ModalEmail show={isModalVisible} emailSent= {isEmailSent} message={modalMessage} handleShowModal ={handleShowModal}/>
      
    </div>
  );
}

export default App;
