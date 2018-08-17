//查看教材信息
var Bmob = require('../../utils/bmob.js');

Page({
  data: {
    num: "sa",
    bookname: "a",
    press: "sa",
    ISBN: "asa",
    author: "asasas",
    edition: "sasas",
    publishedtime: "asas",
    price: "sas",
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.queryAllBorrowBooks();
    //获取本地缓存的教材信息
    try {
      var value1 = wx.getStorageSync('num')
      var value2 = wx.getStorageSync('bookname')
      var value3 = wx.getStorageSync('press')
      var value4 = wx.getStorageSync('ISBN')
      var value5 = wx.getStorageSync('author')
      var value6 = wx.getStorageSync('edition')
      var value7 = wx.getStorageSync('publishedtime')
      var value8 = wx.getStorageSync('price')
      if (value1) {
        console.log(value1, value2, value3, value4, value5, value6, value7, value8)
        this.setData({
          num: value1,
          bookname: value2,
          press: value3,
          ISBN: value4,
          author: value5,
          edition: value6,
          publishedtime: value7,
          price: value8,
        })
        console.log(num.bookname, press, ISBN, author, edition, publishedtime, price)
      }
      //将获取的数据进行赋值
      
    } catch (e) {
      // Do something when catch error
    }
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
    //var that = this;
    const query = Bmob.Query("textbook_info");
    query.find().then(res => {
      console.log(res)
    });
  },
  
})