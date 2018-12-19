//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
    remind: '加载中',
    angle: 0,
    userInfo: {}
  },
  // toCalc: function () {
  //   wx.switchTab({
  //     url: '../calc/calc',
  //   });
  // },
  // toBook: function () {
  //   wx.switchTab({
  //     url: '../book/book',
  //   });
  // },
  // toYw: function () {
  //   wx.switchTab({
  //     url: '../testYw/index',
  //   });
  // },
  // toShop: function () {
  //   wx.switchTab({
  //     url: '../testShop/index/index',
  //   });
  // },
  onLoad: function () {
    //计算器
    console.log('onLoad');
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
    //商城
    wx.setNavigationBarTitle({
      title: '小程序集合dome'
    })
  },
  onShow: function () {
    let that = this
    let userInfo = wx.getStorageSync('userInfo')
    if (!userInfo) {
      wx.navigateTo({
        url: "../pages/testShop/authorize/index"
      })
    } else {
      that.setData({
        userInfo: userInfo
      })
    }
  },
  onReady: function () {
    var that = this;
    setTimeout(function () {
      that.setData({
        remind: ''
      });
    }, 1000);
    wx.onAccelerometerChange(function (res) {
      var angle = -(res.x * 30).toFixed(1);
      if (angle > 14) { angle = 14; }
      else if (angle < -14) { angle = -14; }
      if (that.data.angle !== angle) {
        that.setData({
          angle: angle
        });
      }
    });
  }
});