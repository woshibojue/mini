//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    originalprice: 0,
    originalweight: 0,
    bweight: 0,
    Discount: 0,
    loss: 0,
    aweight: 0,

    motto: "Hello World",
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse("button.open-type.getUserInfo"),
  },

  op: function (e) {
    this.setData({
      originalprice: e.detail.value,
    });
    // ,console.log(e)
  },
  ow: function (e) {
    this.setData({
      originalweight: e.detail.value,
    });
  },
  bw: function (e) {
    this.setData({
      bweight: e.detail.value,
    }),
      this.setData({
        aweight: this.data.originalweight - this.data.bweight - this.data.loss,
      });

    //,console.log(this.data.bweight)
  },
  Dc: function (e) {
    this.setData({
      Discount: e.detail.value,
    });
  },

  LOSS: function (e) {
    this.setData({
      loss: e.detail.value,
    });
    this.setData({
      aweight: this.data.originalweight - this.data.bweight - this.data.loss,
    });
  },

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: "../logs/logs",
    });
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      });
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
        });
      };
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: (res) => {
          app.globalData.userInfo = res.userInfo;
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
          });
        },
      });
    }
  },
  getUserInfo: function (e) {
    console.log(e);
    app.globalData.userInfo = e.detail.userInfo;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
    });
  },
});
