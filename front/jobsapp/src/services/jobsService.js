import axios from 'axios';

const path = "http://localhost:4000/api/jobs";

const getJobs = async () => {
    return await axios.get(path);
}

export default getJobs;