const passwordValidator = require("password-validator");

// Create a schema
var passwordSchema = new passwordValidator();

// Add properties to it
passwordSchema
.is().min(8)                                    // Minimum length 8
.is().max(100)                                  // Maximum length 100
.has().uppercase()                              // Must have uppercase letters
.has().lowercase()                              // Must have lowercase letters
.has().digits(2)                                // Must have at least 2 digits
.has().not().spaces()                           // Should not have spaces



module.exports = (req, res, next) => {
    if (!passwordSchema.validate(req.body.password)) {
        res.status(400).json({ message: `Le MDP doit faire 10 caractère au moins, avec une maj, une min et un chiffre au moins. Vos erreurs sont : ${passwordSchema.validate('req.body.password', {list: true})}`});
    } else {
        next();
    }
};
