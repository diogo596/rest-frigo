const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const composition = await tables.composition.readAll();

    res.json(composition);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const composition = await tables.composition.read(req.params.id);

    if (composition == null) {
      res.sendStatus(404);
    } else {
      res.json(composition);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const composition = req.body;

  try {
    const insertId = await tables.composition.create(composition);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  // edit,
  add,
  // destroy,
};
