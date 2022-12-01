import { Router } from "express";
import AcronmyController from "../controller/acronmyController";
import DataChecker from "../middlewares/dataChecker";
import Validator from "../middlewares/validation";

const app = Router();
app.post(
  "/add",

  Validator.newAcronmyRules(),
  Validator.validateInput,
  Validator.validateInput,
  DataChecker.validateName,

  AcronmyController.createAcronmy
);
app.get("/viewAll", AcronmyController.getAll);
app.get("/:id", AcronmyController.getOneById);
app.patch("/:id", AcronmyController.updateAcronmy);
app.delete("/:id", AcronmyController.deleteAcronmy);

export default app;
