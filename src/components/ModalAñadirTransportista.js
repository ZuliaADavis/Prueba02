
import {Modal, Stack, Form, Button} from "react-bootstrap";
import añadirTransportistaModal from "../functions/añadirTransportista"
import añadirTransportista from "../functions/añadirTransportista";


function ModalAñadirTransportista({isModalAñadirTransportista, 
    setIsModalAñadirTransportista, actualizarEstadoTransportista}) {


function añadirTransportistaModal(){
    //Obtener info del formulario
    const NoTransportista = document.getElementById("NoTransportista")?.value;
    const TarifaPorKilometro =  document.getElementById("TarifaPorKilometro")?.value;
    const nombreTransportista =  document.getElementById("nombreTransportista")?.value;
 // enviamos a firebase
 const infoTransportista = {NoTransportista, TarifaPorKilometro, nombreTransportista};
 añadirTransportista(infoTransportista);
 actualizarEstadoTransportista()

 //cerrar el modal
 setIsModalAñadirTransportista(false);
}

  return  ( <Modal show = {isModalAñadirTransportista} omHide={() => setIsModalAñadirTransportista
  (false)}>
<Modal.Header>
    <Modal.Title>Añadir Productos</Modal.Title>
</Modal.Header>
<Modal.Body>
    <Form>
        <Stack>
            <Form.Control id="NoTransportista" placeholder="NoTransportista" 
            type="text" className="mb-1"/>
            <Form.Control id="TarifaPorKilometro" placeholder="TarifaPorKilometro" 
            type="text" className="mb-1"/>
            <Form.Control id="nombreTransportista" placeholder="nombreTransportista" 
            type="text" className="mb-1"/> 
        </Stack>
    </Form>
</Modal.Body>
<Modal.Footer>
    <Button variant="secondary" onClick={() => setIsModalAñadirTransportista(false)}>
        Cancelar
    </Button>
    <Button variant="primary" onClick={añadirTransportistaModal}>
        Añadir
    </Button>
</Modal.Footer>
  </Modal>
    
  );
}

export default ModalAñadirTransportista;