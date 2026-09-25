import type { TMovie } from "./movie.interface.js";
import { Movie } from "./movie.model.js";


const createMovieIntoDB = async (payload : TMovie) => {
    const result = await Movie.create(payload);
    return result;
}

const getAllMoviesFromDB = async () => {
    const result = await Movie.find({ isDeleted: false });
    return result;
}   


const getSingleMovieFromDB = async (movieId: string) => {
    const result = await Movie.findOne({ _id: movieId, isDeleted: false });
    return result;
}

const updateSingleMovieIntoDB = async (movieId: string, payload: Partial<TMovie>) => {
    const result = await Movie.findOneAndUpdate({ _id: movieId , isDeleted: false}, payload, { new: true });
    return result;
}  

const updateMultipleMoviesIntoDB = async (
  updates: {
    movieId: string;
    payload: Partial<TMovie>;
  }[]
) => {
  const operations = updates.map((item) => ({
    updateOne: {
      filter: {
        _id: item.movieId,
        isDeleted: false,
      },
      update: {
        $set: item.payload,
      },
    },
  }));

  const result = await Movie.bulkWrite(operations);

  return result;
};

const deleteSingleMovieFromDB = async (movieId: string) => {
    const result = await Movie.findOneAndUpdate({ _id: movieId, isDeleted: false }, { isDeleted: true }, { new: true });
    return result;
}   

export const MovieServices = {
    createMovieIntoDB,
    getAllMoviesFromDB,
    getSingleMovieFromDB,
    updateSingleMovieIntoDB,
    updateMultipleMoviesIntoDB,
    deleteSingleMovieFromDB,
};

