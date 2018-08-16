var Bmob = require('../../utils/bmob.js');
Page({
  data: {
    book: [],
    message:[{number:'1'},{book:'C语言程序设计'},{author:'老谭'},{price:'22'},
              {press:'清华大学出版社'},{order:'第五版'},{time:'1999年12月'},
              {ISBN:'*******'}]
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.queryAllBorrowBooks();
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  queryAllBorrowBooks: function () {
    var that = this;
    const query = Bmob.Query("textbook_info");
    query.find().then(res => {
      console.log(res)
      that.setData({
        book: res
      })
    });
  },
  toOrders: function () {
    wx.navigateTo({
      url: '../List/List'
    })
  }

})