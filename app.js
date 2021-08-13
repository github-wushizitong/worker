const {request}=require('./utils/util')
App({
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）,
   * 应用第一次启动的时候就会触发该事件回调
   */
  onLaunch: function () {
    // 在应用第一次启动的时候，就可以获取用户的个人信息
    console.log('onLanch+用户第一次启动该小程序的回调');
      
    
    
    wx.login({
      success:async function(wxUserCodeObj){
        console.log(wxUserCodeObj.code);
        if(wxUserCodeObj.errMsg === 'login:ok' && wxUserCodeObj.code){
          const wxUserCode = wxUserCodeObj.code;
          let result = await request('/','GET',{wxUserCode});
          console.log(result);
        }
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   * 当小程序被用户看的时候的回调
   */
  onShow: function (options) {
    console.log('onShow+用户在微信页面重新打开或者切换到小程序的时候的回调');
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   * 会暂停或清除定时器
   *
   */
  onHide: function () {
    console.log(
      'onHide+用户暂时当前微信小程序的时候或者用户切换到其他不是当前微信小程序或者用户通过转发导致该小程序暂时关闭的时候的回调'
    );
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   * 应用的代码发生了报错的时候，就会触发
   * 当应用发生代码报错的时候，手机用户的错误信息，通过异步请求，将错误信息发送到后端进行处理
   */
  onError: function (msg) {
    console.log(msg);
  },
  /**
   * 当页面找不到的时候就会触发该回调
   * 应用第一次启动的时候，如果找不到第一个入口页面，才会触发该回调
   */
  onPageNotFound: function () {}
});
