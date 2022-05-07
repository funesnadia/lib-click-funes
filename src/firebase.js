import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth} from "firebase/auth";

//configuracion de firebase
const firebaseConfig = {
  apiKey: "AIzaSyD9Gt3xPByLBx7gr80cslRy1yhgs_Ub73o",
  authDomain: "lib-click-funes.firebaseapp.com",
  projectId: "lib-click-funes",
  storageBucket: "lib-click-funes.appspot.com",
  messagingSenderId: "478011016803",
  appId: "1:478011016803:web:406305a9903a29dee85a56",
  measurementId: "G-83535C1VCV"
};

// Inicializacion Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db
// para el usuario logueado
export const auth = getAuth(app);
