import {Router, Request, Response} from 'express';

const router = Router();

interface RequestWithBody extends Request {
    body: { [key:string]: string | undefined };
}

router.get('/', (req: Request, res: Response) => {
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

router.post('/login', (res: RequestWithBody, req: Response) => {
  const { email, password } = res.body;
   if (email && password) {
    req.send('You are logged');
   } else {
    req.send('your password or email is not valid');
   }
})

export { router };