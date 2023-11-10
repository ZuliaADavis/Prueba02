import firebaseApp from "../firebaseConfig/firebaseApp";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
//import escribirLog from "./escribirLog";

function añadirViajes(infoViajes, autor) {
  const db = getFirestore(firebaseApp);
  const collectionRef = collection(db, "viajes");
  const docRef = doc(collectionRef, infoViajes.trasportista);
  setDoc(docRef, infoViajes);

  //escribirLog("Creación", infoProducto, autor);
}

export default añadirViajes;