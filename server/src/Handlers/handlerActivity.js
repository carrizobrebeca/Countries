const { getActivity } = require("../Controllers/getActivity");
const { createActivity } = require("../Controllers/postActivity");

const createActivityHandler = async (req, res) => {
  const { name, difficulty, duration, season, countryId } = req.body;
  try {
    const newActivity = await createActivity(
      name,
      difficulty,
      duration,
      season,
      countryId
    );
    res.status(200).json(newActivity);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getActivityHandler = async (req, res) => {
  const response = await getActivity();
  return res.status(200).json(response);
};

module.exports = { createActivityHandler, getActivityHandler };
