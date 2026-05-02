import { Router } from 'express';
import gamesRouter from '../modules/games/games.routes.js';

const indexRouter = Router();

// Rutas de la API
indexRouter.use("/games", gamesRouter); 

export default indexRouter;