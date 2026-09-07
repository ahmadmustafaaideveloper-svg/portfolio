import { getAnalytics } from "firebase/analytics";
import { firebaseApp } from "./lib/firebase";

try {
  getAnalytics(firebaseApp);
} catch (error) {
  console.error("Firebase Analytics failed to initialize", error);
}
