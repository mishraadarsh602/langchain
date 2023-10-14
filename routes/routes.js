import express from "express";
const router = express.Router();
import streamCon from "../stream.js"
import memoryCon from "../memory.js";
import agentCon from "../agent.js";
import templateCon from "../template.js";

router.post("/stream", streamCon);
router.post("/memory", memoryCon);
router.post("/agent", agentCon);
router.post("/template", templateCon);

export default router;
