import firebaseApp from "../firebaseConfig/firebaseApp";
import { getFirestore, deleteDoc, collection, doc } from "firebase/firestore";
const db = getFirestore(firebaseApp);



export default async function eliminarSucursalesHome(sucursales){
    const coleccionRef = collection(db, "sucursales")
    const docuRef = doc(coleccionRef, sucursales.NombreSucursal);
    const eliminado = await deleteDoc(docuRef);
    return eliminado;
}