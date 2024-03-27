const validateGenreData = (req, res, next) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res
      .status(400)
      .json({ message: "Name and Description fields are required" });
  } else if (typeof name !== "string" || typeof description !== "string") {
    return res
      .status(400)
      .json({ message: "Both Name and Description should be of type string." });
  } else if (name.length < 3 || description.length < 15) {
    return res
      .status(400)
      .json({ message: "Length of the Name or Description is too short." });
  }
  next();
};

module.exports = validateGenreData;
