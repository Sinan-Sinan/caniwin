import React, { Component } from 'react'
import axios from 'axios';

class MatchHistory extends Component {
    constructor(props){
        super(props);
        this.state = {
            playAgain: null
        }
    }

    async componentDidMount() {
        try{
            const res = await axios.get(`http://localhost:5000/api/v1/playAgain`);
            this.setState({
                playAgain: res.data.answer,
            }); 
        } catch (err) {
            this.setState({
                //error: err.response.message
            });
        }
    }

    onSubmit() {
        console.log();
    }

    render() {
        return (
            <div>
                <h1 onClick={this.onSubmit}> 
                    {this.state.playAgain} 
                </h1>
            </div>
        )
    }
}

export default MatchHistory;