import { Router } from "./deps.ts";
import { getData, postData } from "./controller.ts";
const router = new Router();
router.get("/", getData);
router.post("/", postData);
export {router}