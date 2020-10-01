import React, { Component } from 'react'
import '../CSS/playAgain.css';

class PlayAgain extends Component {
    constructor(props){
        super(props);
        this.state = {
            playAgain: "",
            error: ""
        }
    }

    async componentDidMount() {
        try{
            const rand = Math.round(0 + (Math.random() * (1 - 0)));
            if(rand === 0){
                this.setState({
                    playAgain: "No"
                }); 
            } else if(rand === 1) {
                this.setState({
                    playAgain: "Yes"
                }); 
            } else {
                this.setState({
                    error: "Error 500: Couldn't load answer"
                }); 
            }
            
        } catch (err) {
            this.setState({
                //error: err.response.message
            });
        }
    }    

    render() {
        return (
            <div>
                <h1 id="answer"> 
                    {this.state.playAgain} 
                </h1>
            </div>
        )
    }
}

export default PlayAgain;