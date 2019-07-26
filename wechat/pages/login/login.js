// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loginInfo:{
      phone:"",
      password:""
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  onChange(e){
    let allValues=e.detail.allValues;
    this.data.loginInfo.phone=allValues.phone;
    this.data.loginInfo.password=allValues.password;
  },
  login(){
    console.log("登陆")
    wx.switchTab({
      url: '../home/home',
    })
  },
  toReg(){
    wx.navigateTo({
      url: '../reg/reg',
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})