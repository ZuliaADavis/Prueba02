import {Modal, Stack, Form, Button} from "react-bootstrap";
import añadirTransportistaModal from "../functions/añadirTransportista"
import añadirTransportista from "../functions/añadirTransportista";


function ModalEditarTransportista({
   isModalEditarTransportista, 
   setIsModalEditarTransportista,
   actualizarEstadoTransportista,
   transportistaEditar,}) {


function editarTransportistaModal(){
    //Obtener info del formulario
    const NoTransportista = document.getElementById("NoTransportista")?.value;
    const TarifaPorKilometro =  document.getElementById("TarifaPorKilometro")?.value;
    const nombreTransportista =  document.getElementById("nombreTransportista")?.value;
 // enviamos a firebase
 const infoTransportista = {NoTransportista, TarifaPorKilometro, nombreTransportista};
 añadirTransportista(infoTransportista);
 actualizarEstadoTransportista()

 //cerrar el modal
 setIsModalEditarTransportista(false);
}

  return  ( <Modal show = {isModalEditarTransportista} omHide={() => setIsModalEditarTransportista
  (false)}>
<Modal.Header>
    <Modal.Title>Editar Productos</Modal.Title>
</Modal.Header>
<Modal.Body>
    <Form>
        <Stack>
            <Form.Control id="NoTransportista" placeholder="IdTransportista" 
            type="text" className="mb-1" value={transportistaEditar.NoTransportista}/>
            <Form.Control id="TarifaPorKilometro" placeholder="TarifaPorKilometro" 
            type="text" className="mb-1"/>
            <Form.Control id="nombreTransportista" placeholder="nombreTransportista" 
            type="text" className="mb-1" /> 
        </Stack>
    </Form>
</Modal.Body>
<Modal.Footer>
    <Button variant="secondary" onClick={() => setIsModalEditarTransportista(false)}>
        Cancelar
    </Button>
    <Button variant="primary" onClick={editarTransportistaModal}>
        Editar
    </Button>
</Modal.Footer>
  </Modal>
    
  );
}

export default ModalEditarTransportista;