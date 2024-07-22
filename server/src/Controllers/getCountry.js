const axios = require("axios");
const { Country } = require("../db");


const getCountry = async () => {
  try {
    const apiResponse = (await axios.get("http://localhost:5000/countries")).data;
    
    const country = apiResponse.map((apiCountry) => ({
      id: apiCountry.cca3,
      name: apiCountry.name.common,
      flags: apiCountry.flags.png,
      continents: apiCountry.region,
      capital: Array.isArray(apiCountry.capital) ? apiCountry.capital.join(', ') : '',
      subregion: apiCountry.subregion,
      area: apiCountry.area,
      population: apiCountry.population,
    }));

    // Guardar cada país en la base de datos 
    await Promise.all(
      country.map(async (countries) => {
        try {
          await Country.create(countries);
        } catch (error) {
          console.error("Error saving country to database:", error);
        }
      })
    );
    return country;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Error Country DB" });
  }
};



module.exports = { getCountry };