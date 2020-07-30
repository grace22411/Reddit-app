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

    async filterReddit({commit}, e){
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
        commit('filterReddit' , limit)

        console.log(limit);
    }

}

const mutations = {
    setReddits: (state, reddits) => (state.reddits = reddits),
    lookReddits: (state, title) => (state.reddits = state.reddits.filter(reddit => reddit.title !== title))

}

export default  {
    state,
    getters,
    actions,
    mutations
}