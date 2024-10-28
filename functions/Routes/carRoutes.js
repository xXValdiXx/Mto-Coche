"use strict";
exports.__esModule = true;
var express_1 = require("express");
var carController_1 = require("../controllers/carController");
var router = (0, express_1.Router)();
router.post("/mazda3", carController_1.CarController.createMazda3);
exports["default"] = router;
