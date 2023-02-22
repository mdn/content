import { db } from "./firebase";
import { setDoc, doc, getDoc, addDoc, collection,query,where,getDocs } from "firebase/firestore";

export async function saveData(collectionName, docId, jsonObject) {
  try {
    return await setDoc(doc(db, collectionName, docId), jsonObject, {
      merge: true,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function saveDataWithoutDocId(collectionName, jsonObject) {
  try {
    return await addDoc(collection(db, collectionName), jsonObject);

  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function getData(collectionName, docId) {
  try {
    return await getDoc(doc(db, collectionName, docId));
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function getDataWithoutDocId(collectionName) {
  try {
    const q = query(collection(db, collectionName), where("projectUserId", "==", localStorage.getItem("id") ));
    return  await getDocs(q)
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  

}