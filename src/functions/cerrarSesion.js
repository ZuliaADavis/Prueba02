import firebaseApp from "../firebaseConfig/firebaseApp";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(firebaseApp);

function cerrarSesion() {
  signOut(auth);
}

export default cerrarSesion;