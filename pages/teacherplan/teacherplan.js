var Bmob = require('../../utils/bmob.js');
var plan = [{
  weekly: '', //周次
  content: '', //教学内容
  target: '', //教学目标
  examination: '', //考核方式
  homework: '', //课外作业
  note: '',//备注
}]
Page({
  data: {
    book: [],
    plan: plan
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.queryAllBorrowBooks();
    //获取本地缓存的教学计划数据
    try {
      var value1 = wx.getStorageSync('weekly')
      var value2 = wx.getStorageSync('content')
      var value3 = wx.getStorageSync('target')
      var value4 = wx.getStorageSync('examination')
      var value5 = wx.getStorageSync('homework')
      var value6 = wx.getStorageSync('note')
      if (value1) {
        //打印获取数据
        console.log(value1, value2, value3, value4, value5, value6)
        //给原来数据赋值
        this.setData({
          weekly:value1,
          content:value2,
          target:value3,
          examination:value4,
          homework:value5,
          note:value6
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
  queryAllBorrowBooks: function () {
    var that = this;
    const query = Bmob.Query("textbook_info");
    query.find().then(res => {
      //console.log(res)
      that.setData({
        book: res
      })
    });
  },
  
})