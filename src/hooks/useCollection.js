// import hooks
import { useState, useEffect } from 'react';

// import firestore db
import { db } from '../firebase/config';
// firebase imports
import { collection, onSnapshot } from 'firebase/firestore';

export const useCollection = (c) => {
  // state for documents that come back from the collection
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ref = collection(db, c);

    const unsub = onSnapshot(
      ref,
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ id: doc.id, ...doc.data() });
        });
        setDocuments(results);
      },
      (error) => {
        console.log(error);
        setError('Could not fetch the data');
      }
    );
    return () => unsub();
  }, [c]);

  return { documents, error };
};
