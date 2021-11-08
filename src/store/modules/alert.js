import {ACTION_TYPES} from "../actions.js";
const timeout = 2000;
const state = {
    title: null,
    code: null,
    reason: null,
    color: null,
    open: false
};

const mutations = {
    [ACTION_TYPES.OPEN](state) {
        state.open = true;
    },
    [ACTION_TYPES.CLOSE](state) {
        console.log("close")
        state.open = false;
    },
    [ACTION_TYPES.SUCCESS](state, payload) {
        state.title = "success";
        state.code = payload.code
        state.reason = payload.reason
        state.color = "green"
    },
    [ACTION_TYPES.ERROR](state, payload) {
        state.title = "error";
        state.code = payload.code
        state.reason = payload.reason
        state.color = "red"
    },
    [ACTION_TYPES.WARNING](state, payload) {
        state.title = "success";
        state.code = payload.code
        state.reason = payload.reason
        state.color = "yellow"
    },
};

const actions = {
    [ACTION_TYPES.SUCCESS]({ commit }, payload) {
        console.log("success action")
        commit(ACTION_TYPES.OPEN)
        commit(ACTION_TYPES.SUCCESS, payload)
        setTimeout(() => {
            console.log("time out")
            commit(ACTION_TYPES.CLOSE)
        }, timeout)
    },
    [ACTION_TYPES.ERROR]({ commit }, payload) {
        commit(ACTION_TYPES.OPEN)
        commit(ACTION_TYPES.ERROR, payload)
        setTimeout(() => {
            commit(ACTION_TYPES.CLOSE)
        }, timeout)
    },
    [ACTION_TYPES.WARNING]({ commit }, payload) {
        commit(ACTION_TYPES.OPEN)
        commit(ACTION_TYPES.WARNING, payload)
        setTimeout(() => {
            commit(ACTION_TYPES.CLOSE)
        }, timeout)
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};