import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAKhv0R-2dtdtzgc6oSr1EEUq4YCs3Tm8o",
    authDomain: "zedflow-project.firebaseapp.com",
    projectId: "zedflow-project",
    storageBucket: "zedflow-project.appspot.com",
    messagingSenderId: "159525719026",
    appId: "1:159525719026:web:4c96296b88179933f1396b",
    measurementId: "G-JWPJXLB384"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
    try {
        const googleProvider = new GoogleAuthProvider();
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                Email: user.email,
            });
        }

    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};
const logInWithEmailAndPassword = async (Email, pass) => {
    try {
        await signInWithEmailAndPassword(auth, Email, pass);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};
const registerWithEmailAndPassword = async (Email, pass, rememberMe) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, Email, pass);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            authProvider: "local",
            Email,
        });
        if (rememberMe) {
            // Save user authentication data to local storage or implement session management
        }

    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};
const sendPasswordReset = async (Email) => {
    try {
        await sendPasswordResetEmail(auth, Email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};
const logout = () => {
    signOut(auth);
};

export {
    auth,
    db,
    signInWithGoogle,
    signInWithEmailAndPassword,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordReset,
    sendPasswordResetEmail,
    logout,
};