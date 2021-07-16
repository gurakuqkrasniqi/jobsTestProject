const axios = require('axios');

// (since we didnt need no other functionality, we created only one endpoint)
const getJobs = async (req, res, next) => {
    //post request to an external API through axios
    await axios.post('https://www.zippia.com/api/jobs', {
        companySkills: true,
        dismissedListingHashes: [],
        fetchJobDesc: true,
        jobTitle: "Business Analyst",
        locations: [],
        numJobs: 20,
        previousListingHashes: []
    }).then(response => {
        //filter only 10 jobs from fetched jobs data
        var objList = response.data.jobs.filter((job, index) => {
            if (index < 10) {
                return job;
            }
        })
        return res.status(200).json(objList);
    });

}

module.exports = {
    getJobs
}