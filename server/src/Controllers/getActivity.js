/*/activities
Obtiene un arreglo de objetos, donde cada objeto es una actividad turística.*/

const {Activity, Country} = require('../db');

const getActivity = async () => {
    try {
            // Obtener todas las actividades de la base de datos
            const activities = await Activity.findAll(); 
            const activity = activities.map((activity) => ({
              id: activity.id,
              name: activity.name,
              difficulty: activity.difficulty,
              duration: activity.duration,
              season: activity.season,
            }))
            return [...activity]
       
    } catch (error) {
        throw new Error("Activities error");
    }
}

module.exports = { getActivity }