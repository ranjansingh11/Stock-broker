import { ConfigInterface } from "./config/ConfigInterface";
import * as compress from 'compression';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as express from 'express';
import Database from '../src/database/Database';
import router from './router';
import ErrorHandler from './modules/libs/response-handler/ErrorHandler';

import * as path from 'path';
import * as methodOverride from 'method-override';

export default class Server {
    private app: express.Express;

    constructor(private configurations) {
        this.app = express();
    }

    get application() {
        return this.app;
    }

    public bootstrap() {
        this.initCompress();
        this.initCookieParser();
        this.initCors();
        this.initJsonParser();
        this.initMethodOverride();
        this.setupRoutes();
        return this.app;
    }

    /**
   * This will Setup all the routes in the system
   *
   * @returns -Instance of Current Object
   * @memberof Server
   */
    public setupRoutes() {
        const { apiPrefix } = this.configurations;

        // mount all routes on /api path
        this.app.use('/api', router);

        // catch 404 and forward to error handler
        // this.app.use(notFoundRoute);

        // error handler, send stacktrace only during development
        this.app.use(ErrorHandler());
    }

    /**
   * This will run the server at specified port after opening up of Database
   *
   * @returns -Instance of Current Object
   */
    public async run() {
        // open Database & listen on port config.port
        const {
            port, mongoUri, env,
        } = this.configurations;
        try {
            const client = await Database.open(mongoUri);
            console.log("Client info", client);
            // await ConstantsSeeder.seed();
            this.app.listen(port);
            // eslint-disable-next-line no-console
            console.log(`|| App is running at port ${port} in ${env} mode ||`);
        } catch (e) {
            return e;
        }
        return this;
    }

    /**
   *
   * @returns Promise
   *
   */

    /**
   * Compression of the output
   */
    private initCompress() {
        this.app.use(compress());
    }

    /**
   * Parse Cookie header and populate req.cookies with an object keyed by the cookie names
   */
    private initCookieParser() {
        this.app.use(cookieParser());
    }

    /**
   *
   * Lets you to enable cors
   */
    private initCors() {
        this.app.use(
            cors({
                optionsSuccessStatus: 200,
                origin: this.configurations.corsOrigin,
            }),
        );
    }

    /**
   *  - Parses urlencoded bodies & JSON
   */
    private initJsonParser() {
        this.app.use(express.json({ limit: '200mb' }));
        this.app.use(express.urlencoded({ extended: true, limit: '200mb' }));
    }

    /**
   *
   * Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
   */
    private initMethodOverride() {
        this.app.use(methodOverride());
    }

}