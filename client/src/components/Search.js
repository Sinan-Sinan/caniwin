import React, { Component } from 'react'
import "../CSS/search.css"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Redirect } from 'react-router-dom';
import arrow  from '../assets/arrow.png';
import oval1 from "../assets/home/3.svg";
import oval2 from "../assets/home/4.svg";

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
        this.setState({ [event.target.name]: event.target.value });
      }
      
    onSubmit = () => {
         if(this.state.name !== ''){
            this.setState({redirect: `/profile/${this.state.region}/${this.state.name}`});
        } else {
            toast.error("Please enter Summoner Name", {
                position: "top-left",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={{pathname: this.state.redirect}} />
        }
        return (
            <div>
                <div className="form-group">
                    <form>
                        <div>
                            <select name="region" value={this.state.region} onChange={this.handleInputChange} id="region">
                                <option value="none" selected disabled hidden> Region </option>
                                <option value="na1">NA</option>
                                <option value="eun1">EUN</option>
                                <option value="euw1">EUW</option>
                                <option value="jp1">JP</option>
                                <option value="kr">KR</option>
                                <option value="la1">LAN</option>
                                <option value="la2">LAS</option>
                                <option value="br1">BR</option>
                                <option value="oc1">OC</option>
                                <option value="tr1">TR</option>
                                <option value="ru">RU</option>
                            </select>
                            <input  type="text" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Summoner Name" id="box"/>
                        </div>
                        
                        <div>                          
                            <button type="submit" value="Submit" id="btn" onClick={this.onSubmit}>
                                <img src={arrow} className="arrow" alt="arrow" onClick={this.onSubmit} />
                            </button>
                        </div>
                        
                    </form>
                </div>
                <img src={oval1} id="oval3" alt="shape"/>
                <img src={oval2} id="oval4" alt="shape"/>
            </div>
        )
    }
}

export default Search;
//<img src={arrow} className="arrow" alt="arrow" onClick={this.onSubmit} />