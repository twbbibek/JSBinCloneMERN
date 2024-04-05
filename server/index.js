const express = require("express");
const cors = require('cors')
const fileUpload = require("express-fileupload");

const auth_routes = require("./routes/auth");
const {
  handleResourceNotFound,
  handleServerError,
} = require("./middleware/error");

require("./config/database");
require("dotenv").config();

const app = express();
app.use(express.json()); // global middleware -> runs for every api routes
app.use(fileUpload()); // when data sent in form-daata -> sets up req.body
app.use(cors())


app.use((req, res, next) => {
  function changeRequest(field) {
    let temp = {};

    if(req[field]) {

      let temp_arr = Object.entries(req[field]);
  
      temp_arr.forEach((el) => {
        if (el[0].endsWith("[]")) {
          temp[el[0].slice(0, -2)] = Array.isArray(el[1] ? el[1] : [el[1]]);
        } else {
          temp[el[0]] = el[1];
        }
      });
    }


    req[field] = temp;
  }

  changeRequest('body')
  changeRequest('files')

  next()
});

app.use(express.static("uploads"));

app.post('/python', (req, res) => {
  console.log(req.body)
  res.json({message: 'success'})
})
app.use("/api", auth_routes);


app.use(handleResourceNotFound);
app.use(handleServerError);

app.listen(3000, () => {
  console.log("Server Started");
});
