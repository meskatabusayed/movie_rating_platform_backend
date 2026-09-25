import express from 'express';
import { MovieControllers } from './movie.controller.js';
const router = express.Router();

router.post('/create-movie', MovieControllers.createMovie);
router.get('/movies', MovieControllers.getAllMovies);
router.get('/movies/:movieId', MovieControllers.getSingleMovie);
router.patch('/movies/:movieId', MovieControllers.updateSingleMovie);
router.patch(
  "/bulk-update",
  MovieControllers.updateMultipleMovies
);

router.delete('/movies/:movieId', MovieControllers.deleteSingleMovie);

export const movieRoutes = router;