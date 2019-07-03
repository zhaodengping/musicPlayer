let baseUrl =`http://musicapi.leanapp.cn`
import { showFail} from './util.js'
export default function http({method='GET',url,data}){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: `${baseUrl}${url}`,
      method,
      data,
      header: { 'Content-Type': 'application/x-www-form-urlencoded'},
      success:res=>{
        if(res.data.code==200){
          resolve(res.data)
        }else{
          console.log(res)
        }
      },
      fail:err=>{
        showFail(err.errMsg)
      },
      complete:err=>{
        wx.hideLoading()
      }
    })
  })
}