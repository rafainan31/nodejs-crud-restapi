import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

//perintah koneksi
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

//Jalankan koneksi databasenya
db.connect((err) => {
    //jika ada error
    if (err) {
        console.error("Error Koneksi Dtabase", err);
        return;
    }

    //Jika berhasil
    console.log("MySQL Berhasil Connect");
});

export default db;