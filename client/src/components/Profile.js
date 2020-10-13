import React, { Component } from 'react';
import axios from 'axios';
//import Rank from './Rank.js';
import MatchHistroy from './PlayAgain.js';
import '../CSS/profile.css';
import arrow from "../assets/arrow.svg";
import oval1 from "../assets/profile/1.svg";
import oval2 from "../assets/profile/2.svg";
import { css } from "@emotion/core";
import SyncLoader from "react-spinners/SyncLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
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
            redirect: false,
            profileIcon: null,
            status: undefined
        }
    }

    async componentDidMount() {
        try{
            const res = await axios.get(`https://caniwin.lol/api/v1/summoner/${this.props.match.params.region}/${this.props.match.params.name}`);
            
            this.setState({
                profileIconId: res.data.profileIconId,
                name: res.data.name,
                accountId: res.data.accountId,
                id: res.data.id,
                puuid: res.data.puuid,
                summonerLevel: res.data.summonerLevel
            });
        } catch (err) {     
            this.setState({
                error: err.response.data.message,
                loading: false
            });
        }
        try{
            const res = await axios.get(`https://caniwin.lol/api/v1/patch`);
            this.setState({
                patch: res.data[2],
            });                         
        } catch (err) {
            this.setState({
                error: err.response.data.message,
                loading: false
            });
        }
        
        this.setState({
           profileIcon: await this.image(),
           loading: false
        })

    }

    async image(){
        return ("https://cdn.communitydragon.org/" + this.state.patch + "/profile-icon/" + this.state.profileIconId)
    }

    render() {
        if(this.state.loading){
            return (
                <div >
                <a href="/">
                    <img src={arrow} id="arrow" alt="arrow" />
                </a>
                    <div id="loading">
                        <SyncLoader
                        css={override}
                        size={15}
                        color={"#000"}
                        margin={5}
                        loading={true}
                        />
                    </div>
                </div>
                
            )          
        }
        else if(this.state.error){
            return(
                <div id="error">
                    <h1>{this.state.error}</h1>
                    <a href="/" >Go Back</a>
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
                        <img src={ this.state.profileIcon } id="summonerIcon" alt="Img"/> 
                        
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

//<Rank defer accountId={this.state.id} region={this.props.match.params.region} action={this.handler}/>