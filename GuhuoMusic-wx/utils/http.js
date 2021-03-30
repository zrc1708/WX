export default (url)=>{
  return new Promise((resolve,reject)=>{
    wx.request({
      url:'http://www.jibei66.com:3000'+url,
      success:(res)=> {
        resolve(res.data)
      },
      fail:(err)=>{
        reject(err)
      }
    })
  })
}