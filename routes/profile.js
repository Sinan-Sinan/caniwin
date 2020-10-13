const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/summoner/:region/:name', async (req, res) => {
    try{

        const headers = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
            "Access-Control-Allow-Credentials": true,
            "Content-Type": "application/json"
        }
        
        const { region, name } = req.params;

        const response = await fetch(`https://61txbkhoi9.execute-api.us-east-1.amazonaws.com/rgapi/summoner/${region}/${name}`, {headers});
    
    
        const data = await response.json();

        if(data.status !== undefined){
            return res.status(data.status.status_code).json({
                message: "Error " + data.status.status_code + ": " + data.status.message
            })
        }               

        res.json(data);

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Server Error"
        })
    }
});


router.get('/patch', async (req, res) => {
    try {
        const response = await fetch('https://ddragon.leagueoflegends.com/api/versions.json');

        const data = await response.json();

        return res.json(data);

    } catch(err) {
        console.error(err);
        return res.status(500).json({
            message: "Server Error"
        })
    }
});

router.get('/summoner/rank/:region/:id', async (req, res) => {
    try{

        const headers = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
            "Access-Control-Allow-Credentials": true,
            "Content-Type": "application/json"
        }

        const { region, id } = req.params;

        const response = await fetch(`https://61txbkhoi9.execute-api.us-east-1.amazonaws.com/rgapi/summoner/`, {headers});

        const data = await response.json();

        return res.json(data);
    } catch(err) {
        console.error(err);
        return res.status(500).json({
            message: "Server Error"
        })
    }
});

router.get('/summoner/match-history/:region/:AccountId', async (req, res) => {
    try{

        const { region, AccountId } = req.params;
        
        const response = await fetch(`https://61txbkhoi9.execute-api.us-east-1.amazonaws.com/rgapi/summoner/`);

        const data = await response.json();

        return res.json(data);
    } catch(err) {
        console.error(err);
        return res.status(500).json({
            message: "Server Error"
        })
    }
});

module.exports = router;