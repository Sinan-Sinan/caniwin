const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/summoner/:region/:name', async (req, res) => {
    try{
        const headers = {
            'X-Riot-Token' : process.env.TRACKER_API_KEY
        }
        
        const { region, name } = req.params;

        const response = await fetch(`https://${region}${process.env.TRACK_API_URL}/lol/summoner/v4/summoners/by-name/${name}`, {headers});
    
        const data = await response.json();

        if(data.errors && data.errors.length > 0){
            return res.status(404).json({
                message: 'Profile Not Found'
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
            'X-Riot-Token' : process.env.TRACKER_API_KEY
        }

        const { region, id } = req.params;

        const response = await fetch(`https://${region}${process.env.TRACK_API_URL}/lol/league/v4/entries/by-summoner/${id}`, {headers});

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
        
        const response = await fetch(`https://${region}${process.env.TRACK_API_URL}/lol/match/v4/matchlists/by-account/${AccountId}`);

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