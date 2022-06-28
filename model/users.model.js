const fs = require("fs");
const cypher = require("../security/Cypher");
const data = fs.readFileSync("users.txt", "utf-8");
// console.log(data);
let users;
if (data) {
  users = JSON.parse(cypher.decrypt(data));
} else {
  users = [];
}
module.exports = users;
