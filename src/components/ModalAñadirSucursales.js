import {Modal, Stack, Form, Button, ModalFooter} from "react-bootstrap";
import añadirSucursales from "../functions/añadirSucursales"

import React from 'react'

function ModalAñadirSucursales({isModalAñadirSucursales, 
    setIsModalAñadirSucursales, actualizarEstadoSucursales}) {

function añadirSucusalesModal(){
    //obtenemos info 

    const NombreSucursal = document.getElementById("NombreSucursal")?.value;
    const DireccionSucursal = document.getElementById("DireccionSucursal")?.value;
    
    const infoSucursales = {NombreSucursal, DireccionSucursal};
    añadirSucursales(infoSucursales);

    setIsModalAñadirSucursales(false);
    actualizarEstadoSucursales();

}
  return (
    <Modal show ={isModalAñadirSucursales} onHide={() => setIsModalAñadirSucursales(false)}> 
        <Modal.Header>
            <Modal.Title>Añadir Sucursales</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Stack>
                    <Form.Control id="NombreSucursal" placeholder="NombreSucursal" type="texto" className="mb-1"/>
                    <Form.Control id="DireccionSucursal" placeholder="DireccionSucursal" type="texto" className="mb-1"/>
                </Stack>
            </Form>
        </Modal.Body>
        <ModalFooter>
            <Button variant="secondary" onClick={()=>
            setIsModalAñadirSucursales(false)}>
                Cancelar
            </Button>
            <Button variant="primary" onClick={añadirSucusalesModal}>
                Añadir
            </Button>
        </ModalFooter>
    </Modal>
  )
}

export default ModalAñadirSucursales;