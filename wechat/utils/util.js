// 格式化时间
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 微信弹出框
function showSuccess(e="成功"){
  wx.showToast({
    title: e,
    icon: 'success',
    duration: 2000,
    mask:true
  })
}
function show(e="没有更多数据啦！"){
  wx.showToast({
    title: e,
    duration: 2000,
    mask: true
  })
}
function showFail(e="失败"){
  wx.showToast({
    title: e,
    icon: 'fail',
    duration: 2000,
    mask: true
  })
}

//loading
function showLoading(e="玩命加载中"){
  wx.showLoading({
    title: e,
    mask: true
  })
}

// 数值大于100万以100万形式展示，小于的话，为10000
function changeNumberUnit(e){
  let flag=0
  if(e){
    if(e>=1000000){
      let number = Math.floor(e / 10000) ;
      flag=1
      return {number,flag}
    }else{
      return{number:e,flag}
    }
  }else{
    return {number:0,flag}
  }
}

module.exports = {
  formatTime,
  show,
  showSuccess,
  showFail,
  showLoading,
  changeNumberUnit
}
