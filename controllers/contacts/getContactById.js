const contacts = require("../../model/contacts.json");

const getContactById = (req, res) => {
  const { id } = req.params;
  const result = contacts.find((item) => item._id === id);
  if (!result) {
    return res.status(404).json({
      status: "error",
      code: 404,
      message: "Not found",
    });
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getContactById;
