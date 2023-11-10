import firebaseApp from "../firebaseConfig/firebaseApp";
import { getFirestore, collection, getDocs } from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default async function getAllEmpleados() {
  const empleados = [];
  const collectionRef = collection(db, "empleados");
  const snapshot = await getDocs(collectionRef);
  snapshot.forEach((doc) => {
    empleados.push(doc.data());
  });
  return empleados;
}