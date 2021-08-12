const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}
function request(url, method, params) {
  let apiUrl = "http://127.0.0.1:8888";
  return new Promise((resolve, reject) => {
    wx.request({
      url: apiUrl + url,
      data: params,
      header: {
        'content-type': 'application/json'
      },
      method: method,
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        if (res.statusCode == 200) {
          resolve(res.data);
        }
        if (res.statusCode == 500) {
          wx.showToast({
            title: '服务异常',
          })
        }
      },
      fail: function(err) {
        wx.hideLoading();
        reject(err);
      },
      complete: function(res) {
        wx.hideLoading();
      },
    })
  });
}

module.exports = {
  formatTime,
  request
}
