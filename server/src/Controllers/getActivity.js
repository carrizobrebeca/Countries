/*/activities
Obtiene un arreglo de objetos, donde cada objeto es una actividad turística.*/

const {Activity, Country} = require('../db');

const getActivity = async () => {
  try {
    // Obtener todas las actividades de la base de datos, incluyendo la relación con el modelo Country
    const activities = await Activity.findAll({
        include: [
            {
                model: Country,
                through: {
                    attributes: [], // Opcional: Si no quieres incluir atributos de la tabla intermedia
                },
            },
        ],
    });

    // Mapear el arreglo de actividades para incluir información de los países asociados
    const activityList = activities.map(activity => ({
        id: activity.id,
        name: activity.name,
        difficulty: activity.difficulty,
        duration: activity.duration,
        season: activity.season,
        Countries: activity.Countries.map(country => ({
            id: country.id,
            name: country.name,
            // Otros atributos del país si es necesario
        })),
    }));

    return activityList;

} catch (error) {
    throw new Error("Activities error");
}
    // try {
    //         // Obtener todas las actividades de la base de datos
    //         const activities = await Activity.findAll(); 
       
    //         const activity = activities.map((activity) => ({
    //           id: activity.id,
    //           name: activity.name,
    //           difficulty: activity.difficulty,
    //           duration: activity.duration,
    //           season: activity.season,
    //           countryId: activity.countryId
              
    //         }))
    //         return [...activity]
       
    // } catch (error) {
    //     throw new Error("Activities error");
    // }
}

module.exports = { getActivity }