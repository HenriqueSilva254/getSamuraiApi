import { Router } from "express";
import userRouter from "./user.routes.js";
import Services from "./services.routes.js";

const router = Router()

router.use(userRouter);
router.use(Services)

export default router