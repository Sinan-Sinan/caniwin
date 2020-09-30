import React, { Component } from 'react';
import axios from 'axios';
import Rank from './Rank.js';
import MatchHistroy from './PlayAgain.js';
import '../CSS/profile.css';
import arrow from "../assets/arrow.svg";
import oval1 from "../assets/profile/1.svg";
import oval2 from "../assets/profile/2.svg";

class Profile extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            error: null,
            patch: null,
            profileIconId: null,
            name: null,
            accountId: null,
            id: null,
            summonerLevel: null,
            puuid: null,
            redirect: false
        }
    }

    async componentDidMount() {
        try{
            const res = await axios.get(`http://localhost:5000/api/v1/summoner/${this.props.match.params.region}/${this.props.match.params.name}`);
            this.setState({
                profileIconId: res.data.profileIconId,
                name: res.data.name,
                accountId: res.data.accountId,
                id: res.data.id,
                puuid: res.data.puuid,
                summonerLevel: res.data.summonerLevel,
            }); 
        } catch (err) {
            this.setState({
                //error: err.response.message
            });
        }
        try{
            const res = await axios.get(`http://localhost:5000/api/v1/patch`);
            this.setState({
                patch: res.data[2],
                loading: false
            });             
        } catch (err) {
            this.setState({
                loading: false
                //error: err.response.message
            });
        }
      }
      
    image(){
        return ("https://cdn.communitydragon.org/" + this.state.patch + "/profile-icon/" + this.state.profileIconId);
    }
    render() {
        if(this.state.loading){
            return (
                <div>
                    <h3 id="loading">Loading...</h3>
                </div>
            )          
        }
        else if(this.state.error){
            return(
                <div>
                    <h1>{this.state.error}</h1>
                    <h3>Go Back</h3>
                </div>
            )
        }else{
            return(
                <div>
                    <a href="/">
                        <img src={arrow} id="arrow" alt="arrow" />
                    </a>
                    <div className="user">  
                        <h1 id="summonerName">
                            {this.state.name}
                        </h1>   
                        <img src={ this.image() } id="summonerIcon" alt="Img"/> 
                        <Rank defer accountId={this.state.id} region={this.props.match.params.region} action={this.handler}/>
                        <MatchHistroy />
                    </div>   
                    <img src={oval1} id="oval1" alt="shape"/>
                    <img src={oval2} id="oval2" alt="shape"/>                 
                </div>
            )
        }
        
    }
}

export default Profile;