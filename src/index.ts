import express, {Express, RequestHandler} from "express";
import {ApplicationRequestHandler} from "express-serve-static-core";

const app: Express = express();
const port: number = 8080; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

app.get('/randomChar', async (req, res) => {

    res.send('');
});

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.info( `server started at http://localhost:${ port }` );
} );
