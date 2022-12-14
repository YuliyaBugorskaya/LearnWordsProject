import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const initState = { path: req.originalUrl };
  res.render('Layout', initState);
});

router.get('/myScore', (req, res) => {
  const { user } = req.session;
  console.log(user);
  const initState = { user };
  res.render('Layout', initState);
});

router.get('/newForm', (req, res) => {
  const initState = { };
  res.render('Layout', initState);
});
router.get('/reg', (req, res) => {
  const initState = { path: req.originalUrl };
  res.render('Layout', initState);
});
router.get('/avt', (req, res) => {
  const initState = { path: req.originalUrl };
  res.render('Layout', initState);
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.redirect('/');
});

export default router;
