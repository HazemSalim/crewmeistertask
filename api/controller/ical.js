import { absences, members } from "../api.js";
import fs from "fs";
import ics from "ics";

export const downloadIcalFile = async (req, res) => {
  const { id } = req.params;

  try {
    let absenceData = await absences();

    let absenceArr = absenceData.filter((e) => e.id === parseInt(id));
    if (absenceArr.length === 0) {
      res.send({ error: "Absence id not found" });
    }

    const memberData = await members();
    const memberMap = {};
    memberData.forEach((member) => {
      memberMap[member.userId] = member;
    });

    let absence = absenceArr[0];
    absence.memberData = memberMap[absence.userId];

    const startDate = new Date(absence.startDate);

    const endDate = new Date(absence.endDate);

    const diffTime = Math.abs(endDate - startDate);

    const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const strDate = new Date(absence.startDate);

    ics.createEvent(
      {
        title: `${absence.memberData.name} wants leave`,
        description: `${absence.memberData.name} wants leave due to ${absence.type}`,
        status: "CONFIRMED",
        busyStatus: "BUSY",
        start: [
          strDate.getFullYear(),
          strDate.getMonth() + 1,
          strDate.getDate(),
          strDate.getHours(),
          strDate.getMinutes(),
        ],
        duration: { days: days ? days : 1 },
      },
      (error, value) => {
        if (error) {
          return res.status(404).json({ error });
        }
        var file = "event.ics";

        fs.writeFile(file, value, function (err) {
          if (err) {
            return res.status(404).json({ error: err });
          }

          res.download(file);
        });
      }
    );
  } catch (error) {
    return res.status(404).json({ error });
  }
};
