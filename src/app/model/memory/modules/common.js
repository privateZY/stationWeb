/**
 * [common 公共状态]
 * @type {Object}
 */

const state = {
    user_info:''
}

const mutations = {
    ['UPDATE_MERCHANT_APPID'](state,data) {
        // console.log('UPDATE-APPID',data)
        state.user_info.appid = data
    }

}


export default {
    state,
    mutations
}