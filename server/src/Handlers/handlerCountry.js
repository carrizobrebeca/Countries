const { getCountry } = require("../Controllers/getCountry");
const { getCountryById } = require("../Controllers/getCountryById");
const { getCountryByName } = require("../Controllers/getCountryName");


//REcibe la request
//unifica datos
//Devuelve la respuesta
//Invoca al controller (Controller interactua con fuentes externas)
//no interactua con fuentes externas
const getCountryHandler = async (req, res) => {
  try {
    const { name } = req.query;
      const result = name ? await getCountryByName(name) : await getCountry();
      res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getCountryIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await getCountryById(id);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//FORMAS DE TRAER INFORMACION: A TRAVES DE:
// /?name=name --> query  > no modifica la ruta original, se puede usar la misma / o /?nombre
// --> body recibe info  Json --> middleware parsea para que express lo convierte de un Json a objeto a JS
// /:id --> params    > la ruta se modifica al momento de poner el id, es una ruta diferente

module.exports = { getCountryHandler, getCountryIdHandler };
