// import { db } from "../../firebase"; // Adjust the path to your firebase config
// import { doc, getDoc } from "firebase/firestore";

// export default defineEventHandler(async (event) => {
//   const { slug } = event.context.params; // Get slug from the request params
//   const docRef = doc(db, "pages", slug);
//   const docSnap = await getDoc(docRef);

//   if (docSnap.exists()) {
//     return docSnap.data();
//   } else {
//     return { error: "Page not found" };
//   }
// });
