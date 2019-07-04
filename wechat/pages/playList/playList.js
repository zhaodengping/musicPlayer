// pages/playList/playList.js
import http from '../../utils/http.js'
import { showLoading, show} from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,
    tags:[],
    tagLocal:"",
    limit:18,
    playlists:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { 
    showLoading()
    this.getTags()
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
    if (wx.getStorageSync("tagName")) {
      this.data.tagLocal = wx.getStorageSync("tagName")
    }
    this.matchTags()
    this.getSongs()
  },
  onChange(e) {
    this.setData({
      currentTab: e.detail.key,
    })
  },
  getTags(){
    let url= `/playlist/hot`
    http({url}).then(res=>{
      this.setData({
        tags:res.tags
      })
      console.log(this.data.tags)
    })
  },
  getMoreTags(){
    wx.navigateTo({
      url: '../allPlayList/allPlayList',
    })
  },
  matchTags(){
    this.data.tags.forEach((item,index)=>{
      if(this.data.tagLocal==item.name){
        this.setData({
          currentTab: index+1
        })
        return
      }
    })
  },
  getSongs(){
    let url =`/top/playlist?limit=${this.data.limit}`;
    if (this.data.tagLocal){
      url = `${url}&tag=${this.data.tagLocal}`;
    }
    http({url}).then(res=>{
      let playlists=[...this.data.playlists,...res.playlists]
      this.setData({
        playlists
      })
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    wx.removeStorageSync("tags")
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
    console.log("下拉")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("上拉")
    if(this.data.limit<99){//这边应该是歌曲的总条数，但是目前不知道这个字段是什么，暂时用固定值
      this.data.limit += 18;
      showLoading();
      this.getSongs();
    }else{
      show();
    }
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})