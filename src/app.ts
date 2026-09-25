import express from 'express';
import { movieRoutes } from './modules/movies/movie.route.js';

const app = express();

//parsers
app.use(express.json());


app.use("/api/v1", movieRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});


export default app;
