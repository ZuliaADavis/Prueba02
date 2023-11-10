import firebaseApp from "../firebaseConfig/firebaseApp";
import { getFirestore, deleteDoc, collection, doc} from "firebase/firestore";
const db = getFirestore(firebaseApp);


export default async function eliminarEmpleadosHome(empleados){
    const coleccionRef = collection(db, "empleados");
    const docuRef =  doc(coleccionRef, empleados.Id_empleado);
    const eliminado = await deleteDoc(docuRef);
    return eliminado;
}