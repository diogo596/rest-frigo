const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const UserManager = require("../models/UserManager");

const userManager = new UserManager();

const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const user = await tables.user.readAll();

    res.json(user);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const user = await tables.user.read(req.params.id);
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const user = req.body;
  let newName = `public/uploads/dafault.jpg`;

  if (req.file !== undefined) {
    const avatar = req.file;
    newName = `${avatar.destination}/${avatar.filename}-${avatar.originalname}`;

    fs.renameSync(`${avatar.destination}/${avatar.filename}`, newName);
  }

  try {
    if (user.password) {
      const hashedPassword = await argon2.hash(user.password);
      delete user.password;

      const insertId = await tables.user.create(
        {
          pseudo: user.pseudo,
          email: user.email,
          hashedPassword,
        },
        newName
      );

      res.status(201).json({ insertId });
    } else {
      throw new Error("Password is missing");
    }
  } catch (err) {
    next(err);
  }
};
const login = async (req, res, next) => {
  try {
    const token = jwt.sign(req.user, process.env.APP_SECRET);
    if (await tables.user.readByEmailWithPassword(req.body.email)) {
      res.json({ succes: "user loged succes", token });
    } else {
      res.json({ error: "oups une email ou password incorrect" });
    }
  } catch (err) {
    next(err);
  }
};

async function deleteUser(req, res) {
  const userId = req.params.id;

  try {
    await userManager.delete(userId);

    res.status(204).send();
  } catch (error) {
    console.error("Erreur lors de la suppression de l'utilisateur :", error);
    res.status(500).json({
      error: "Une erreur est survenue lors de la suppression de l'utilisateur",
    });
  }
}
module.exports = {
  browse,
  read,
  // edit,
  add,
  login,
  deleteUser,
};
