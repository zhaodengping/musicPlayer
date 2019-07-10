// pages/songs/songs.js
import http from '../../utils/http.js'
import {showLoading} from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    songId:"",
    playList:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    showLoading();
    this.data.songId=options.songId;
    this.getSongs()
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
  getSongs(){
    let url =`/playlist/detail?id=${this.data.songId}`;
    http({url}).then(res=>{
      this.setData({
        playList:res.playlist
      })
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