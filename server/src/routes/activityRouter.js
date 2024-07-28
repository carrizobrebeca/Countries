const {Router} = require('express');
const { getActivityHandler, createActivityHandler } = require('../Handlers/handlerActivity');


const activityRouter = Router();
activityRouter.get("/", getActivityHandler);
activityRouter.post("/", createActivityHandler);



module.exports = activityRouter;