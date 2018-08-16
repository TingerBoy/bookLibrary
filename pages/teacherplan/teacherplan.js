var Bmob = require('../../utils/bmob.js');
Page({
  data: {
    book: [],
    plan: [{week:'1-12'},{teach:'读教材'},{goal:'码代码'},{exam:'上机考试'},
            {homework:'教学网站'},{remarks:'无'}],
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
  
})