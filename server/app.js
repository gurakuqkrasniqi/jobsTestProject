const express = require('express');
const JobRoutes = require('./routes/jobRoutes.js')

const app = express();
const cors = require('cors');
app.use(cors());

//every request sent to {domain}/api/jobs is sent to JobRoutes
app.use('/api/jobs', JobRoutes)

module.exports = app;