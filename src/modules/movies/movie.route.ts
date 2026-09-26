import express from 'express';
import { MovieControllers } from './movie.controller.js';
const router = express.Router();

router.post('/create-movie', MovieControllers.createMovie);
router.get('/', MovieControllers.getAllMovies);
router.get('/:slug', MovieControllers.getSingleMovie);
router.patch('/:movieId', MovieControllers.updateSingleMovie);
router.patch(
  "/bulk-update",
  MovieControllers.updateMultipleMovies
);

router.delete('/:movieId', MovieControllers.deleteSingleMovie);

export const movieRoutes = router;