const express = require('express')
const router = express.Router()
const { validateContact } = require("../../middlewares");
const { contacts: ctrl } = require("../../controllers");

router.get("/", ctrl.listContacts);

router.get("/:id", ctrl.getContactById);

router.post("/", validateContact, ctrl.addContact);

router.put("/:id", validateContact, ctrl.updateContact);

router.delete("/:id", ctrl.removeContact);

module.exports = router


