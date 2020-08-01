import axios from "axios";
import moment from "moment"

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

    },

    async sortRedditByUpvote({commit}, e){
        const limit = e.target.value;

        commit('sortRedditByUpvote' , limit)

    },

    
    async filterRedditByDate({commit}, e){
        const date = e.target.value;

        console.log(date)
        commit('filterRedditByDate' , date)

    },

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

    sortRedditByUpvote : (state, ups) => {
        const existingReddits = state.originalReddit
        const existingRedditsCopy = existingReddits.slice(0);

        let sortedResult;
        if ( ups === "0"){
            sortedResult = existingReddits;
        } else {
            sortedResult = existingRedditsCopy.sort((a,b) => {
                if (ups === "1" ) {
                    return a.data.ups - b.data.ups 
                } else if (ups === "2"){
                    return b.data.ups - a.data.ups 
                } 
            });
        }

        return state.reddits = sortedResult;
        
    },

    filterRedditByDate: (state, created) => {
        const existingReddits = state.originalReddit

        const filteredResult = existingReddits.filter(item => {
            const date = new Date(item.data.created * 1000);
            console.log(date , created)
            return moment(date).isSame(moment(created), "day");
            
        });
        
        return state.reddits = filteredResult;
        
    },

}

export default  {
    state,
    getters,
    actions,
    mutations
}