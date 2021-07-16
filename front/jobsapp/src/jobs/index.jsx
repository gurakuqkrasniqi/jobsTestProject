import React, { Component } from 'react';
import { Spinner, Button, FormControl } from 'react-bootstrap'
import CardJob from '../components/card';
import Footer from '../components/footer.jsx'
import getJobs from '../services/jobsService';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobList: [],//contains jobs to be shown
            orignialJobList: [] //contains all jobs retrieved
        }
    }

    //get all data as soon as it is mounted
    componentDidMount = () => {
        //get actual data
        getJobs().then(obj => {

            this.setState({
                jobList: obj.data,
                orignialJobList: obj.data
            })
        })

    }


    showLastSevenDays = () => {
        //OBJpostingDate
        var todayDate = new Date().getTime();
        //algorithm to find 7 day difference
        var tempArr = this.state.orignialJobList.filter(job => {
            var differnce = todayDate - new Date(job.OBJpostingDate).getTime();
            var numOfDays = differnce / (1000 * 60 * 60 * 24)
            if (numOfDays < 7) return job
        })
        this.setState({
            jobList: tempArr
        })
    }

    //saves input change on the state and waits for the button to be clicked
    handleInputChange = (e) => {
        this.setState({
            searched: e.target.value
        })
    }

    //method is executed fully if there was something written in the text field
    //since there is no reseting, if the string is empty and you click search, it retrieves all the data
    searchClicked = () => {
        if (this.state.searched == undefined) return;
        var tempObj = this.state.orignialJobList.filter(job => {
            if (job.companyName.toLowerCase().match(this.state.searched)) {
                console.log(job)
                return job;
            }
        })


        this.setState({
            jobList: tempObj
        })
    }

    render() {
        return (
            <div className='wrapper'>
                <div className='d-flex flex-wrap'>
                    <div className='w-100 d-flex justify-content-center'>
                        <h1 className='display-4'>Jobs near me</h1>
                    </div>
                    <div className="d-flex w-75 button-wrapper-size w-100 justify-content-around ">

                        <div className='d-flex h-100 align-items-center'>
                            <FormControl onChange={this.handleInputChange} className='h-50' placeholder='Search by job title' />
                            <Button onClick={this.searchClicked} className='h-50' style={{ marginLeft: "5px" }}> Search</Button>
                        </div>
                        <div className='d-flex h-100 align-items-center'>
                            <Button className='h-50' onClick={this.showLastSevenDays}> Show last 7 days published jobs</Button>
                        </div>
                    </div>
                    <div className='d-flex flex-wrap w-100 justify-content-center'>
                        {/*if its loading data, show spinner*/}
                        {this.state.jobList.length == 0 ?
                            <Spinner animation="border" className='spinner' />
                            :
                            this.state.jobList.map((job, index) => {
                                return (
                                    <CardJob job={job} />
                                )
                            })
                        }
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Index;