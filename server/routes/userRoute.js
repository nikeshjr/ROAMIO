import express from "express";
import upload from "./multerConfig.js"; // path to multer config
import { create, getAllPlaces, getbystate, getbystateanddistrict, } from "../controller/userControler.js"; // adjust path
const router = express.Router();

router.post("/create", upload.single("image"), create);
router.get("/places",getAllPlaces);
router.get("/places/:State",getbystate);
router.get("/places/:State/:District",getbystateanddistrict)


export default router;
