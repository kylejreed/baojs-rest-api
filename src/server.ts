import Bao from "baojs";
import { userController } from "./users";
import { authController } from "./auth";

const app = new Bao();
app.post("/login", authController.login);
app.post("/login", authController.register);

app.get("/users", userController.getAllUsers);
app.post("/users", userController.createUser);
app.get("/users/:id", userController.getUserById);

export default app;
