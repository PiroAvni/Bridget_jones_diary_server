const Diary = require("../models/diary");

// function to show all the diarys
async function index(req, res) {
  try {
    const diary = await Diary.getAll();
    res.status(200).json(diary);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
async function show(req, res) {
  try {
    const post_id = parseInt(req.params.id);
    const post = await Diary.getOneById(post_id);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

async function create(req, res) {
  try {
    const data = req.body;
    const newDiary = await Diary.create(data);
    res.status(201).json(newDiary);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
}

async function update(req, res) {
  try {
    const id = parseInt(req.params.id);
    const data = req.body;
    const post_id = await Diary.getOneById(id);
    const result = await Diary.update(data, id);
    res.status(200).json(result);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
}

async function destroy(req, res) {
  try {
    const id = parseInt(req.params.id);
    const snack = await Diary.getOneById(id);
    const result = await Diary.destroy(id);
    res.status(200).json(result);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
}

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};
