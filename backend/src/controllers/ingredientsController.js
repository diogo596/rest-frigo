const tables = require("../tables");

const readAllIngredientsWithRecettes = async (req, res, next) => {
  try {
    const ingredients = await tables.ingredients.readAllByIngredientsId();

    res.json(ingredients);
  } catch (err) {
    next(err);
  }
};

const browse = async (req, res, next) => {
  try {
    const ingredients = await tables.ingredients.readAll();

    res.json(ingredients);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const ingredient = await tables.ingredients.read(req.params.id);

    if (ingredient == null) {
      res.sendStatus(404);
    } else {
      res.json(ingredient);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const ingredients = req.body;

  try {
    const insertId = await tables.ingredients.create(ingredients);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  readAllIngredientsWithRecettes,
  browse,
  read,
  // edit,
  add,
};
