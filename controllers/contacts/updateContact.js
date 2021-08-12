const contacts = require("../../model/contacts.json");

const updateContact = (req, res) => {
  const { id } = req.params;

    const idx = contacts.findIndex(({ _id }) => _id === id);
    console.log(idx);
    console.log(contacts);
  if (idx === -1) {
    return res.status(404).json({
      status: "error",
      code: 404,
      message: "Not found",
    });
  }
  const updateContact = { ...req.body, _id: id };
  contacts[idx] = updateContact;
  res.json({
    status: "success",
    code: 200,
    data: {
      result: updateContact,
    },
  });
};

module.exports = updateContact;
