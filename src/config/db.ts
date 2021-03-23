import CONFIG from "./config";

const mysql = require("mysql2");

export const connection = mysql.createConnection({
  host: CONFIG.DB_HOST,
  user: CONFIG.DB_USER,
  database: CONFIG.DB_NAME,
  password: CONFIG.DB_PASSWORD,
});

export default (async () => {
  try {
    connection.connect(function (err: any) {
      if (err) {
        return console.error("Ошибка: " + err.message);
      } else {
        console.log("Подключение к серверу MySQL успешно установлено");
        connection.query(
          "CREATE DATABASE IF NOT EXISTS mydb",
          function (err: any, result: any) {
            if (err) throw err;
            console.log("Database mydb created");
          }
        );
        connection.query(
          `CREATE TABLE IF NOT EXISTS users(
            id int primary key auto_increment,
            name varchar(255) not null,
            age int not null
          )`,
          function (err: any, result: any) {
            if (err) throw err;
            console.log("Table users created");
          }
        );
        connection.query(
          `CREATE TABLE IF NOT EXISTS orders(
            id int primary key auto_increment,
            userId int not null,
            orderName varchar(255) not null
          )`,
          function (err: any, result: any) {
            if (err) throw err;
            console.log("Table orders created");
          }
        );
      }
    });
  } catch (e) {
    console.log(e);
    console.log("DB connection bad");
    // закрытие подключения
    connection.end(function (err: any) {
      if (err) {
        return console.log("Ошибка: " + err.message);
      }
      console.log("Подключение закрыто");
    });
    process.exit();
  }
})();
