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

  static async getOneById(id) {
    const response = await db.query("SELECT * from post WHERE post_id = $1", [
      id,
    ]);
    if (response.rows.length != 1) {
      throw new Error("Unable to locate the post id");
    }
    return new Diary(response.rows[0]);
  }

  static async create(data) {
    const { title, content } = data;
    const response = await db.quert(
      "INSERT INTO post (title, content) VALUES( $1, $2)",
      [title, content]
    );
    const postId = response.rows[0].post_id;
    const newDiary = await Snack.getOneById([postId]);

    return newDiary;
  }

  static async update(content, id) {
    const response = await db.query(
      "UPDATE post SET content =  $1 WHERE snack_id = $2;",
      [content, id]
    );
  }

  static async destroy(id) {
    const response = await db.query("DELETE FROM post WHERE post_id = $1 ;", [
      id,
    ]);
    return "The record has been deleted";
  }
}

module.exports = Diary;
