import { initializeApp } from "firebase/app";
import { 
    createUserWithEmailAndPassword, 
    getAuth, 
    signInWithEmailAndPassword, 
    signOut } from "firebase/auth";
import { 
    getFirestore, 
    collection, 
    addDoc } from "firebase/firestore";
import { toast } from "react-toastify";



const firebaseConfig = {
  apiKey: "AIzaSyDPWXYQWEURNnrrf9dc5grba4e7JZOnlA4",
  authDomain: "netflix-clone-fa75f.firebaseapp.com",
  projectId: "netflix-clone-fa75f",
  storageBucket: "netflix-clone-fa75f.firebasestorage.app",
  messagingSenderId: "240772697699",
  appId: "1:240772697699:web:33a655a37a74daee78b256"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) =>{
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password );
        const user = res.user;
        await addDoc(collection(db, "user"),{
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    }catch(error){
       console.log(error);
       toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email, password)=>{
    try{
        await signInWithEmailAndPassword(auth, email, password)
    }catch(error){
       console.log(error);
       toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout};
