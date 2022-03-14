const db = require('../db/db')
const bcrypt = require('bcrypt');

// const User = require('../models/User');
const jwt = require('jsonwebtoken');
// importation de crypto js pour chiffrer le mail
const cryptojs = require("crypto-js");


// Version fonctionnelle mais avec mail non crypté:
exports.signup = async (req, res, next) => {
console.log(req.body);
 try {
    const { password: password } = req.body;

    // ====== Password encryption =========
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);

    const user = {
      ...req.body,
      password: encryptedPassword,
    };
    const sql = "INSERT INTO user SET ?";
    db.query(sql, user, (err, result) => {
      if (!result) {
        res.status(200).json({ message: "Email déjà enregistré" });
      } else {
        res.status(201).json({ message: "Utilisateur créé !" });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(200).json({ message: "Enregistrement échoué", err });
  }
};




  // MODELE DE REQUETE DB

  // db.query('SELECT * FROM user', function(err, results){
  //   if(err){
  //     console.log(err);
  //   }
  //   console.log(results);
  // })


  // REQUETE INSERT DB USER (fait avec Clément)
  //   db.query('INSERT INTO user(mail, password, pseudo) VALUES(?,?,?)',["mail1", "motdepasse1", "pseudo1"], function(err, results){
  //   if(err){
  //     console.log(err); 
  //   } 
  //   console.log("résultats :");
  //   console.log(results);
  // })


  //   };


// exports.signup = (req, res, next) => {
//   // crypter l'email avant envoi dans bdd
// const emailCryptoJs = cryptojs.HmacSHA512(req.body.email, "SECRET_CRYPTOJS_TOKEN").toString(cryptojs.enc.Base64);
// console.log("controler contenu email");
// console.log(emailCryptoJs);
//     bcrypt.hash(req.body.password, 10)
//       .then(hash => {
//         const user = new User({
//           email: emailCryptoJs,
//           password: hash
//         });
//         user.save()
//           .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
//           .catch(error => res.status(400).json({ error }));
//       })
//       .catch(error => res.status(500).json({ error }));
//   };

  

    exports.login = async (req, res, next) => {
      
      db.query("SELECT * FROM user WHERE mail = ?", [req.body.mail], function(err, result){
          if(err || !result.length){
            return res.status(404).json({ message : "identifiants invalides"})
          }
          const user = result[0]
          bcrypt
            .compare(req.body.password, user.password)
            .then((valid) => {
              if (!valid) {
                return res
                  .status(401)
                  .json({ message: "identifiants invalides" });
              }
              res.status(200).json({
                userId: user._id,
                token: jwt.sign({ userId: user.id }, "RANDOM_TOKEN_SECRET", {
                  expiresIn: "24h",
                }),
              });
            })
            .catch((error) => res.status(500).json({ error }));

      })


    // Version mongodb
    // User.findOne({ email: req.body.email })
    //   .then(user => {
    //     if (!user) {
    //       return res.status(401).json({ error: 'Utilisateur non trouvé !' });
    //     }
    //     bcrypt.compare(req.body.password, user.password)
    //       .then(valid => {
    //         if (!valid) {
    //           return res.status(401).json({ error: 'Mot de passe incorrect !' });
    //         }
    //         res.status(200).json({
    //           userId: user._id,
    //           token: jwt.sign(
    //             { userId: user._id },
    //             'RANDOM_TOKEN_SECRET',
    //             { expiresIn: '24h' }
    //           )
    //         });
    //       })
    //       .catch(error => res.status(500).json({ error }));
    //   })
    //   .catch(error => res.status(500).json({ error }));
  };