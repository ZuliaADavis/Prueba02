import firebaseApp from "../firebaseConfig/firebaseApp";
import { getFirestore, collection, getDocs } from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default async function getAllViajes(){
    const viajes = [];
    const viajesRef = collection(db, "viajes");
    const viajesSnapshot = await getDocs(viajesRef);
    viajesSnapshot.forEach(doc => {
      viajes.push(doc.data());
    });
  
    const empleados = [];
    const empleadosRef = collection(db, "empleados");
    const empleadosSnapshot = await getDocs(empleadosRef);
    empleadosSnapshot.forEach(doc => {
      empleados.push(doc.data());
    });

    const transportista = [];
    const transportistaRef = collection(db,"transportista");
    const transportistasnapshot =  await getDocs(transportistaRef);
    transportistasnapshot.forEach((doc) =>{
        transportista.push(doc.data());

    });
    return { viajes, empleados, transportista };

  }
