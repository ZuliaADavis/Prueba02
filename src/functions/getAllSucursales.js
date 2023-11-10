import firebaseApp from "../firebaseConfig/firebaseApp";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default async function getAllSucursales(){
    const sucursales = [];
    const collectionRef = collection(db, "sucursales") 
    const snapshot = await getDocs(collectionRef);
    snapshot.forEach(doc =>{
        sucursales.push(doc.data());
    });
    return sucursales;
}
