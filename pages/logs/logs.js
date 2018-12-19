//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    that.setData({
      //wx.getStorageSync('logs'):从本地缓存中同步获取指定 key 对应的内容。
      //map:在阵列的每个元素上调用一个已定义的回调函数，并返回包含结果的数组。
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        //获取格式化的时间用 util.formatTime(new Date)
        return util.formatTime(new Date(log))
      })
    })
  }
})
