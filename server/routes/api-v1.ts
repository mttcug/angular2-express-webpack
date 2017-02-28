"use strict";

import * as express from 'express';

const v1Router = express.Router();

v1Router.get('/version', (req, res, next) => {
            res.json({
                message: 'hooray! welcome to our api!',
                version: '1.0.0'
            });
        });


export {v1Router};        