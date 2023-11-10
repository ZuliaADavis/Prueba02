import {Modal, Stack, Form, Button} from "react-bootstrap";

import añadirEmpleado from "../functions/añadirEmpleado";
//import { useState } from "react";



// esta funcion recibira 2 props
function ModalAñadir({ isModalAñadir,
      setIsModalAñadir, 
      actualizarEstadoEmpleados,
    }){
   
    function añadirEmpleadosModal(){

               
            const Id_empleado= document.getElementById("Id_empleado")?.value;
            const Fecha = document.getElementById("Fecha")?.value;
            const Nombre = document.getElementById("Nombre")?.value;
            const Distancia = parseFloat( document.getElementById("Distancia")?.value) || 0;
            const Sucursal = document.getElementById("Sucursal")?.value;
            const Transportista = document.getElementById("Transportista")?.value;
            const Tarifa = parseFloat(document.getElementById("Tarifa")?.value) || 0;
            const Total = Distancia * Tarifa;
            

            const infoEmpleados = {Id_empleado,Nombre, Fecha,  Sucursal, Distancia, Transportista, Tarifa, Total };
            añadirEmpleado(infoEmpleados);
            actualizarEstadoEmpleados();
            setIsModalAñadir(false); 
}
   return ( 
   <Modal show={isModalAñadir} onHide={() => setIsModalAñadir(false)}>
        <Modal.Header>
            <Modal.Title>Añadir Empleado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Stack>
                    <Form.Control id="Id_empleado"
                     placeholder="id_empleado" 
                     type="number" 
                     className="mb-1"
                     />

                     <Form.Control id="Fecha"
                     placeholder="Fecha" 
                     type="date" 
                     className="mb-1"/>

                    <Form.Control id="Nombre"
                    placeholder="Nombre"
                    type="text"
                    className="mb-1"/>

                    <Form.Control id="Distancia"
                     placeholder="Distancia en km" 
                    type="number"
                    className="mb-1"/>

                    <Form.Control id="Sucursal"
                     placeholder="Sucursal" 
                     type="text" 
                     className="mb-1"/>

                    <Form.Control id="Transportista"
                     placeholder="Transportista" 
                     type="text" 
                     className="mb-1"/>

                    <Form.Control id="Tarifa"
                     placeholder="Tarifa" 
                     type="number" 
                     className="mb-1"/>


                    <Form.Control id="Total"
                     placeholder="Total L." 
                     type="number" 
                     className="mb-1"/>
                </Stack>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant = "secondary" onClick={() => setIsModalAñadir (false)}>
                Cancelar
            </Button>
            <Button variant = "primary" onClick={añadirEmpleadosModal}>
                Añadir
            </Button>
        </Modal.Footer>
    </Modal>
      
);
}


export default ModalAñadir;