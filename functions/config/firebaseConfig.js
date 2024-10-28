"use strict";
exports.__esModule = true;
exports.firestore = void 0;
var admin = require("firebase-admin");
admin.initializeApp();
var firestore = admin.firestore();
exports.firestore = firestore;
