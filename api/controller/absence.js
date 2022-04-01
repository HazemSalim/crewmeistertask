import { absences, members } from "../api.js";

export const getAbsences = async (req, res) => {
  const absenceData = await absences();
  const memberData = await members();
  const memberMap = {};
  memberData.forEach((member) => {
    memberMap[member.userId] = member;
  });
 
  const data = absenceData.map((user) => {
    let status = "Requested";
    if (user.confirmedAt) {
      status = "Confirmed";
    } else if (user.rejectedAt) {
      status = "Rejected";
    }
    return { ...user, memberDetails: memberMap[user.userId], status };
  });

  res.send({ total: data.length, data: data });
};
