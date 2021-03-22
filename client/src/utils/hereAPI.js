import axios from 'axios';

export default {
    searchYoutube: async (req, res) => {
        try {
            res = await axios.get('https://www.googleapis.com/youtube/v3/theburgershow');
            return res;
        } catch (err) {
            console.log("yuuuup - its an error", err)

        }
    },

    hereSearch: async (req, res) => {
        try {
            res = await axios.get(`https://discover.search.hereapi.com/v1/discover?at=52.5228,13.4124&q=food&apiKey=${process.env.REACT_APP_HERE_API_KEY}`)
            return res.data;

        } catch (error) {
            console.log(error)

        }
    }
}