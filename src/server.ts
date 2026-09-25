import mongoose from 'mongoose';
import app from './app.js';
import config from './config/index.js';

async function main() {
  try {
    await mongoose.connect(config.dbUrl as string);

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

main();
