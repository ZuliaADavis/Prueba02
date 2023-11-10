import firebaseApp from "../firebaseConfig/firebaseApp";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(firebaseApp);

async function loginEmailPassword(email, password) {
  signInWithEmailAndPassword(auth, email, password);
}

export default loginEmailPassword;