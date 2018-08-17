// pages/plan/plan.js
/*var plan = [{
  weekly: '', //周次
  content: '', //教学内容
  target: '', //教学目标
  examination: '', //考核方式
  homework: '', //课外作业
  note: '',//备注
}]*/
Page({
  /**
   * 页面的初始数据*/
  data: {
    weekly: '', //周次
    content: '', //教学内容
    target: '', //教学目标
    examination: '', //考核方式
    homework: '', //课外作业
    note: '',//备注
    hideModal: true,
  },
  formSubmit: function(e) {
    /*if (e.detail.value.weekly.length == 0 || e.detail.value.content == 0 || e.detail.value.target.length == 0 ||
      e.detail.value.examination == 0 || e.detail.value.homework.length == 0 || e.detail.value.note.length == 0) {
      wx.showModal({
        title: '提示',
        content: '请确认输入完整',
      })
    } else {
    }*/
    this.setData({
      weekly: e.detail.value.weekly, //周次
      content: e.detail.value.content, //教学内容
      target: e.detail.value.target, //教学目标
      examination: e.detail.value.examination, //考核方式
      homework: e.detail.value.homework, //课外作业
      note: e.detail.value.note, //备注
      //plan: temp//数组换值
    })
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  //点击确认提交后的动作，弹窗检查信息
  clickCheck() {
    this.setData({
      hideModal: false,
      hidetextarea: true, //隐藏textarea区域，否则弹窗层无法覆盖
    })
  },
  //关闭弹窗
  modalCancel(e) {
    console.log("关闭", e)
    this.setData({
      hideModal: true,
      hidetextarea: false, //隐藏textarea区域，否则弹窗层无法覆盖  
    })
    console.log("弹窗关闭")
  },
  modalSubmit(){
    //缓存数据到本地
    try {
      wx.setStorageSync('weekly', 'e.detail.value.content')
      wx.setStorageSync('contents', 'e.detail.value.content')
      wx.setStorageSync('target', 'e.detail.value.target')
      wx.setStorageSync('examination', 'e.detail.value.examination')
      wx.setStorageSync('homework', 'e.detail.value.homework')
      wx.setStorageSync('note', 'e.detail.value.note')
      this.setData({
        hideModal: true,
        hidetextarea: false,
      })
      console.log(e.detail.value.content)
      console.log("缓存成功")
    } catch (e) {
      console.log(e)
    }
    console.log("确认提交")
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})