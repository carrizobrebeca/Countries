/*GET | /countries/name?="..."
Esta ruta debe obtener todos aquellos países que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
Debe poder buscarlo independientemente de mayúsculas o minúsculas.
Si no existe el país, debe mostrar un mensaje adecuado.*/
const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const getCountryByName = async (name) => {
  // Consulta para buscar países por nombre de forma insensible a mayúsculas y minúsculas
  try {
    // Consulta para buscar países por nombre de forma insensible a mayúsculas y minúsculas
    const countries = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`, // Busca nombres que contengan el valor de `name`
        },
      },
    });

    // Mapear y formatear los resultados según el requerimiento
    const countriesDb = await countries.map((country) => ({
      id: country.id,
      name: country.name,
      flags: country.flags,
      continents: country.continents,
      capital: country.capital,
      subregion: country.subregion,
      area: country.area,
      population: country.population,
    }));

    // Manejo de caso sin resultados
    if (!countriesDb.length) {
      throw new Error(`No se encontró ningún país que coincida con '${name}'`);
    }

    return countriesDb;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Error al buscar país por nombre en la base de datos");
  }
};

module.exports = { getCountryByName };
