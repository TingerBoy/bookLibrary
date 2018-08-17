//查看教材信息
var Bmob = require('../../utils/bmob.js');
var messsge=[{
  number: "",
  bookname: "",
  press: "",
  ISBN: "",
  author: "",
  edition: "",
  publishedtime: "",
  price: "",
}]
Page({
  data: {
      message:messsge
  },

  /*queryAllBorrowBooks: function () {
    //var that = this;
    const query = Bmob.Query("textbook_info");
    query.find().then(res => {
      console.log(res)
      this.setData({
        num:res[0].objectId,
        bookname:res[0].name,
        press:res[0].press,
        ISBN: res[0].ISBN,
        author: res[0].author,
        edition: res[0].layout,
        publishedtime: res[0].pub_year,
        price: res[0].price
      })
    });
  },
  */
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    //this.queryAllBorrowBooks();
    //获取本地缓存的教材信息

    try {
      var value1 = wx.getStorageSync('number')
      var value2 = wx.getStorageSync('bookname')
      var value3 = wx.getStorageSync('press')
      var value4 = wx.getStorageSync('ISBN')
      var value5 = wx.getStorageSync('author')
      var value6 = wx.getStorageSync('edition')
      var value7 = wx.getStorageSync('publishedtime')
      var value8 = wx.getStorageSync('price')
      if (value1) {
        //打印获取数据
        console.log(value1, value2, value3, value4, value5, value6,value7,value8)
        //给原来数据赋值
        this.setData({
          number: value1,
          bookname: value2,
          press: value3,
          ISBN: value4,
          author: value5,
          edition: value6,
          publishedtime:value7,
          price:value8
        })
        //打印赋值后内容
        console.log(weekly, content, target, examination, homework, note)
        // Do something with return value
      } else {
        console.log("获取失败")
      }
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
  
})