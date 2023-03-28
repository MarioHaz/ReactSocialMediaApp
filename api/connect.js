import mysql from "mysql";

export const db = mysql.createPool({
  
  host:"localhost",
  user:"root",
  password:"Maestre11",
  database:"social"
})

