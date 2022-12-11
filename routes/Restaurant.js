const express = require('express')
const restaurant = require('../controller/Restaurant')
const restaurentByLocation = require('../controller/location')

const routes = express.Router();

routes.get('/',restaurant.getRestaurentsData)
routes.get('/:name',restaurant.getRestaurentsDataByName)
routes.post('/filter/:pageNo',restaurant.getRestaurentsDataFilter)
routes.post('/home',restaurentByLocation.getDataBylocation)

module.exports = routes;