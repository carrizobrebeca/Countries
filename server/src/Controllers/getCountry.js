const axios = require("axios");
const { Country } = require("../db");

const getCountry = async (req, res) => {
  try {
    const apiResponse = (await axios.get("http://localhost:5000/countries")).data;
   

    const countries = apiResponse.map((apiCountry) => ({
      id: apiCountry.cca3,
      name: apiCountry.name.common,
      flags: apiCountry.flags.png,
      continents: Array.isArray(apiCountry.continents) ? apiCountry.continents.join(', ') : '',
      capital: Array.isArray(apiCountry.capital) ? apiCountry.capital.join(', ') : '',
      subregion: apiCountry.subregion,
      area: apiCountry.area,
      population: apiCountry.population,
    }));

    // Guardar cada país en la base de datos usando Sequelize
    countries.forEach(async (country) => {
        try {
          await Country.create(country);
        } catch (error) {
          console.error("Error saving country to database:", error);
        }
      });
      
    return res.json(countries);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getCountry };