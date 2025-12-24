import db from "../config/db.js";

//1. menampilkan data dari tabel
//sql ? SELECT * FROM users
export const getUsers = (req, res) => {
    db.query("SELECT * FROM users", (err, results )=> {
        //jika ada error
        if (err) res.status(500).json({ message: err });

        //jika berhasil
        res.json(results);
    });
};


//2. menyimpan data
//sql ? INSERT INTO users (name, email, password) values (?,?,?)
export const insertUser = (req, res) => {
    const {name, email, password} = req.body;

    db.query(
        "INSERT INTO users (name,email,password) VALUES (?,?,?)",
        [name, email, password],
        (err, results) => {
            //jika ada error
            if (err) res.status(500).json({message: err});

            //jika berhasil
            res.json({message: "Data Berhasil Disimpan"})
        }
    );
};

//3. menampilkan data berdasarkan id
//sql ? SELECT * FROM users WHERE id=?
export const showUser = (req, res) => {
    const { id } = req.params;

    db.query("SELECT * FROM users WHERE id=?", [id],(err, results) => {
       //jika ada error
            if (err) res.status(500).json({message: err});

        //jika tidak ditemukan
            if (results.lenght === 0){
                return res.status(400).json({message: "User Tidak ditemukan"});
            }
            

       //jika ditemukan
            res.json(results[0]);
    })
}

//4. update data berdasarkan id
// sql ? UPDATE users SET name=?, email=? WHERE=?
export const updateUser = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    db.query(
        "UPDATE users SET name=?, email=? WHERE id=?",
        [name, email, id],
        (err, resu) => {
            //jika ada error
            if (err) res.status(500).json({message: err });

            //jika berhasil
            res.json({message: "Data berhasil diupdate"});
        }
    );
};

//5. delete data berdasarkan id
// sql ? DELETE FROM users WHERE id=?
export const deleteUser = (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM users WHERE id=?", [id], (err, results) => {
        //jika error
        if (err) return res.status(500).json({ message: err });
        //jika berhasil
        res.json({ message: "Data berhasil dihapus" });
    });
};