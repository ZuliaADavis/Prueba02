//import firebaseApp from "../firebaseConfing/firebaseApp";
import {
    getFirestore,
    collection,
    query,
    where,
    getDocs,
  } from "firebase/firestore";
  const db = getFirestore();
  
  async function filtrarDatos(stringBusqueda) {
    const docusFiltrado = [];
   
  
    const collecionRef = collection(db, "empleados");
    const queryTransportista= query(
      collecionRef,
      where("Fecha", "==", stringBusqueda)
     
    );
    const queryFecha = query(collecionRef, where("Transportista", "==", stringBusqueda));
  
    const arraySnapshots = await Promise.all([
      getDocs(queryFecha),
      getDocs(queryTransportista),
    ]);
  
    arraySnapshots.forEach((snapshot) => {
      snapshot.forEach((doc) => {
        docusFiltrado.push(doc.data());
      });
    });
    
    return docusFiltrado;
  }
  
  export default filtrarDatos;