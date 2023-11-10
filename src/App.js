import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Router, Routes, Route, Link, Navigate, BrowserRouter} from 'react-router-dom';
import EmpleadosContext from "./context/EmpleadoContext";
import TransportistasContext from "./context/TransportistaContext";


import Home from "./view/Home";
import Login from "./view/Login";
import Viajes from "./view/Viajes";
import Sucursales from "./view/Sucursales";


import firebaseApp from "./firebaseConfig/firebaseApp";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import Trasportista from "./view/Trasportista";
const auth = getAuth(firebaseApp);

function App() {
  const [usuario, setUsuario] = React.useState(null);
  const [empleados, setEmpleados] = useState([]);
  const [transportistas, setTransportistas] = useState([]);

  useEffect (() =>{
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        setUsuario(usuarioFirebase);
      } else {
        setUsuario(null);
      }
    });
    return unsubscribe;
  }, []);
  if (usuario) {
    return (
      <BrowserRouter>
        <Container fluid>
          <Routes>
            <Route path="/" element={<Home usuario={usuario} />} />
            <Route path="/viajes" element={<Viajes usuario={usuario} />} />
            <Route path="/trasportista" element={<Trasportista usuario={usuario} />} />
            <Route path="/Sucursales" element={<Sucursales usuario={usuario} />} />
            {/* ... otras rutas que requieren autenticación ... */}
          </Routes>
        </Container>
      </BrowserRouter>
    );
  } else {
    return <Login />;
  }
}

  
export default App;
/*
    <BrowserRouter>
    <Container fluid>
    <Routes>
    <Route path = "Login" element= {usuario ? <Home usuario={usuario} /> : <Login />}/>
    <Route path="Home" element={<Home/>}/>
    <Route path="Viajes" element={<Viajes/>}/>
    </Routes>
    </Container>
    </BrowserRouter>*/
  