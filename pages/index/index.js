Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 0,
        name: '首页',
        isActive: true
      },
      {
        id: 1,
        name: '资讯',
        isActive: false
      },
      {
        id: 2,
        name: '新闻',
        isActive: false
      },
      {
        id: 3,
        name: '关于',
        isActive: false
      }
    ]
  },
  handleItemClick(e) {
    console.log(e);
    // 获取事件源对象中的数据
    let { index } = e.detail;
    // 拷贝list 数据
    let list = JSON.parse(JSON.stringify(this.data.list));
    list.forEach((listItem, listIndex) => {
      listIndex === index
        ? (listItem.isActive = true)
        : (listItem.isActive = false);
    });
    this.setData({
      list: list
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {}
});
