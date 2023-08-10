const axios = require('axios');
const qs = require('qs');

let data = qs.stringify({
    'content': 'hi you have a new form message go check it out',
    'embeds': '',
    'tts': false
});

let config = {
    method: 'post',
    url: 'https://discord.com/api/v10/channels/1139283271751057610/messages',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'Authorization': 'MTEzOTIxODA4MzU3MjEwNTMyNw.G_lQOj.PTn5dJLxeLHh5w5-cM2rn_Hm9vIK6gVE5JPY-A'
    },
    data: data
};

axios.request(config)
    .then((response) => {
        console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
        console.error(error);
    });