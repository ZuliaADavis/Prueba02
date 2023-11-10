import React from 'react'
import signOut from '../functions/cerrarSesion';
import { Button, Stack, Form, Container, Table } from 'react-bootstrap';
import getAllTransportista from '../functions/getAllTransportista';
import { useNavigate } from 'react-router-dom';

import eliminarTransportistaHome from '../functions/eliminarTransportistaHome';

import filtrarTransportista from '../functions/filtrarTransportista';
import ModalAñadirTransportista from '../components/ModalAñadirTransportista';
import ModalEditarTransportista from '../components/ModalEditarTransportista';

function Trasportista({usuario}){
//creamos un estado
  const [transportista, setTransportista] = React.useState([]);
  const [isModalAñadirTransportista, setIsModalAñadirTransportista] = React.useState(false);
  const [isModalEditarTransportista, setIsModalEditarTransportista] = React.useState(false);
  const [transportistaEditar, setTransportistaEditar] = React.useState({});


async function busquedaFormTranportista(e){
  e.preventDefault();
  const busqueda = e.target.busqueda.value;
  const nvosDocus = await  filtrarTransportista(busqueda);
  setTransportista(nvosDocus);
}


  function actualizarEstadoTransportista(){
    getAllTransportista().then((transportista) =>{
      setTransportista(transportista);
    });
  }

  function añadirTransportistaHome(){
    setIsModalAñadirTransportista(true);
  }

  React.useEffect(() =>{
    actualizarEstadoTransportista();
  }, []);

  //console.log(transportista);
  let navigate = useNavigate();
  return(
    <Container fluid>
      <ModalAñadirTransportista 
      isModalAñadirTransportista= {isModalAñadirTransportista}
      setIsModalAñadirTransportista = {setIsModalAñadirTransportista}
      actualizarEstadoTransportista = {actualizarEstadoTransportista}/>

      {transportistaEditar && (
      <ModalEditarTransportista
      isModalEditarTransportista= {isModalEditarTransportista}
      setIsModalEditarTransportista = {setIsModalEditarTransportista}
      actualizarEstadoTransportista = {actualizarEstadoTransportista}
      transportistaEditar={transportistaEditar}
      />)}
      <Stack direction='horizontal' 
      className='justify-content-between'>
        <p style={{fontSize:24}}>Informacion Transportista</p>
        <Button onClick={signOut}>Volver atras</Button>
      </Stack>
      <hr/>
      <Form onSubmit={busquedaFormTranportista}>
        <Stack direction='horizontal'>
          <Form.Group controlId = "busqueda" className='w-75 m-3'>
            <Form.Control type='text' placeholder='Buscar'/>
          </Form.Group>
          <Button variant='dark' type= 'submit'>
            Buscar Tranportista
          </Button>
          <Button variant='ligth' type= 'submit' onClick={() =>{
            const input = document.getElementById("busqueda");
            input.value = "";
            actualizarEstadoTransportista()
          }}>
            Resetear
          </Button>

        </Stack>
      </Form>
      <hr/>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>NoTransportista</th>
            <th>Tarifa Por Kilometro</th>
            <th>nombreTranportista</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {transportista && transportista.map((transportista, index) =>(
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{transportista.NoTransportista}</td>
              <td>{transportista.TarifaPorKilometro}</td>
              <td>{transportista.nombreTransportista}</td>
              <td>
              <Button variant='dark'onClick={() =>
              {
                setTransportistaEditar(transportista);
                setIsModalEditarTransportista(true)
              }
                } >Editar</Button>

              <Button variant='danger' onClick={() =>{
                eliminarTransportistaHome(transportista);
                actualizarEstadoTransportista();
              }}
              >
              Eliminar
              </Button>
              </td>
             </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="primary" onClick={añadirTransportistaHome}>Añadir Transportista</Button>
      
      
    </Container>
  )
}

export default Trasportista;