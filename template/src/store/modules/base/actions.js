import * as types from './type'

export default {
  loading({ commit }, flag) {
    commit(type.LOADING, flag)
  },
}
