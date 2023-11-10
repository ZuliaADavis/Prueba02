import {Modal, Stack, Form, Button, ModalFooter} from "react-bootstrap";
import añadirSucursales from "../functions/añadirSucursales"


import React from 'react'

function ModalEditarSucursales({isModalEditarSucursales, 
    setIsModalEditarSucursales, actualizarEstadoSucursales,
surcursalesEditar,}) {

function editarSucusalesModal(){
    //obtenemos info 

    const NombreSucursal = document.getElementById("NombreSucursal")?.value;
    const DireccionSucursal = document.getElementById("DireccionSucursal")?.value;
    
    const infoSucursales = {NombreSucursal, DireccionSucursal};
    añadirSucursales(infoSucursales);

    setIsModalEditarSucursales(false);
    actualizarEstadoSucursales();

}
  return (
    <Modal show ={isModalEditarSucursales} onHide={() => setIsModalEditarSucursales(false)}> 
        <Modal.Header>
            <Modal.Title>Editar Sucursales</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Stack>
                    <Form.Control id="NombreSucursal" placeholder="NombreSucursal" type="texto" className="mb-1"   />
                    <Form.Control id="DireccionSucursal" placeholder="DireccionSucursal" type="texto" className="mb-1"/>
                </Stack>
            </Form>
        </Modal.Body>
        <ModalFooter>
            <Button variant="secondary" onClick={()=>
            setIsModalEditarSucursales(false)}>
                Cancelar
            </Button>
            <Button variant="primary" onClick={editarSucusalesModal}>
                Editar
            </Button>
        </ModalFooter>
    </Modal>
  )
}

export default ModalEditarSucursales;