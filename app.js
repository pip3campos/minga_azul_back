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

import indexRouter from './routes/index.js';

import { __dirname } from './utils.js';
import fileUpload from 'express-fileupload'

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(fileUpload())
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

export default app;
