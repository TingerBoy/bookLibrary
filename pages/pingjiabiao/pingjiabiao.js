Page({

  data: {
    evaluate_contant: ['商品评价', '满意度'],
    stars: [0, 1, 2, 3, 4],
    normalSrc: '../../images/star1.png',
    selectedSrc: '../../images/star3.png',
    halfSrc: '../../images/star3.png',
    score: 0,
    scores: [0, 0, 0],
  },

  // 提交事件
  submit_evaluate: function () {
    wx.showModal({

      title: '提示',

      content: '确认提交评价',

      success: function (res) {

        if (res.confirm) {//这里是点击了确定以后

          console.log('用户点击确定')

        } else {//这里是点击了取消以后

          console.log('用户点击取消')

        }

      }

    })
    console.log('评价得分' + this.data.scores)
  },
  

  //点击左边,半颗星
  selectLeft: function (e) {
    var score = e.currentTarget.dataset.score
    if (this.data.score == 0.5 && e.currentTarget.dataset.score == 0.5) {
      score = 0;
    }

    this.data.scores[e.currentTarget.dataset.idx] = score,
      this.setData({
        scores: this.data.scores,
        score: score
      })

  },

  //点击右边,整颗星
  selectRight: function (e) {
    var score = e.currentTarget.dataset.score

    this.data.scores[e.currentTarget.dataset.idx] = score,
      this.setData({
        scores: this.data.scores,
        score: score
      })
  }
})