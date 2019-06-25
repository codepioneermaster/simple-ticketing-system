import {Sequelize} from 'sequelize-typescript';
import * as config from './../config/config.json';

const env = process.env.NODE_ENV || 'development';

export const sequelize = new Sequelize(config[env]);
