import * as dotenv from "dotenv";

dotenv.config();

export default {
  APP: process.env.APP || "dev",
  PORT: process.env.PORT || "3001",

  DB_DOCKER_HOST: process.env.DB_HOST || "postgres://postgres:admin@db:5432/",
  DB_LOCALHOST_HOST:
    process.env.DB_HOST || "postgres://postgres:admin@localhost:5432/",

  DB_HOST: process.env.DB_HOST || "localhost",
  DB_NAME: process.env.DB_NAME || "mydb",
  DB_PASSWORD: process.env.DB_PASSWORD || "qwerty123",
  DB_PORT: process.env.DB_PORT || "27017",
  DB_USER: process.env.DB_USER || "root",

  JWT_ENCRYPTION: process.env.JWT_ENCRYPTION || "jwt_key",
  JWT_EXPIRATION: process.env.JWT_EXPIRATION || "1h",
  SALT_ROUNDS: process.env.SALT_ROUNDS || 10,

  SOCKET_IO_CONNECTION: process.env.SOCKET_IO_CONNECTION || "connect",
  SOCKET_IO_DISCONNECTION: process.env.SOCKET_IO_DISCONNECTION || "disconnect",
  SERVER_HORSE_HEART_RATE:
    process.env.SERVER_HORSE_HEART_RATE || "Server/HorseHeartRate",
  CLIENT_HORSE_HEART_RATE:
    process.env.CLIENT_HORSE_HEART_RATE || "Client/HorseHeartRate",
  POSTGRES_PASSWORD: "admin",
};
