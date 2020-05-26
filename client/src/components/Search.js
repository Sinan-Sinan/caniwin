import React, { Component } from 'react'
import "../CSS/search.css"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Redirect } from "react-router-dom";

class Search extends Component {

    constructor(props){
        super(props);
        this.state = {
            region: 'na1',
            name: '',
            redirect: null 
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
      }
    
    onSubmit = () => {
        if(!this.state.name){
            toast.error("Please enter Summoner Name", {
                position: "top-left",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        } else {
            this.setState({redirect: `/profile/${this.state.region}/${this.state.name}`});
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={{pathname: this.state.redirect}} />
        }
        return (
            <div className="form-group">
                <form>
                    <div>
                        <label htmlFor="region">Region: </label>
                        <select name="region" value={this.state.region} onChange={this.handleInputChange}>
                        <option value="na1">North America</option>
                        <option value="eun1">Europe East</option>
                        <option value="euw1">Europe West</option>
                        <option value="jp1">Japan</option>
                        <option value="kr">Korea</option>
                        <option value="la1">LAN</option>
                        <option value="la2">LAS</option>
                        <option value="br1">Brazil</option>
                        <option value="oc1">Oceania</option>
                        <option value="tr1">Turkey</option>
                        <option value="ru">Russia</option>
                        </select>
                    </div>
                    <div>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Summoner Name"/>
                    </div>
                    <div>
                        <input type="button" value='Submit' className="btn" onClick={this.onSubmit}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Search;
