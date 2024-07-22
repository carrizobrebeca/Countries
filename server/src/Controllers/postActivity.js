/*POST | /activities
Esta ruta recibirá todos los datos necesarios para crear una actividad turística y relacionarla con los países solicitados.
Toda la información debe ser recibida por body.
Debe crear la actividad turística en la base de datos, y esta debe estar relacionada con los países indicados (al menos uno).*/

const { Activity, Country } = require("../db");

const createActivity = async (
  name,
  difficulty,
  duration,
  season,
  countryId
) => {
  
    const [newActivity, create] = await Activity.findOrCreate({
      where: {
        name,
        difficulty,
        duration,
        season,
      },
    });
    const country = countryId.split(", ");
    
    const countryRecords = await Country.findAll({
      where: {
        id: country,
      }
    })

    await newActivity.addCountries(countryRecords);
    return newActivity
};

module.exports = { createActivity };
