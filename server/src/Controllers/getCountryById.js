/*/countries/:idPais
Esta ruta obtiene el detalle de un país específico. Es decir que devuelve un objeto con la información pedida en el detalle de un país.
El país es recibido por parámetro (ID de tres letras del país).
Tiene que incluir los datos de las actividades turísticas asociadas a este país.*/

const { Country, Activity } = require("../db");

const getCountryById = async (id) => {
    const country = await Country.findByPk(id, {
        include: [
          {
            model: Activity,
            through: {
              attributes: [],
            },
          },
        ],
      });
    
      // Formateamos la respuesta
      const formattedCountry = {
        id: country.id,
        name: country.name,
        flags: country.flags,
        continents: country.region,
        capital: country.capital,
        subregion: country.subregion,
        area: country.area,
        population: country.population,
        Activities: country.Activities.map((activity) => ({
          id: activity.id,
          name: activity.name,
          difficulty: activity.difficulty,
          duration: activity.duration,
          season: activity.season,

        })),
      };
    
      return formattedCountry;
    
};


module.exports = { getCountryById };
