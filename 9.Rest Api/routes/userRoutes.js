import express from "express";
import {
  getAllUserController,
  getSingleUserController,
  createUserController,
  editUserController,
  deleteUserController,
} from "../controllers/userController";

const router = express.Router();

router.get("/", getAllUserController);
router.get("/:id", getSingleUserController);
router.post("/", createUserController);
router.patch("/:id", editUserController);
router.delete("/:id", deleteUserController);

export const userRoutes = (app) => {
  app.use("/user", router);
};
