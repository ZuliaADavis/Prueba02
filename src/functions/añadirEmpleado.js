import firebaseApp from "../firebaseConfig/firebaseApp";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
//import escribirLog from "./escribirLog";

function añadirEmpleado(infoEmpleados, autor) {
  const db = getFirestore(firebaseApp);
  const collectionRef = collection(db, "empleados");
  const docRef = doc(collectionRef, infoEmpleados.Id_empleado);
  setDoc(docRef, infoEmpleados);

  //escribirLog("Creación", infoProducto, autor);
}

export default añadirEmpleado;