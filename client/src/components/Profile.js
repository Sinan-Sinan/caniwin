import React, { Component } from 'react';
import axios from 'axios';
import Rank from './Rank.js';

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
            puuid: null
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
                loading: false
            }); 
        } catch (err) {
            this.setState({
                loading: false,
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
                loading: false,
                //error: err.response.message
            });
        }
      }
      
    render() {
        if(this.state.loading){
            return (
                <div>
                    <h3>Loading...</h3>
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
                    <h1 className="summonerName">
                        {this.state.name}
                    </h1>
                    <img src={"https://cdn.communitydragon.org/" + this.state.patch + "/profile-icon/" + this.state.profileIconId } alt="Img"/>
                    <Rank defer accountId={this.state.id} region={this.props.match.params.region}/>
                    
                </div>
            )
        }
        
    }
}

export default Profile;