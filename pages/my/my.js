const {request}=require('../../utils/util')
// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 监听(点击tabbar的事件回调)tabbar切换事件
  async onTabItemTap(item){
    // 调试点击tabbar以后进入的路径
    // console.log(item.pagePath);
    // 调试点击tabbar以后,tabbar显示的text文本
    // console.log(item.text);
    let wxUserInfo = await wx.getUserProfile({
      lang:'zh_CN',
      desc:'用于完善用户资料'
    })
    console.log(wxUserInfo);
    // console.log(wxUserInfo.encryptedData);
    // console.log(wxUserInfo.iv);
    wx.login({
      success:async function(wxUserCodeObj){
        console.log(wxUserCodeObj.code);
        if(wxUserCodeObj.errMsg === 'login:ok' && wxUserCodeObj.code){
          const wxUserCode = wxUserCodeObj.code;
          const wxUserInfoEncryptedData = wxUserInfo.encryptedData;
          const wxUserInfoIv = wxUserInfo.iv;
          // 获取使用openid和session_key解密后的用户信息和小程序端的cookie
          let result = await request('/admin/login','GET',{wxUserCode,wxUserInfoEncryptedData,wxUserInfoIv});
          console.log(JSON.parse(result.msg));
      
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})