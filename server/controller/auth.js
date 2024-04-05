const bcrypt = require("bcrypt");
const Joi = require("joi");
const jwt = require('jsonwebtoken')

const User = require("../model/User");


const schema = Joi.object({
  name: Joi.string().required(),

  password: Joi.string()
    .required()
    .min(8)
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  //   password_confirmation: Joi.required().ref("password"),

  email: Joi.string().email().required(),
});

const signup = async (req, res, next) => {
  /* 1. take email password from request */
  /* 2. Save the data in mongodb */

  try {
    let { error } = schema.validate(req.body, {
      abortEarly: false,
      stripUnknown: false,
      allowUnknown: true,
    });

    console.log("errors", error?.details);

    if (error?.details) {
      res.status(400).send({
        errors: error?.details,
      });
      return;
    }

    let hashed = await bcrypt.hash(req.body.password, 10);
    console.log({ hashed });

    let user = await User.create({ ...req.body, password: hashed });

    user = user.toObject()
    delete user.password
    res.send(user);
  } catch (err) {
    next(err);
  }
};

const loginSchemValidation = Joi.object({
  password: Joi.string().required().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  email: Joi.string().email().required(),
});

const login = async (req, res, next) => {

  try {
    let { error } = loginSchemValidation.validate(req.body, {
      abortEarly: false,
      stripUnknown: false,
      allowUnknown: true,
    });

    console.log("errors", error?.details);

    if (error?.details) {
      res.status(400).send({
        errors: error?.details,
      });
      return;
    }
    /* 1. take password and email from req.body */
    /* 2. Check user exist or not */
    /* 3. If user check password */

    let user = await User.findOne({ email: req.body.email }).select(
      "+password"
    );

    if (user) {
      let matched = await bcrypt.compare(req.body.password, user.password);
      console.log(user)
      if (matched) {
        let userObj = user.toObject()
        delete userObj.password;

        let token = jwt.sign( userObj, process.env.JWT_SECRET);

        res.send({
          msg: "login successful",
          token,
          userObj
        });
        return;
      }
    }
    res.status(401).send({
      msg: "Invalid Credentials",
    });
  } catch (err) {
    next(err);
  }
};


module.exports = {
    signup, login
}