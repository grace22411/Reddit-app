import axios from "axios";

const state = {
    reddits : [ ],
    originalReddit : [ ]
}

const getters = {
    allReddits : (state) => { 
         
        return state.reddits
    }
}


const actions = {
    async fetchReddits({ commit }) {
        const response = await axios.get('https://www.reddit.com/.json');

        commit('setReddits', response.data.data.children);

    },

    async searchReddits({ commit } , e) {
        const title = e.target.value;
         
        commit('lookReddits', title);
        

    },

    async filterReddit({commit}, e){
        const limit = e.target.value;

        commit('filterReddit' , limit)

    }

}

const mutations = {
    setReddits: (state, reddits) => {
        state.reddits = reddits
        state.originalReddit = reddits
    },

    lookReddits: (state, title) => {
        const existingReddits = state.originalReddit

        const filteredResult = existingReddits.filter(item => item.data.title.toLowerCase().includes(title.toLowerCase()))
        
        return state.reddits = filteredResult;
        
    },
     
    filterReddit: (state, ups) => {
        const existingReddits = state.originalReddit
        console.log(ups, typeof(ups))
        const initial = ups.split('-')[0]
        const final = ups.split('-')[1]

        const filteredResult = existingReddits.filter(item => item.data.ups >= initial && (final !== 'above') && item.data.ups <= final )
        
        return state.reddits = filteredResult;
        
    },

}

export default  {
    state,
    getters,
    actions,
    mutations
}