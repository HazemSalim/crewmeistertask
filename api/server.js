import express from "express";
import cors from "cors";

import absenceRoute from "./routes/absence.js";
import icalRoute from "./routes/ical.js";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send(`Server running on port ${PORT}`);
});

app.use("/absence", absenceRoute);

app.use("/ical", icalRoute);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
