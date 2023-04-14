import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Modal.scss';

export const ModalEmail = ({message,show,emailSent,handleShowModal})=>{


    const handleClose = () => handleShowModal(false,'');

      return (
        <Modal show={show} onHide= {handleClose} style={{color:"black"}} centered>
        <Modal.Dialog >
          <Modal.Header closeButton>
            <Modal.Title>{emailSent ? 'Thanks for reaching out' : 'Ohh Noo!!!'}</Modal.Title>
          </Modal.Header>
    
          <Modal.Body >
           {message}
          </Modal.Body>
    
          <Modal.Footer>
            <Button onClick={handleClose} variant="secondary">Close</Button>
          </Modal.Footer>
        </Modal.Dialog>
        </Modal>
      );
    
    
}