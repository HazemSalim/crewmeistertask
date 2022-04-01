import express from 'express';
import { getAbsences } from '../controller/absence.js'

const router = express.Router();

router.get('/get-absences', getAbsences);

export default router;