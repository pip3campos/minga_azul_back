import 'dotenv/config.js';
import './config/database.js'
import cors from 'cors'
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import ErrorHandler from './middlewares/error_handler.js';
import Not_Found from './middlewares/not_found.js';
import passportLocalMongoose from 'passport-local-mongoose';
import mongoose from 'mongoose';
import indexRouter from './routes/index.js';
import { __dirname } from './utils.js';

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//handler para rutas no encontradas
app.use(Not_Found)
app.use(ErrorHandler)

const Schema = mongoose.Schema;
const usuarioSchema = new Schema({
  email: String,
  password: String,
  googleId: String,
  secret: String
});

const usuario = mongoose.model("User", usuarioSchema);

usuarioSchema.plugin(passportLocalMongoose);
//usuarioSchema.plugin(findOrCreatePlugin);

export default app;
