import axios from 'axios';

const path = "http://localhost:4000/api/jobs";

const getJobs = async () => {
    return await axios.post(axios.post('https://www.zippia.com/api/jobs', {
        companySkills: true,
        dismissedListingHashes: [],
        fetchJobDesc: true,
        jobTitle: "Business Analyst",
        locations: [],
        numJobs: 20,
        previousListingHashes: []
    }));
}

export default getJobs;