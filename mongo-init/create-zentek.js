// mongo-init/create-zentek.js
db = db.getSiblingDB('admin'); // run on admin DB
db.createUser({
  user: "zentek",
  pwd: "ZentekPass123!",
  roles: [
    { role: "readWriteAnyDatabase", db: "admin" },
    { role: "userAdminAnyDatabase", db: "admin" }
  ]
});
