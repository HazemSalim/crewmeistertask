import express from "express";
import { downloadIcalFile } from "../controller/ical.js";

const router = express.Router();

router.get("/:id", downloadIcalFile);

export default router;
