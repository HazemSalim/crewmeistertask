import express from 'express';
import cors from 'cors'
import absenceRoute from './routes/absence.js'

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());

app.use('/absence', absenceRoute);

app.listen(PORT, () =>
    console.log(`Server listening on port ${PORT}`),
);