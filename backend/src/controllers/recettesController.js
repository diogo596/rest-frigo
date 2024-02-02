const fs = require("fs");
const tables = require("../tables");

const readAllRecettesWithIngredients = async (req, res, next) => {
  try {
    const recettes = await tables.recettes.readAllByRecetteId();

    res.json(recettes);
  } catch (err) {
    next(err);
  }
};

const browse = async (req, res, next) => {
  try {
    const recettes = await tables.recettes.readAll();

    res.json(recettes);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const recette = await tables.recettes.read(req.params.id);

    if (recette == null) {
      res.sendStatus(404);
    } else {
      res.json(recette);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const recette = req.body;
  let newName = `public/uploads/dafault.jpg`;

  if (req.file !== undefined) {
    const avatar = req.file;
    newName = `${avatar.destination}/${avatar.filename}-${avatar.originalname}`;

    fs.renameSync(`${avatar.destination}/${avatar.filename}`, newName);
  }

  try {
    const insertId = await tables.recettes.create(
      {
        pseudo: recette.pseudo,
        name: recette.name,
        genre: recette.genre,
      },
      newName
    );

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  readAllRecettesWithIngredients,
  browse,
  read,
  // edit,
  add,
};
