const Users = require("../model/users.model");
const fs = require("fs");
const { encrypt } = require("../security/Cypher");
function getAllUsers(_, res) {
  res.json(Users);
}
function getAUser(req, res) {
  const username = req.params.uUname;
  const password = req.body.password;
  console.log("Uname: ", username, " Pasword: ", password, req.body);
  const [user] = Users.filter((user) => {
    return user.username === username;
  });
  if (user) {
    if (user.password === password) {
      res.status(200).json(user);
    } else {
      res.status(400).json({
        error: "Incorrect Password!",
      });
    }
  } else {
    res.status(404).json({
      error: "User not found!",
    });
  }
}

function addNewUser(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const info = req.body.info;

  console.log("Uname: ", username, " Pasword: ", password, req.body);
  const [user] = Users.filter((user) => {
    return user.username === username;
  });
  if (user) {
    res.status(400).json({ error: "User Already Exists!" });
  } else {
    const newUser = {
      username: username,
      password: password,
      info: info,
    };
    Users.push(newUser);
    fs.writeFileSync("users.txt", encrypt(JSON.stringify(Users)));
    res.status(200).json(newUser);
  }
}

function updateUserInfo(req, res) {
  const username = req.body.username;
  const info = req.body.info;
  const [user] = Users.filter((user) => {
    return user.username === username;
  });
  const updatedUser = {
    username: user.username,
    password: user.password,
    info: info,
  };
  for (let index = 0; index < Users.length; index++) {
    const element = Users[index];
    if (element.username === user.username) {
      Users[index] = updatedUser;
    }
  }
  fs.writeFileSync("users.txt", encrypt(JSON.stringify(Users)));
  res.status(200).json(updatedUser);
}

module.exports = {
  getAllUsers,
  getAUser,
  addNewUser,
  updateUserInfo,
};
