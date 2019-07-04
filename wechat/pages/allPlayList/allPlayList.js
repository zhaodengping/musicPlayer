// pages/allPlayList/allPlayList.js
import http from '../../utils/http.js'
import {
  showLoading
} from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allTags: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    showLoading()
    this.getAllTags()
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
  getAllTags() {
    let url = {
      url: `/playlist/catlist`
    };
    http(url).then(res => {
      let categories = res.categories;
      let sub = res.sub;
      let allTags = [];
      for (let i in categories) {
        allTags.push({
          category: i,
          name: categories[i],
          sub: []
        })
      }
      sub.forEach((item, index) => {
        allTags.forEach((item2, index2) => {
          if (item.category == item2.category) {
            item2.sub.push({
              name: item.name,
              hot: item.hot
            })
          }
        })
      })
      this.setData({
        allTags: allTags
      })
    })
  },
  selectTags(e) {
    let item = e.currentTarget.dataset.tagsitem;
    let name = item.name;
    let hot=item.hot
    wx.setStorageSync("tagName", name)
    if(hot){
      wx.navigateBack({
        delta: 2
      })
    }else{
      wx.navigateTo({
        url: '../otherPlayList/otherPlayList',
      })
    }    
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
    wx.removeStorageSync("tagName")
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