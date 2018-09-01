var Bmob = require('../../utils/bmob.js');
Page({
  data: {
    evaluate_contant: ['商品评价', '满意程度'],
    stars: [0, 1, 2, 3, 4],
    normalSrc: '../../images/star1.png',
    selectedSrc: '../../images/star3.png',
    halfSrc: '../../images/star3.png',
    score: 0,
    scores: [0, 0, 0],
    infofromstorage: '',
    goods: 0,
    satisfaction: 0,
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.queryAllBorrowBooks();
    var _this = this;

    //获取

    try {
      var value = wx.getStorageSync('infofrominput')
      this.data.scores[0] = wx.getStorageSync('goods')
      this.data.scores[1] = wx.getStorageSync('satisfaction')
      if (value) {
        // Do something with return value
        //打印获取数据
        console.log(value, this.data.scores[0], this.data.scores[1])
        //给原来数据赋值
        this.setData({
          infofromstorage: value,
          goods: this.data.scores[0],
          satisfaction: this.data.scores[1],
        })

      }else{
        console.log('获取失败')
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
  
 
})