// import hooks
import { useState, useEffect } from 'react';

// import firestore db
import { db } from '../firebase/config';
// firebase imports
import { doc, onSnapshot } from 'firebase/firestore';

export const useDocument = (c, d) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ref = doc(db, c, d);
    const unsub = onSnapshot(
      ref,
      (doc) => {
        setDocument(doc.data());
      },
      (error) => {
        setError('Could not fetch the data');
        console.log(error);
      }
    );
    return () => unsub();
  }, [c, d]);

  return { document, error };
};
