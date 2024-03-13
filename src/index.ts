import express from 'express';
import { configurations } from './config/Configuration';
import Server from '../src/Server';

const server = new Server(configurations);
server.bootstrap();
server.run();
