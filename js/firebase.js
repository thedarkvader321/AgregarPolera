
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  import { getFirestore,collection,addDoc,getDocs,onSnapshot,deleteDoc,doc,getDoc,updateDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD5fTo9jdayVlYIK26fhi4iz0zTLk-k4pg",
    authDomain: "poleras-moni.firebaseapp.com",
    projectId: "poleras-moni",
    storageBucket: "poleras-moni.appspot.com",
    messagingSenderId: "100679018209",
    appId: "1:100679018209:web:33c9377d57816f90e979a0",
    measurementId: "G-VDDH3F4C8H"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();



export const saveForm = (nombre, plataforma,estado)=> //guarda datos
     addDoc(collection(db,'poleras'),{nombre,plataforma,estado}) 

export const getPolera = () => getDocs(collection(db,'poleras')) //muestra datos

export const ongetPolera = (callback)=> onSnapshot(collection(db,'poleras'),callback);//listar datos

export const EliminarEstudiante = id => deleteDoc(doc(db,'poleras',id));//eliminiar un dato

export const EditarEstudiante = id => getDoc(doc(db,'poleras',id)); //editar

export const ActualizarEstudiante = (id, newFields)=> updateDoc(doc(db,'poleras',id), newFields); //actualizar
