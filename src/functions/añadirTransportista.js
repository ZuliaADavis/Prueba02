import firebaseApp from "../firebaseConfig/firebaseApp";
import {getFirestore, collection, doc, setDoc} from "firebase/firestore";


const db = getFirestore();

function añadirTransportista(infoTransportista){
    const collectionRef = collection(db, "transportista");
    const docRef = doc(collectionRef, infoTransportista.NoTransportista);// referencia del cocumento
    setDoc(docRef, infoTransportista);


}

export default añadirTransportista;