import Vue from 'vue';
import Vuex from 'vuex';
import reddits from "./modules/reddits"


Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        reddits
    }
});
