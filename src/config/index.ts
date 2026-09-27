import dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.PORT || 5000,
  dbUrl: process.env.DB_URL,
  bryptSaltRounds: process.env.BRYPT_SALT_ROUNDS
};
