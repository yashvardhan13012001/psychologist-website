import { db } from "@/lib/firebase/firestore";

export default function FirebaseTestPage() {
  return (
    <main className="p-10">
      <h1>Firebase is connected</h1>
      <p>Firestore initialized successfully.</p>
    </main>
  );
}