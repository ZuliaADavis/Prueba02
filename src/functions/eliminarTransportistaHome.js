import firebaseApp from "../firebaseConfig/firebaseApp";
import { getFirestore, deleteDoc, collection, doc} from "firebase/firestore";
const db = getFirestore(firebaseApp);


export default async function eliminarTransportistaHome(transportista){
    const coleccionRef = collection(db, "transportista");
    const docuRef =  doc(coleccionRef, transportista.NoTransportista);
    const eliminado = await deleteDoc(docuRef);
    return eliminado;
}