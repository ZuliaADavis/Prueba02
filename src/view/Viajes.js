import React, {useContext, useEffect, useState} from 'react'
import {Container, Stack, Button, Form, Table} from "react-bootstrap"
//import Select from 'React-Select'
import EmpleadosContext from '../context/EmpleadoContext';
import TransportistasContext from '../context/TransportistaContext';
import getAllViajes from '../functions/getAllViajes';
import { useCollection } from 'react-firebase-hooks/firestore';
import firebaseApp from '../firebaseConfig/firebaseApp';
import { getFirestore, collection, addDoc} from "firebase/firestore";
import Trasportista from './Trasportista';
import Badge from 'react-bootstrap/Badge';

const firestore = getFirestore(firebaseApp);


function Viaje(usuario) {


  const transportistasCollectionRef = collection(firestore, "transportista")
    const [ transportistas, cargando, _error ] = useCollection(transportistasCollectionRef)

    const empleadosCollectionRef = collection( firestore, "empleados")
    const [ empleados, cargandoe, _errore ] = useCollection(empleadosCollectionRef)

    const [empleadosagg, setEmpleadosagg] = React.useState([]);

    
  
  
  const [transportistaSeleccionado, setTransportistaSeleccionado] = React.useState(null);
  const [empleadoSeleccionado, setEmpleadoSeleccionado] = React.useState(null);

  const viajesCollectionRef = collection( firestore, "viajes")

  const [viajes, cargandov, _errorviajs] = useCollection(viajesCollectionRef)


  async function agregarViajes(){
     await addDoc(viajesCollectionRef,{
      tranportista: transportistaSeleccionado,
      empleados: empleadosagg, 
      TarifaPorKilometro: empleados?.docs.filter(empleado=> empleadosagg.includes(empleado.data()?.Id_empleado)).reduce((suma, empleado)=>
        suma +=(empleado.data()?.Distancia || 0 ),
        0
       )*(transportistas?.docs.find(transportista => transportista.data().NoTransportista == transportistaSeleccionado)?.data().TarifaPorKilometro || 0), 
      fecha: new Date()
     })
     {/* solo ponemos estados*/}
     setTransportistaSeleccionado(null);
     setEmpleadoSeleccionado(null);
  }
  
   console.log(empleados?.docs[1].data())

   function aggmas(){
    if (empleadoSeleccionado === null) return
    // con esto verifico si el empleado ya esta 
    if (empleadosagg.includes(empleadoSeleccionado)) return
    setEmpleadosagg([...empleadosagg, empleadoSeleccionado])  
   }
  (viajes?.docs.map(v=>
    console.log(v.data())
    ))

   return(
    <Container fluid>
      <Stack direction="horizontal" className="justify-content-between">
        <p style={{fontSize:24}}>Ingresa Los Viajes</p>
      </Stack>
      <hr/>
      <Form>
        <Stack direction='horizontal'>
          <Form.Group controlId = "busqueda" className='w-75 m-3'>
            <Form.Control type='text' placeholder='Buscar'/>
          </Form.Group>
          <Button variant='dark' type= 'submit'>
            Buscar
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
            <th>Transportista</th>
            <th>Empleados</th>
            <th>Total Kilometro</th>
            <th>Total a pagar</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>1</td> 
            <td>
            <Form.Select aria-label="Default select example" onChange={(event)=>
              setTransportistaSeleccionado(event.target.value)}>
              <th>Tranportista</th>
            <option>Transportista</option>
            {transportistas?.docs.map((transportista)=>
        <option key= {transportista.data().NoTransportista}value={transportista.data().NoTransportista}>{transportista.data().nombreTransportista}</option>  
      )}
    </Form.Select>
    </td>
            <td style={{display: 'flex', flexDirection: 'column'}}>
              <div style={{display: 'flex' }}>
              <Form.Select  onChange={(event)=>
              setEmpleadoSeleccionado(event.target.value)}>
              {/*<th>Empleado</th>*/}
      <option>empleados</option>
      {empleados?.docs.map((empleados)=>
        <option key={empleados.data().Id_empleado} value={empleados.data().Id_empleado}>{empleados.data().Id_empleado}</option>
      )}
    </Form.Select><button variant="primary" onClick={aggmas}>mas</button>
    </div>
    {/*mostrar empleados ya selecionados */}
    <div style={{ display: 'flex', flexDirection: 'column', margin:'15px'}}> 
    {empleados?.docs.filter(empleado => empleadosagg.includes(empleado.data()?.Id_empleado)).map( empleado =>
    
          <Badge bg="secondary" className='m-2'>{empleado.data().Nombre}</Badge> 

    )}
    </div>
    </td>

  
            <td>{empleados?.docs.find(empleado => empleado.data()?.Id_empleado == empleadoSeleccionado)?.data()?.Distancia}</td>
            <td>{empleados?.docs.filter(empleado=> empleadosagg.includes(empleado.data()?.Id_empleado)).reduce((suma, empleado)=>
             suma +=(empleado.data()?.Distancia || 0 ),
             0
            )*(transportistas?.docs.find(transportista => transportista.data().NoTransportista == transportistaSeleccionado)?.data().TarifaPorKilometro || 0) }</td>
            
            <td>
              
              
            </td>
          </tr>
          

            
        </tbody>

        <Button onClick={agregarViajes}>Agregar Viajes</Button>
</Table>

<Table>

  <thead>
      <th>#</th>
      <th>Transportista</th>
      <th>Empleados</th>
      <th>Total Kilometro</th>
      <th>Total a pagar</th>
      <th></th>
  </thead>
  <tbody>
    
      {
    viajes?.docs.map( viaje =>
                <tr key={viaje.data().fecha.toString()}>
                    <td>{viaje.data().TarifaPorKilometro}</td>
                    <td>{viaje.data()?.empleados.map( empleado => <>{empleado}<br/></> )}</td> 
                    <td>{viaje.data().tranportista}</td>
                </tr>
            )
        } 
      
    
  </tbody>

</Table>

    </Container>
  )
    
}

export default Viaje;