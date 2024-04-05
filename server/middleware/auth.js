const jwt = require("jsonwebtoken");

function checkAuthentication(req, res, next) {
  /* 
        TODO: check logged status from req
    */

  //console.log(req.headers)
  let token = req.headers?.authorization.split(" ")[1];
  let user = null;

  try {
    user = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {}

  if (user) {
    req.user = user;
    next();
  } else {
    res.status(401).send({
      msg: "unauthenticated",
    });
  }  
}


module.exports = { checkAuthentication };
