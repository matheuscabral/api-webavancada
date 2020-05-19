const joi = require('@hapi/joi');

const registerValidation = (data) => {
    const schema = joi.object({
<<<<<<< HEAD
      name: joi.string().min(6).required(),
      email: joi.string().min(6).required().email(),
      password: joi.string().min(6).required(),
    });
    return schema.validate(data);
};
=======
        name: joi.string().min(6).required(),
        email: joi.string().min(6).required().email(),
        password: joi.string().min(6).required()
    });
    return schema.validate(data);
}
>>>>>>> 6ed433d690b58ae4dbdc4310422afbe9eb9a5b9f

const loginValidation = (data) => {
    const schema = joi.object({
        email: joi.string().min(6).required().email(),
<<<<<<< HEAD
        password: joi.string().min(6).required(),
=======
        password: joi.string().min(6).required()
>>>>>>> 6ed433d690b58ae4dbdc4310422afbe9eb9a5b9f
    });
    return schema.validate(data);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;