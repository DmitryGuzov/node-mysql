//Vendors
import { connection } from "../../config/db";

//Models
import { UpdateHorseModel } from "./models/update.model";
import { RequestSearchHorseModel } from "../../core/models/management";
import { HorseModel } from "./models/horse.model";
//Entities

export async function create({ name, age }: any) {
  connection.query(
    `INSERT INTO users( name, age ) VALUES ('${name}', ${age} )`,
    function (err: any, results: any) {
      if (err) console.log(err);
      console.log(results);
    }
  );

  let users = await new Promise((res, rej) => {
    connection.query("SELECT * FROM users", function (err: any, results: any) {
      if (err) console.log(err);
      res(results);
    });
  });

  return { users };
}
export async function createOrder({ userId, orderName }: any) {
  console.log(userId, orderName);
  connection.query(
    `INSERT INTO orders( userid, ordername ) VALUES (${userId}, '${orderName}')`,
    function (err: any, results: any) {
      if (err) console.log(err);
      console.log(results);
    }
  );
  let orders = await new Promise((res, rej) => {
    connection.query("SELECT * FROM orders", function (err: any, results: any) {
      if (err) console.log(err);
      res(results);
    });
  });

  return { orders };
}
export async function getUserInfo(userId: number) {
  console.log(userId);

  let userInfo: any = await new Promise((res, rej) => {
    connection.query(
      ` 
    SELECT * 
    FROM users 
    WHERE users.id = ${userId}  `,
      function (err: any, results: any) {
        if (err) console.log(err);
        res(results[0]);
      }
    );
  });
  let orders = await new Promise((res, rej) => {
    connection.query(
      `SELECT   id, ordername, userid FROM orders where  orders.userid  = ${userId};`,
      function (err: any, results: any) {
        if (err) console.log(err);
        res(results);
      }
    );
  });
  return { ...userInfo, orders };
}
