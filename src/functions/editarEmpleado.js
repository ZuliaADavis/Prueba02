import firebaseApp from "../firebaseConfig/firebaseApp";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";


function añadirProducto(infoEmpleados) {
  const db = getFirestore(firebaseApp);
  const collectionRef = collection(db, "emplados");
  const docRef = doc(collectionRef, infoEmpleados.Id_empleado);
  setDoc(docRef, infoEmpleados);

  
}

export default añadirProducto;