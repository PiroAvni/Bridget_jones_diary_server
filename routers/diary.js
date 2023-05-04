const { Router } = require("express");

const diaryController = require("../controllers/diary");

const diaryRouter = Router();

diaryRouter.get("/", diaryController.index);
diaryRouter.get("/", diaryController.create);

diaryRouter.get("/:id", diaryController.show);
diaryRouter.get("/:id", diaryController.update);
diaryRouter.get("/:id", diaryController.destroy);

module.exports = diaryRouter;
