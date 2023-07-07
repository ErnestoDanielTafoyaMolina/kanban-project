// Importa el objeto Router de Express para crear el enrutador.
import { Router } from "express";
//Estas funciones se encargan de manejar las diferentes acciones relacionadas con la autenticación.
import { handleLogin, handleRegister, logout, profile } from "../controllers/auth.controllers";
// Este middleware se utiliza para proteger las rutas y verificar la autenticación del usuario.
import { authRequire } from "../middlewares/validateToken";

//Crea un nuevo enrutador utilizando el objeto Router de Express.
const router = Router();

//Define una ruta POST "/login" que llama a la función controladora handleLogin cuando se accede a ella. Esta ruta se utiliza para iniciar sesión en la aplicación.
router.post("/login",handleLogin);
//Esta ruta se utiliza para registrar un nuevo usuario en la aplicación.
router.post("/register",handleRegister);
//Esta ruta se utiliza para cerrar sesión en la aplicación.
router.post("/logout",logout);
//Se utiliza para obtener el perfil del usuario autenticado.
router.get("/profile",authRequire,profile);

//Exporta el enrutador para que pueda ser utilizado en otros archivos.
export default router;