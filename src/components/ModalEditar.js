import React from 'react';

import {Modal, Stack, Form, Button} from "react-bootstrap";
import añadirEmpleado from '../functions/añadirEmpleado';


// esta funcion recibira 2 props
function ModalEditar({ 
      isModalEditar,
      setIsModalEditar, 
      actualizarEstadoEmpleados,
      usuario,
      empleadoEditar,
      setEmpleado,
      setEmpleadoEditar,
    }){
   
    function editarEmpleadosModal(){

               
            const Id_empleado= document.getElementById("Id_empleado")?.value;
            const Fecha = document.getElementById("Fecha")?.value;
            const Nombre = document.getElementById("Nombre")?.value;
            const Distancia = document.getElementById("Distancia")?.value;
            const Sucursal = document.getElementById("Sucursal")?.value;
            const Transportista = document.getElementById("Transportista")?.value;
            const Tarifa = document.getElementById("Tarifa")?.value;
            const Total = document.getElementById("Total")?.value;
            

            const infoEmpleados = {Id_empleado,Nombre, Fecha,  Sucursal, Distancia, Transportista, Tarifa, Total };
            añadirEmpleado(infoEmpleados);
            //editarEmpleado(infoEmpleados);
            setEmpleadoEditar(null);
            actualizarEstadoEmpleados();
            setIsModalEditar(false); 
}

   
   const [empleadoEstado, setEmpleadoEstado] = React.useState({
    ...empleadoEditar,
});

   return ( 
   <Modal show={isModalEditar} 
   onHide={() => {setIsModalEditar(false);
   setEmpleadoEditar(null);
   setEmpleadoEditar(null);
   }}>

        <Modal.Header>
            <Modal.Title>Editar Empleado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Stack>
                    <Form.Control id="Id_empleado"
                     placeholder="id_empleado" 
                     type="number" 
                     className="mb-1"
                     value = {empleadoEstado?.Id_empleado}
                     onChange={(e) => setEmpleadoEstado({
                        ...empleadoEstado,
                        Id_empleado: e.target.value,
                     })}
                     />

                     <Form.Control id="Fecha"
                     placeholder="Fecha" 
                     type="date" 
                     className="mb-1"
                     value = {empleadoEstado?.Fecha}
                     onChange={(e) => setEmpleadoEstado({
                        ...empleadoEstado,
                        Fecha: e.target.value,
                     })}/>

                    <Form.Control id="Nombre"
                    placeholder="Nombre"
                    type="text"
                    className="mb-1"
                    value = {empleadoEstado?.Nombre}
                     onChange={(e) => setEmpleadoEstado({
                        ...empleadoEstado,
                        Nombre: e.target.value,
                     })}/>

                    <Form.Control id="Distancia"
                     placeholder="Distancia en km" 
                    type="number"
                    className="mb-1"
                    value = {empleadoEstado?.Distancia}
                     onChange={(e) => setEmpleadoEstado({
                        ...empleadoEstado,
                        Distancia: e.target.value,
                     })}/>

                    <Form.Control id="Sucursal"
                     placeholder="Sucursal" 
                     type="text" 
                     className="mb-1"
                     value = {empleadoEstado?.Sucursal}
                     onChange={(e) => setEmpleadoEstado({
                        ...empleadoEstado,
                        Sucursal: e.target.value,
                     })}/>

                    <Form.Control id="Transportista"
                     placeholder="Transportista" 
                     type="text" 
                     className="mb-1"
                     value = {empleadoEstado?.Transportista}
                     onChange={(e) => setEmpleadoEstado({
                        ...empleadoEstado,
                        Transportista: e.target.value,
                     })}/>

                    <Form.Control id="Tarifa"
                     placeholder="Tarifa" 
                     type="number" 
                     className="mb-1"
                     value = {empleadoEstado?.Tarifa}
                     onChange={(e) => setEmpleadoEstado({
                        ...empleadoEstado,
                        Tarifa: e.target.value,
                     })}
                     />

                    <Form.Control id="Total"
                     placeholder="Total" 
                     type="number" 
                     className="mb-1"
                     value = {empleadoEstado?.Total}
                     onChange={(e) => setEmpleadoEstado({
                        ...empleadoEstado,
                        Total: e.target.value,
                     })}/>

                </Stack>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant = "secondary" onClick={() => {
                setIsModalEditar(false);
                setEmpleadoEstado(null);
                }}>
                Cancelar
            </Button>
            <Button variant = "primary" onClick={editarEmpleadosModal}>
                Editar
            </Button>
        </Modal.Footer>
    </Modal>
      
);
}


export default ModalEditar;