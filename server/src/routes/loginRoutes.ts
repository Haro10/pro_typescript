import {Router, Request, Response} from 'express';

const router = Router();

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

router.post('/login', (res: Request, req: Response) => {
  const { email, password } = res.body;

   req.send('You are logged');
})

export { router };