import express      from 'express';
import controllers  from './controllers/index.js';

const router = express.Router();
const checkSession = controllers.sessions.verify;

router.get('/', (req, res) => res.send('ok'));

router.post('/sessions', controllers.sessions.create);

router.get('/metafields', checkSession, controllers.metafields.get);
router.put('/metafields', checkSession, controllers.metafields.update);
router.post('/metafields', checkSession, controllers.metafields.create);

export default router;
