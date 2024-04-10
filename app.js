var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var easterBasket = require("./models/easterBasket");
var app = express();



require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);

var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});



  
  var indexRouter = require('./routes/index');
  var usersRouter = require('./routes/users');
  var EasterBasketRouter = require('./routes/easterbasket');
  var gridRouter = require('./routes/grid');
  var pickRouter = require('./routes/pick');
  var resourceRouter = require('./routes/resource');
  //var controlRouter = require('./controllers/easterBasket');



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/easterBasket', EasterBasketRouter);
app.use('/grid', gridRouter);
app.use('/pick', pickRouter);
app.use('/easterbasketSchema', easterBasket);
app.use('/resource', resourceRouter);
//app.use('/controllers', controlRouter)


// We can seed the collection if needed on

async function recreateDB(){
  // Delete everything
  await easterBasket.deleteMany();

  let eb1 = new
  easterBasket({color:"blue", cost:15.4, full:'true'});
  eb1.save().then(doc=>{
  console.log("First object saved")}
  ).catch(err=>{
  console.error(err)
});

let eb2 = new
easterBasket({color:"pink", cost:10, full:'false'});
eb2.save().then(doc=>{
  console.log("Second object saved")}
  ).catch(err=>{
  console.error(err)
  });
  
  let eb3 = new
  easterBasket({color:"green", cost:25, full:'true'});
  eb3.save().then(doc=>{
  console.log("Third object saved")}
  ).catch(err=>{
  console.error(err)
  });
  
}
let reseed = true;
  if (reseed) {recreateDB();}
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    next(createError(404));
  });
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;



