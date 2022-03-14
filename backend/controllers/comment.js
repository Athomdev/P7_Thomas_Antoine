const db = require("../db/db");


// CRUD Commentaires

//Créer un commentaire
 exports.createComment = (req, res, next) => {
   const { text, postid } =
     req.body;
   const sql = `INSERT INTO comment (id, postid, userid, text, hour) VALUES (NULL, ${postid}, ${req.auth.userid}, "${text}", NULL)`;
   db.query(sql, (err, result) => {
     if (err) {
       res.status(404).json({ err });
       console.log(err);
       throw err;
     }
     res.status(201).json({ message: "commentaire créé", comment: result[0] });
   });
 };


//Supprimer un commentaire

exports.deleteOneComment = (req, res) => {
  const commentid = req.params.id;
  const sql = `DELETE FROM comment WHERE comment.id = ${commentid}`;
  db.query(sql, (err, result) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
    res.status(200).json(result);
  });
};


// Récupérer un commentaire

exports.getOneComment = (req, res) => {
  const commentId = req.params.id;
  const sql = `SELECT * FROM comment WHERE comment .id = ${commentId}`;
  db.query(sql, (err, result) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
    res.status(200).json(result);
  });
};