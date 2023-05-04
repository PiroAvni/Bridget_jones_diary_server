const { Router } = require("express");

const diaryController = require("../controllers/diary");

const diaryRouter = Router();

diaryRouter.get("/diary", diaryController.index);

module.exports = diaryRouter;
