const {Router} = require('express');
const { getActivityHandler, createActivityHandler } = require('../Handlers/handlerActivity');


const activityRouter = Router();
activityRouter.post("/post", createActivityHandler);
activityRouter.get("/", getActivityHandler);


module.exports = activityRouter;