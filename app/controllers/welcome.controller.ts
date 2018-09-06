import { Request, Response, Router } from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' });
});

export const WelcomeController: Router = router;
