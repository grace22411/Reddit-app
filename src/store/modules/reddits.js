import axios from "axios";

const state = {
    reddits : [ ]
}

const getters = {
    allReddits : (state) => { state.reddits }
}


const actions = {
    async fetchReddits({ commit }) {
        const response = await axios.get('https://www.reddit.com/.json');

        // const data = JSON.parse(response.data)

        commit('setReddits', response.data);

        console.log(response.data)
    },
    async searchReddits({ commit } , title) {
        await axios.get(`https://www.reddit.com/.json/${title}`);

        commit('lookReddits', title);

    },