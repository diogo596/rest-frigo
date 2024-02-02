const AbstractManager = require("./AbstractManager");

class RecettesManager extends AbstractManager {
  constructor() {
    super({ table: "recettes" });
  }

  async create(recette, avatar) {
    const [result] = await this.database.query(
      `insert into ${this.table} (type, name, genre, photo) values (?, ?, ?, ?)`,
      [recette.type, recette.name, recette.genre, avatar]
    );
    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select id, type, name, genre, avatar from ${this.table} where id = ?`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(
      `select id, type, name, genre, avatar from ${this.table}`
    );

    return rows;
  }

  async readAllByRecetteId() {
    const [rows] = await this.database.query(
      `SELECT 
      r.id AS recette_id, r.type, r.name AS recette_name, r.genre, r.photo,
      i.name AS ingredient_name
  FROM 
      recettes r
  LEFT JOIN 
      compositions c ON r.id = c.recettes_id
  LEFT JOIN 
      ingredients i ON c.ingredients_id = i.id
  WHERE 
      r.name = '?';`
    );
    return rows;
  }
}

module.exports = RecettesManager;
