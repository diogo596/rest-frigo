const AbstractManager = require("./AbstractManager");

class IngredientsManager extends AbstractManager {
  constructor() {
    super({ table: "ingredients" });
  }

  async create(ingredients) {
    const [result] = await this.database.query(
      `insert into ${this.table} (name, type) values (?, ?)`,
      [ingredients.name, ingredients.type]
    );
    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select id, name, type from ${this.table} where id = ?`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(
      `select id, name, type from ${this.table}`
    );
    return rows;
  }

  async readAllByIngredientsId() {
    const [rows] = await this.database.query(
      `SELECT r.id AS recette_id, r.type, r.name AS recette_name, r.genre, r.photo,
      i.id AS ingredient_id, i.name AS ingredient_name, i.type AS ingredient_type
FROM recettes r
JOIN compositions c ON r.id = c.recettes_id
JOIN ingredients i ON c.ingredients_id = i.id
WHERE i.name IN (?, ?, ?);`
    );

    return rows;
  }
}

module.exports = IngredientsManager;
