// pages/demo03/demo03.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: 0,
        name: "首页",
        isactive: true,
      },
      {
        id: 1,
        name: "原创",
        isactive: false,
      },
      {
        id: 2,
        name: "分类",
        isactive: false,
      },
      {
        id: 3,
        name: "关于",
        isactive: false,
      },
    ],
    //自定义事件，用来接收子组件传递过来的数据
  },

  handleItemChange(e) {
    console.log(e);
    const { indexss } = e.detail;
    console.log(indexss);
    let { tabs } = this.data;
    tabs.forEach((v, i) =>
      i === indexss
        ? (console.log(v), (v.isactive = true))
        : (v.isactive = false)
    );
    this.setData({
      tabs,
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
  onShareAppMessage: function () {},
});
