import Vue from 'vue'
import Vuex from 'vuex'

import finance from './finance'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        finance,
    },
});