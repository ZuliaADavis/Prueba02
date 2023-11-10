import React from "react";
import {Container, Stack, Button, Form, Table} from "react-bootstrap"
import getAllSucursales from "../functions/getAllSucursales";

import ModalAñadirSucursales from "../components/ModalAñadirSucursales";
import eliminarSucursalesHome from "../functions/eliminarSucursalesHome";
import ModalEditarSucursales from "../components/ModalEditarSucursales";

function Sucursales(usuario){

    const [sucursales, setSucursales] = React.useState([]);
    const [isModalAñadirSucursales, setIsModalAñadirSucursales] = React.useState(false);
    const [isModalEditarSucursales, setIsModalEditarSucursales] = React.useState(false);
    const [sucursalesEditar, setSucursalesEditar] = React.useState({});    


    function actualizarEstadoSucursales(){
        getAllSucursales().then((sucursales)=>{
            setSucursales(sucursales);
        })
     }

    function añadirSucursalesHome( ){
      setIsModalAñadirSucursales(true);
     }

    React.useEffect(() =>{
        actualizarEstadoSucursales();
    }, []);


    return(
        <Container fluid>
          <ModalAñadirSucursales 
          isModalAñadirSucursales={isModalAñadirSucursales}
          setIsModalAñadirSucursales={setIsModalAñadirSucursales}
          actualizarEstadoSucursales = {actualizarEstadoSucursales}
          />
            {sucursalesEditar && (
            <ModalEditarSucursales
            isModalEditarSucursales={isModalEditarSucursales}
            setIsModalEditarSucursales={setIsModalEditarSucursales}
            actualizarEstadoSucursales={actualizarEstadoSucursales}
            sucursalesEditar={sucursalesEditar}
            />)}
            <Stack direction="horizontal" className="justify-content-between"> 
                <p style={{fontSize: 24}}>Sucursales</p>
                <Button>Home</Button>
            </Stack>
            <hr/>
            <Form>
        <Stack direction='horizontal'>
          <Form.Group controlId = "busqueda" className='w-75 m-3'>
            <Form.Control type='text' placeholder='Buscar'/>
          </Form.Group>
          <Button variant='dark' type= 'submit'>
            Buscar Tranportista
          </Button>
          <Button variant='ligth' type= 'submit'>
            Resetear
          </Button>

        </Stack>
      </Form>
      <hr/>
      <Table>
        <thead>
            <tr>
            <th>#</th>
            <th>NombreSucursal</th>
            <th>DireccionSucursal</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
        { sucursales && sucursales.map((sucursales, index) =>(
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{sucursales.NombreSucursal}</td>
                    <td>{sucursales.DireccionSucursal}</td>
                    <td>
                    <Button variant='dark' onClick={() =>

                    {
                      setSucursalesEditar(sucursales);
                      setIsModalEditarSucursales(true);
                    }

                  }
                      >
                      Editar</Button>


              <Button variant='danger' onClick={() => {
                eliminarSucursalesHome(sucursales)
                actualizarEstadoSucursales();
                }}>
              Eliminar
              </Button>

                    </td>
                </tr>
            ))}
        </tbody>
      </Table>
      <Button onClick={añadirSucursalesHome}>Añadir Sucursales</Button>
        </Container>
        
    );
  
}
export default Sucursales;