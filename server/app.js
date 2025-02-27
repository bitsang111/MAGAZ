const express = require("express");
const removeHeaders = require("./middleware/removeHeaders");
const path = require("path");
const app = express();
const logger = require('morgan')

const cookieParser = require("cookie-parser");
const PORT = 3000;

app.use(removeHeaders)
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser())
app.use(logger('dev'))

const indexRouter = require('./routes/index.routes')

app.use("/api", indexRouter);

app.listen(PORT, () => {
  console.log(`Все курлычит на порту ${PORT}`);
});
