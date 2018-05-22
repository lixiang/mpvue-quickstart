import * as types from './type'

export default {
  [types.LOADING](state, flag) {
    if (flag) {
      wx.showNavigationBarLoading()
    } else {
      wx.hideNavigationBarLoading()
    }
  },
}
