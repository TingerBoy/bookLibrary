var Bmob = require('../../utils/bmob.js');
Page({
  data: {
    book: [],
    plan: [{week:''},
    {teach:''},
    {goal:''},
    {exam:''},
    {homework:''},
    {remarks:''}],
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.queryAllBorrowBooks();
    //获取本地缓存的教学计划数据
    
    var plan = [{
      weekly: '', //周次
      content: '', //教学内容
      target: '', //教学目标
      examination: '', //考核方式
      homework: '', //课外作业
      note: '',//备注
    }]
    
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
  
})