import firebaseApp from "../firebaseConfig/firebaseApp";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default async function getAllTransportista(){
    const transportista = [];
    const collectionRef = collection(db,"transportista");
    const snapshot =  await getDocs(collectionRef);
    snapshot.forEach((doc) =>{
        transportista.push(doc.data());
    });
    return transportista;
}