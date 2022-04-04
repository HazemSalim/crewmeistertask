import { absences, members } from "../api.js";

export const getAbsences = async (req, res) => {
  const {
    limit = 10,
    page = 1,
    status = "",
    startDate = null,
    endDate = null,
  } = req.query;

  let absenceData = await absences();

  const memberData = await members();
  const memberMap = {};
  memberData.forEach((member) => {
    memberMap[member.userId] = member;
  });

  absenceData = absenceData.map((user) => {
    let status = "Requested";
    if (user.confirmedAt) {
      status = "Confirmed";
    } else if (user.rejectedAt) {
      status = "Rejected";
    }
    return { ...user, memberDetails: memberMap[user.userId], status };
  });

  if (status !== "")
    absenceData = absenceData.filter((item) => {
      return item.status === status;
    });

  if (startDate !== "")
    absenceData = absenceData.filter((item) => {
      return new Date(item.startDate) >= new Date(parseInt(startDate));
    });

  if (endDate !== "")
    absenceData = absenceData.filter((item) => {
      return new Date(item.endDate) <= new Date(parseInt(endDate));
    });

  const total = absenceData.length;
  const start = (page - 1) * limit;
  const end = page * limit;
  absenceData = absenceData.slice(start, end);

  res.send({ total: total, data: absenceData });
};
