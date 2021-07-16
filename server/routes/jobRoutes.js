const express = require('express');
const router = express.Router();
const JobsController = require('../controllers/jobsController');

//route to get jobs data 
router.get('/', JobsController.getJobs)

module.exports = router;
