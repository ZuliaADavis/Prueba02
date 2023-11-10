import React from 'react'
import signOut from '../functions/cerrarSesion';
import { Button, Stack, Form, Container, Table } from 'react-bootstrap';
import getAllEmpleados from '../functions/getAllEmpleados';
import { useNavigate } from 'react-router-dom';

//import ModalAñadir from '../components/ModalAñadir';



import eliminarEmpleadosHome from '../functions/eliminarEmpleados';

//modales pantalla emergente 

import ModalAñadir from "../components/ModalAñdir";
/*En esta parte haremos el buscador para realizar las consultas
    usaremos un formulario */

import ModalEditar from '../components/ModalEditar';
import filtrarDatos from '../functions/filtrarDatos';

function Home(usuario) {
  const [empleados, setEmpleados] =  React.useState([]); 
  const [isModalAñadir, setIsModalAñadir] = React.useState(false);
  const [isModalEditar, setIsModalEditar] = React.useState(false);
  const [empleadoEditar, setEmpleadoEditar]=  React.useState({});

  async function busquedaFormHandler(e){
    e.preventDefault();
    const busqueda = e.target.busqueda.value;
    const nvoDocus = await filtrarDatos(busqueda);
    setEmpleados(nvoDocus);
  }

  function actualizarEstadoEmpleados(){
    getAllEmpleados().then((empleados) => {
      setEmpleados(empleados);
    });
  }

  function añadirEmpleadosHome(){
    setIsModalAñadir(true);

  }

  React.useEffect(() => {
    actualizarEstadoEmpleados();


  }, []);


  
  let navigate = useNavigate();

  return (
    <Container fluid>
      <ModalAñadir
      isModalAñadir  = {isModalAñadir}
      setIsModalAñadir = {setIsModalAñadir}
      actualizarEstadoEmpleados={actualizarEstadoEmpleados}
      usuario = {usuario}
      />

      {empleadoEditar && (
        <ModalEditar
        isModalEditar={isModalEditar}
        setIsModalEditar={setIsModalEditar}
        actualizarEstadoEmpleados={actualizarEstadoEmpleados}
        empleadoEditar={empleadoEditar}
        setEmpleadoEditar = {setEmpleadoEditar}
      />
      )}
     
    <Stack direction= "horizontal" className='justify-content-between'>
      <p style={{fontSize: 24}}>Bienvenido,{usuario.email}</p>

     <button onClick={signOut}>Crear Secion</button>
     
    </Stack>
    <hr/>


    <Form onSubmit={busquedaFormHandler}>
      <Stack direction='horizontal'>
      <Form.Group controlId='busqueda' className='w-75 m-3'>
      <Form.Control type='text' placeholder='Buscar'/>
      </Form.Group>
      <Button variant = 'dark' type='submit'>
        Buscar
      </Button>
      <Button variant='Light' onClick={() =>{
        const input = document.getElementById("busqueda");
        input.value = "";
        actualizarEstadoEmpleados()
      }}>Resetear</Button>
      </Stack>
    </Form>
    <hr />
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Id_empleado</th>
          <th>Fecha</th>
          <th>Nombre </th>
          <th>Distancia</th>
          <th>Sucursal</th>
          <th>Transportista</th>
          <th>Tarifa</th>
          <th>Total</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
      {empleados && empleados.map((empleados, index) =>(
        <tr key={index}>
          <td>{index + 1}</td> 
          <td>{empleados.Id_empleado}</td>
          <td>{empleados.Fecha}</td>
          <td>{empleados.Nombre}</td>
          <td>{empleados.Distancia}</td>
          <td>{empleados.Sucursal}</td>
          <td>{empleados.Transportista}</td>
          <td>{empleados.Tarifa}</td>
          <td>{empleados.Total}</td>
          
          <td>
            <Button variant = "dark" onClick={() =>
            {

              setEmpleadoEditar({...empleados});
              setIsModalEditar(true)
             
            }
          }>
            Editar
            </Button>
            <Button variant='danger' onClick={() => {
              eliminarEmpleadosHome(empleados).then(
                (confirmacion) => {
                  actualizarEstadoEmpleados();
                });
             

              }}>Eliminar</Button>
          </td>
          </tr>

      ))}
    </Table>
    <Button className="mb-1" variant="primary" onClick={añadirEmpleadosHome}>Añadir Empleado</Button>
    <button className="mb-1" variant="primary" onClick={()=>navigate('./Viajes')}>Añadir Viajes</button>
    <button  className="mb-1"  variant="primary" onClick={()=>navigate('./Trasportista')}>Trasportistas</button>
    <button  className="mb-1" variant="primary" onClick={()=>navigate('./Sucursales')}>Sucursales</button>
            
   </Container>
   
  );
}

export default Home;