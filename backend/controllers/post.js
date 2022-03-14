const db = require("../db/db");

exports.createPost = (req, res, next) => {
  const data = {...req.body, userid: req.auth.userid}
  const { text, imageurl } = req.body;

  db.query("INSERT INTO post SET ?", [data], function(err, result){
      if (err) {
        console.log(err);
        return res.status(400).json({ message: "impossible de créer le post" });
      }
      return res.status(201).json({message : "post créé", post : result[0]})

  });

};

exports.getOnePost = (req, res, next) => {
   const { id: post_id } = req.params
  const sql = `SELECT * FROM post WHERE id = ${post_id}`;
  db.query(sql, (err, result) => {
    if (err) {
      // console.log(err);
      res.status(404).json({ message: "impossible de récupérer le post" });
      throw err;
    }
    res.status(200).json(result);
  });
};

exports.modifySauce = (req, res, next) => {

};


exports.deleteOnePost = (req, res, next) => {

  const { id: post_id } = req.params
  const sql = `DELETE FROM post WHERE id = ${post_id}`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(404).json({ err });
      throw err;
    }
    res.status(200).json(result);
  });
  // Sauce.deleteOne({_id: req.params.id}).then(
  //   () => {
  //     res.status(200).json({
  //       message: 'Deleted!'
  //     });
  //   }
  // ).catch(
  //   (error) => {
  //     res.status(400).json({
  //       error: error
  //     });
  //   }
  // );
};

exports.getAllPost = (req, res, next) => {

  db.query("SELECT * FROM post", function(err, results){
      if (err) {
        return res.status(404).json({ message: "erreur dans la récupération des posts" });
      }
      return res.status(200).json({message : "posts récupérés", posts: results})
  })
  // Sauce.find().then(
  //   (sauces) => {
  //     res.status(200).json(sauces);
  //   }
  // ).catch(
  //   (error) => {
  //     res.status(400).json({
  //       error: error
  //     });
  //   }
  // );
};

exports.likeDislikeSauce = (req, res, next) => {
  // let like = req.body.like
  // let userId = req.body.userId
  // let sauceId = req.params.id
  // switch (like) {
  //   case 1 :
  //       Sauce.updateOne({ _id: sauceId }, { $push: { usersLiked: userId }, $inc: { likes: +1 }})
  //         .then(() => res.status(200).json({ message: `J'aime` }))
  //         .catch((error) => res.status(400).json({ error }))
  //     break;
  //   case 0 :
  //       Sauce.findOne({ _id: sauceId })
  //          .then((sauce) => {
  //           if (sauce.usersLiked.includes(userId)) {
  //             Sauce.updateOne({ _id: sauceId }, { $pull: { usersLiked: userId }, $inc: { likes: -1 }})
  //               .then(() => res.status(200).json({ message: `Neutre` }))
  //               .catch((error) => res.status(400).json({ error }))
  //           }
  //           if (sauce.usersDisliked.includes(userId)) {
  //             Sauce.updateOne({ _id: sauceId }, { $pull: { usersDisliked: userId }, $inc: { dislikes: -1 }})
  //               .then(() => res.status(200).json({ message: `Neutre` }))
  //               .catch((error) => res.status(400).json({ error }))
  //           }
  //         })
  //         .catch((error) => res.status(404).json({ error }))
  //     break;
  //   case -1 :
  //       Sauce.updateOne({ _id: sauceId }, { $push: { usersDisliked: userId }, $inc: { dislikes: +1 }})
  //         .then(() => { res.status(200).json({ message: `Je n'aime pas` }) })
  //         .catch((error) => res.status(400).json({ error }))
  //     break;
  //     default:
  //       console.log(error);
  // }
};
