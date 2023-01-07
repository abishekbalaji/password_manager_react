import { initializeApp } from "firebase/app";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAc7624CBlSAHAr5wU6qPrroXMG30OHZC8",
  authDomain: "password-manager-4c64a.firebaseapp.com",
  projectId: "password-manager-4c64a",
  storageBucket: "password-manager-4c64a.appspot.com",
  messagingSenderId: "539469553527",
  appId: "1:539469553527:web:dc5115122238c3807d4b72",
};

initializeApp(firebaseConfig);

export const auth = getAuth();

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGooglePopup = async () =>
  await signInWithPopup(auth, googleProvider);

export const signInAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

const db = getFirestore();

export const createUserDocument = async (
  userAuth,
  collectionName,
  additonalInfo = {}
) => {
  if (!userAuth) return;

  const userRef = doc(db, collectionName, userAuth.uid);
  const userSnapshot = await getDoc(userRef);

  if (!userSnapshot.exists()) {
    const { displayName = null, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additonalInfo,
      });
    } catch (error) {
      console.log("Error creating the user!", error.message);
    }
  }

  return userRef;
};
