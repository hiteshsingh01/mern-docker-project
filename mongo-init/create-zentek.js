// Switch to "mydb" database
db = db.getSiblingDB("mydb");

// Create Zentek user (Admin rights)
db.createUser({
  user: "zentek",
  pwd: "ZentekPass123!",
  roles: [{ role: "dbOwner", db: "mydb" }]
});

// Create collection and insert dummy data
db.zentek_table.insertMany([
  { name: "Dummy1", role: "Admin" },
  { name: "Dummy2", role: "Editor" }
]);

// Create Hitesh user (Read-only access)
db.createUser({
  user: "hitesh",
  pwd: "HiteshReadPass",
  roles: [{ role: "read", db: "mydb" }]
});
