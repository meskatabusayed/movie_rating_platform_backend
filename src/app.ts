import express from 'express';
import { movieRoutes } from './modules/movies/movie.route.js';
import { UserRoutes } from './modules/users/user.route.js';

const app = express();

//parsers
app.use(express.json());


app.use("/api/v1/movies", movieRoutes);
app.use("/api/v1/users", UserRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});


export default app;
