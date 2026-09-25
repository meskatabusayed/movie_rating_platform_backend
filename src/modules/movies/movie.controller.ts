import type { Request, Response } from "express";
import { MovieServices } from "./movie.service.js";

const createMovie = async (req: Request, res: Response) => {
  const movieData = req.body;
  const result = await MovieServices.createMovieIntoDB(movieData);

  res.json({
    success: true,
    message: "Movie is created successfully !",
    data: result,
  });
};


const getAllMovies = async (req: Request, res: Response) => {
  const result = await MovieServices.getAllMoviesFromDB();

  res.json({
    success: true,
    message: "Movies fetched successfully !",
    data: result,
  });
};

const getSingleMovie = async (req: Request, res: Response) => {
  const { movieId } = req.params;
  const result = await MovieServices.getSingleMovieFromDB(movieId as string);     

  res.json({
    success: true,
    message: "Movie fetched successfully !",
    data: result,
  });
};

const updateSingleMovie = async (req: Request, res: Response) => {
  const { movieId } = req.params;
  const updateData = req.body;
  const result = await MovieServices.updateSingleMovieIntoDB(movieId as string, updateData);

  res.json({
    success: true,
    message: "Movie updated successfully !",
    data: result,
  });
};


const updateMultipleMovies = async (req: Request, res: Response) => {
  try {
    const { updates } = req.body;

    if (!Array.isArray(updates) || updates.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Updates must be a non-empty array",
      });
    }

    const result = await MovieServices.updateMultipleMoviesIntoDB(updates);

    res.status(200).json({
      success: true,
      message: "Movies updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update movies",
      error,
    });
  }
};

const deleteSingleMovie = async (req: Request, res: Response) => {
  const { movieId } = req.params;
  const result = await MovieServices.deleteSingleMovieFromDB(movieId as string);            

  res.json({
    success: true,
    message: "Movie deleted successfully !",
    data: result,
  });
};

export const MovieControllers = {
  createMovie,
  getAllMovies,
  getSingleMovie,
  updateSingleMovie,
  updateMultipleMovies,
  deleteSingleMovie,
};
