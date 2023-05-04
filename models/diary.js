const { post } = require("../app");
const db = require("../database/connect");

class Diary {
  constructor({ post_id, title, content, created_at }) {
    this.post_id = post_id;
    this.title = title;
    this.content = content;
    this.created_at = created_at;
  }

  static async getAll() {
    const response = await db.query("SELECT * FROM post ORDER BY created_at");
    if (response.rows.length === 0) {
      throw new Error("No diary posts available");
    }
    return response.rows.map((p) => new Diary(p));
  }
}
