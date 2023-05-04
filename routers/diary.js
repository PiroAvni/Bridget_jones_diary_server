const { Router } = require("express");

const diaryController = require("../controllers/diary");

const diaryRouter = Router();

diaryRouter.get("/", diaryController.index);
diaryRouter.post("/", diaryController.create);

diaryRouter.get("/:id", diaryController.show);
diaryRouter.patch("/:id", diaryController.update);
diaryRouter.delete("/:id", diaryController.destroy);

diaryRouter.post('/category?',diaryController.getCategory)

module.exports = diaryRouter;
