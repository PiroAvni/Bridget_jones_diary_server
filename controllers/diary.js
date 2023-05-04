const Diary = require("../models/diary");

// function to show all the diarys
async function index(req, res) {
  try {
    const diary = await Diary.getAll();
    res.status(200).jsonn(diary);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  index,
};
