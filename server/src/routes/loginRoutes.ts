import {Router, Request, Response} from 'express';

const router = Router();

interface RequestWithBody extends Request {
    body: { [key:string]: string | undefined };
}

router.get('/', (req: Request, res: Response) => {
    if (req.session && req.session.logged) {
        res.send(`
        <div>
        <h1>
            you are logged in!
        </h1>
        <a href="/logout">Logout</a>
        </div>
        `);
    } else {
        res.send(`
        <div>
        <h1> you are not logged!</h1>
        <a href="/login">Login</a>
        </div>
        `)
    }
    res.send('hi there!');
})

router.get('/login', (req: Request, res: Response) => {
    res.send(`
        <form METHOD="POST">
        <div>
            <label>Email :</label>
            <input name='email'></input>
        </div>
        <div>
            <label>Password :</label>
            <input name='password' type='password'></input>
        </div>
        <button>submit</button>
        </form>
    `);
})

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;
  
   if (email && password) {
    req.session = {logged: true};
    res.redirect('/');
   } else {
    res.redirect('/');
   }
})

router.get('/logout', (req: RequestWithBody, res: Response) => {
    req.session = {logged: undefined};
    res.redirect('/');
})

export { router };