const { Router } = require("express");
const {
  getCountryIdHandler,
  getCountryHandler,
} = require("../Handlers/handlerCountry");

const countryRouter = Router();
countryRouter.get("/:id", getCountryIdHandler);
countryRouter.get("/", getCountryHandler);

module.exports = countryRouter;
