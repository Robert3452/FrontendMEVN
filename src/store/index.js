import Vue from 'vue';
import Vuex from 'vuex';
import { profile } from './profile';
import { tasks } from './tasks';

Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        profile,
        tasks
    }
})


export default store