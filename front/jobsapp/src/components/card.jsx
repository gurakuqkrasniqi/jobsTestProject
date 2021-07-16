import React, { Component } from 'react';
import { Card, Spinner } from 'react-bootstrap'

class CardJob extends Component {
    constructor(props) {
        super(props);
        this.state = {
            job: undefined
        }
    }

    //fetch properties sent from index component for the job to be shown
    componentDidMount = () => {
        if (this.props.job != undefined) {
            this.setState({
                job: this.props.job
            })
        }
    }

    //if card should change data, change state, otherwise not
    componentDidUpdate() {
        if (this.props.job != this.state.job) {
            this.setState({
                job: this.props.job
            })
        }
    }

    render() {
        return (
            <Card className='flex-shrink-0 card-width-margin h-100'>
                {/* if job is not loaded yet, show spinner */}
                {this.state.job == undefined ?
                    <Spinner animation="border" />
                    :
                    <div className='d-flex justify-content-between flex-column h-100'>
                        <Card.Body>
                            <Card.Title>{this.state.job.jobTitle}</Card.Title>
                            <Card.Text>
                                {this.state.job.companyName}
                            </Card.Text>

                        </Card.Body>
                        {/* added extra, not in the req.  */}
                        <Card.Footer >
                            <span>{this.state.job.postedDate}</span>
                        </Card.Footer>
                    </div>
                }
            </Card>
        );
    }
}

export default CardJob;