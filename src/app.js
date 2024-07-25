'use strict';

import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { generateECKeys } from './utils/ellipticKeyGenerator.js';
import signRouter from './routes/v1/sign.js'
import config from './config/config.js';

const app = express();
const __filename = fileURLToPath(import.meta.url); // Get the resolved path to the file
const __dirname = path.dirname(__filename); // Get the name of the directory

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

await generateECKeys();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/v1', signRouter);

app.listen(config.listeningPort, () => {
    console.log('Server is running on port 3000');
});