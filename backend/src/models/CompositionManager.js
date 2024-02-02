const AbstractManager = require("./AbstractManager");

class CompositionManager extends AbstractManager {
  constructor() {
    super({ table: "composition" });
  }

  async create(composition) {
    const [result] = await this.database.query(
      `insert into ${this.table} (ingredients_FK, recettes_FK) values (?, ?)`,
      [composition.ingredient_FK, composition.recettes_FK]
    );
    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select id, ingredients_FK, recettes_FK from ${this.table} where id = ?`,
      [id]
    );

    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(
      `select id, ingredients_FK, recettes_FK from ${this.table}`
    );

    return rows;
  }
}

module.exports = CompositionManager;
