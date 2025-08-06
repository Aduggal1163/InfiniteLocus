import express from "express";
import { createEvent, getAllEvents, getMyOrganizedEvents } from "../Controllers/Event.Controller.js";
import {requireSignIn} from '../MIddlewares/Auth.Midleware.js'
const router = express.Router();

router.post("/create",requireSignIn, createEvent);
router.get("/allevents",requireSignIn, getAllEvents);
router.get("/myorganised/:organizerId",requireSignIn, getMyOrganizedEvents)

export default router;
