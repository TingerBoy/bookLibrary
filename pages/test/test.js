var Bmob = require('../../utils/bmob.js');

var manage;
Page({

      /**
       * 页面的初始数据
       */

      data: {
        manage1:true,
        manage2:true,
        manage3:true

      },
       test:function(){
         var value = wx.getStorageSync('manage')
           console.log(value)
             if(value==0){
               this.setData({
                 manage1:false,
                 manage2:false,
                 manage:true
               })
               console.log("A.B不显示，C显示")
             }
         console.log("manage结束")
           }
       
})