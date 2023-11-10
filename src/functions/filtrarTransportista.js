import firebaseApp from "../firebaseConfig/firebaseApp";
import {
    getFirestore,
    collection,
    query,
    where,
    getDocs,
  } from "firebase/firestore";
  const db = getFirestore();
  

  async function  filtrarTransportista(stringBusqueda) {
    const docusFiltrado = [];
   
  
    const collecionRef = collection(db, "transportista");
    const queryTransportista= query(
      collecionRef,
      where("NoTransportista", "==", stringBusqueda)
     
    );
    const queryNoTransportista = query(collecionRef, where("nombreTransportista", "==", stringBusqueda));
  
    const arraySnapshots = await Promise.all([
      getDocs(queryNoTransportista),
      getDocs(queryNoTransportista),
    ]);
  
    arraySnapshots.forEach((snapshot) => {
      snapshot.forEach((doc) => {
        docusFiltrado.push(doc.data());
      });
    });
    return docusFiltrado;
  }


export default filtrarTransportista;