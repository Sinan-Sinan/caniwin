import React, { Component } from 'react';
import axios from 'axios';

class Rank extends Component {

    constructor(props){
        super(props);
        this.state = {
            loading: true,
            tier: null,
            rank: null
        }
    }
    
    async componentDidMount() {
        try{
            const res = await axios.get(`http://localhost:5000/api/v1/summoner/rank/${this.props.region}/${this.props.accountId}`);

            this.setState({
                tier: res.data[0].tier,
                rank: res.data[0].rank,
                loading: false, 
            }); 
        } catch (err) {
            this.setState({
                loading: false,
                //error: err.status.message
            });
        }
    }

    render() {
        if(this.state.error){
            return(
                <div>
                    <h1>{this.state.error}</h1>
                    <h3>Go Back</h3>
                </div>
            )
        } else if(this.state.error){
            return(
                <div>
                    <h1>{this.state.error}</h1>
                    <h3>Go Back</h3>
                </div>
            )
        } else {
            return (
                <div>
                </div>
            )
        }
    }
}

export default Rank;