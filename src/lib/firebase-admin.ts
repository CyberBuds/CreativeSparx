import admin from 'firebase-admin';
import { Firestore } from 'firebase-admin/firestore';

let db: Firestore;

if (process.env.SERVICE_ACCOUNT_KEY_JSON) {
  if (!admin.apps.length) {
    const serviceAccount = JSON.parse(process.env.SERVICE_ACCOUNT_KEY_JSON);
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }
  db = admin.firestore();
} else {
  // Mock db for build time
  console.log('SERVICE_ACCOUNT_KEY_JSON not found. Using mock firestore db for build.');
  db = {
    collection: () => ({
      doc: () => ({
        get: () => Promise.resolve({ exists: false }),
        update: () => Promise.resolve(),
        delete: () => Promise.resolve(),
      }),
      get: () => Promise.resolve({ docs: [] }),
      add: () => Promise.resolve(),
    }),
  } as any;
}

export { db };
