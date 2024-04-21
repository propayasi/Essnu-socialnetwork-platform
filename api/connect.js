import mysql from "mysql"

export const db = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:"social"
})

db.connect(err => {
  if (err) {
    console.error('Database connection error: ' + err.stack);
    return;
  }
  console.log('Connected to the database');
});