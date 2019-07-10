// pages/songs/songs.js
import http from '../../utils/http.js'
import { showLoading, changeNumberUnit} from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    songId:"",
    playList:null,
    play:{
      number:0,
      flag:0
    },
    commentCount:0,
    shareCount:0,
    trackCount:0,
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
      let { number, flag } = changeNumberUnit(res.playlist.playCount)
      let play={
        number,
        flag:flag
      }
      this.setData({
        playList:res.playlist,
        play,
        commentCount: res.playlist.commentCount,
        shareCount:res.playlist.shareCount,
        trackCount: res.playlist.trackCount
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