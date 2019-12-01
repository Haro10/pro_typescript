import express, {Request, Response} from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

// const app = express();

// app.use(bodyParser.urlencoded({ extended:true }));
// app.use(cookieSession({keys:['anything']}));
// app.use(router);

// app.listen(3000, () => {
//     console.log('listening on port 3000');
// })

//Don't write some stupid code like just because you want to use typescript class

class Server{
    app: express.Express = express();
    
    constructor(){
        this.app.use(bodyParser.urlencoded({ extended:true }));
        this.app.use(cookieSession({keys:['anything']}));
        this.app.use(router);
    }

    start(){
        this.app.listen(3000, () => {
            console.log('listening on port 3000');
        })
    }
}

new Server().start();