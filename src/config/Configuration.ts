import {config } from 'dotenv';
import { ConfigInterface } from './ConfigInterface';

config();
const { version } = require('../../package.json');

export const configurations: ConfigInterface = Object.freeze({
    corsOrigin: process.env.CORS_ORIGIN || '*',
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    mongoUri : process.env.MONGO_URL
}) as ConfigInterface;