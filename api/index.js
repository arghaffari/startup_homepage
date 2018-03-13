import express from 'express';
import mainData from '../src/static/header.json';

const router = express.Router();
const headers = mainData.headers.reduce((obj, header)=>{
  obj[header.id] = header;
  return obj;
}, {});
const landingPages = mainData.landingPages;

router.get('/static/main/headers', (req, res)=>{
  res.send({
    headers
  });
});

router.get('/static/main/landing-pages/:content', (req, res)=>{
  let param = req.params.content;
  let content = landingPages[param];
  res.send({
    content,
    headers
  });
});

// router.get('/static/main/:contestId', (req, res)=>{
//   let contest = contests[req.params.contestId];
//   contest.description = 'lorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem';
//   res.send(
//     contest
//   );
// });


export default router;