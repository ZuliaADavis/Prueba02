import firebaseApp from "../firebaseConfig/firebaseApp";
import {getFirestore, collection, doc, setDoc} from "firebase/firestore";


const db = getFirestore();

function añadirSucursales(infoSucursales){
    const collectionRef = collection(db, "sucursales");
    const docRef = doc(collectionRef, infoSucursales.NombreSucursal);// referencia del cocumento
    setDoc(docRef, infoSucursales);


}

export default añadirSucursales;