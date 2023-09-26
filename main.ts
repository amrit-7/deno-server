import { Application } from "./deps.ts";
import { router } from "./routes.ts";
const app = new Application();
app.use(router.allowedMethods());
app.use(router.routes());
console.log("Deno x Oak server at 3030");
await app.listen({ port: 3030 });
