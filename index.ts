import express, { ErrorRequestHandler, RequestHandler } from 'express';
import { createList, listHandlers } from './handlers/postHandlers';
import asyncHandler from 'express-async-handler';
import { initDB } from './datastore';

(async () => {

    await initDB();
    const app = express();

    app.use(express.json());

    const reqMiddlewareHandler: RequestHandler = (req, res, next) => {
        console.log(req.method, req.path, '-Body', req.body);
        next();
    };

    app.use(reqMiddlewareHandler);

    app.get('/posts', asyncHandler(listHandlers));
    app.post('/posts', asyncHandler(createList));

    const errHandler: ErrorRequestHandler = (err, req, res, next) => {
        console.error('Caught Unexpected error', err);
        return res.status(500).send('OOPS, Unexpected error occurred , please try again');
    };

    app.use(errHandler);


    app.listen(3000);

})();