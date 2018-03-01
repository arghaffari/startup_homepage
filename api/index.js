import express from 'express';
import mainData from '../src/static/header.json';

const router = express.Router();
const headers = mainData.headers.reduce((obj, header)=>{
  obj[header.id] = header;
  return obj;
}, {});

router.get('/static/main', (req, res)=>{
  res.send({
    headers
  });
});

// router.get('/contests/:contestId', (req, res)=>{
//   let contest = contests[req.params.contestId];
//   contest.description = 'lorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem';
//   res.send(
//     contest
//   );
// });


export default router;