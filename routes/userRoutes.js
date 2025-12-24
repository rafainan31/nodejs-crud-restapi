import express from "express";
import { getUsers, insertUser, showUser, updateUser,deleteUser } from "../controller/UserController.js";

const router = express.Router();

router.get("/", getUsers)
router.post("/", insertUser)
router.get("/:id", showUser)
router.put("/", updateUser)
router.delete("/:id", deleteUser)

export default router;