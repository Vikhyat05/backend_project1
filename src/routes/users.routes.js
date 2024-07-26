import { Router } from "express";
import { registerUser } from "../controllers/users.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { loginUser } from "../controllers/users.controller.js";
import { logoutUser } from "../controllers/users.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { refreshAccessToken } from "../controllers/users.controller.js";

const router = Router();

router.route("/register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
)

router.route("/login").post(loginUser)

// secured Routes 
router.route("/logout").post(verifyJWT,logoutUser)
router.route("/refresh-token").post(refreshAccessToken)

export default router

