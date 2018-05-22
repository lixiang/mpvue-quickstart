const isProduction = process.env.NODE_ENV === 'production'
const baseURL = isProduction ? '生产url' : 'https://api.douban.com/v2'

export function post(url, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + url,
      method: 'POST',
      data,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      success(res) {
        resolve(res)
      },
      fail(error) {
        reject(error)
      },
    })
  })
}

export function get(url, params) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + url,
      method: 'GET',
      data: params,
      header: {
        'Content-Type': 'application/text',
      },
      success(res) {
        resolve(res)
      },
      fail(error) {
        reject(error)
      },
    })
  })
}

