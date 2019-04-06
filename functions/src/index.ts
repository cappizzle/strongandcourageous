import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin'
admin.initializeApp(functions.config().firebase)

const universal = require(`${process.cwd()}/dist/server`).app;

export const ssr = functions.https.onRequest(universal);
