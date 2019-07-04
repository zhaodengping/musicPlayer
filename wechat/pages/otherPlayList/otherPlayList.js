// pages/otherPlayList/otherPlayList.js
import http from '../../utils/http.js'
import { show, showLoading, changeNumberUnit} from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tagsLocal:"",
    limit:18,
    songList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    showLoading();
    this.data.tagsLocal=wx.getStorageSync("tagName")
    this.setNavigateText();
    this.getSomeSongs()
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
  setNavigateText(){
    wx.setNavigationBarTitle({
      title: `${this.data.tagsLocal}`,
    })
  },
  getSomeSongs(){
    let url = `/top/playlist?limit=${this.data.limit}&cat=${this.data.tagsLocal}`;
    http({url}).then(res=>{
      res.playlists.forEach(item=>{
        let {number,flag}=changeNumberUnit(item.playCount)
        item.newPlayCount=number;
        item.unitFlag=flag
      })
      let songList = [...this.data.songList, ...res.playlists]
      this.setData({
        songList
      })
    })
  },
  toSongsList(e){
    let songId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `../songs/songs?songIs=${songId}`,
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    wx.removeStorageSync("tagName")
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
    this.data.limit=18;
    showLoading();
    this.getSomeSongs()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (this.data.limit < 99) {//这边应该是歌曲的总条数，但是目前不知道这个字段是什么，暂时用固定值
      this.data.limit += 18;
      showLoading();
      this.getSomeSongs();
    } else {
      show();
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})