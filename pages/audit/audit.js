var Bmob = require('../../utils/bmob.js');
Page({
  data: {
    book: [],
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
  moredetails: function () {
    wx.navigateTo({
      url: '../moredetails/moredetails',
    })

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
  queryOneBook: function (key) {
    var that = this;
    var inputMsg = that.data.inputValue;
    var options = {
      url: config.clubApi.list,
      data: {
        appkey: config.appKey,
        type: 'bookLibrary',
        key: key
      }
    };
    util.request(options, (res, err) => {
      var books = [];
      for (var i = 0; i < res.data.result.length; i++) {
        books.push(res.data.result[i].value);
      }
      that.setData({
        bookList: books
      });
    });

  },
  aus: function () {
    wx.showModal({
      title: '提示',
      content: '确认通过审核',
      success: function (res) {
        if (res.confirm) {//这里是点击了确定以后
          wx.showModal({
            title: '提示',
            content: '通过审核',
          })
          console.log('审核通过')
        } else {//这里是点击了取消以后
        wx.showModal({
          title: '提示',
          content: '审核取消',
        })
          console.log('用户点击取消')
        }
      }
    })
    console.log('审核结束')
  },
  auf: function () {
    wx.showModal({
      title: '提示',
      content: '确认审核不通过',
      success: function (res) {
        if (res.confirm) {//这里是点击了确定以后
          wx.showModal({
            title: '提示',
            content: '确认审核不通过',
          })
          console.log('确认审核不通过')
        } else {//这里是点击了取消以后
          wx.showModal({
            title: '提示',
            content: '审核取消',
          })
          console.log('审核不通过')
        }
      }
    })
    console.log('审核结束')
  },
  
})