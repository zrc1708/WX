// pages/map/map.js
//获取应用实例
Page({
  data: {
    latitude: 31.905230,
    longitude: 118.899870,
    markers: [{
      id: 0,
      latitude: 31.903186,
      longitude: 118.899977,
      title: '金陵科技学院图书馆',
      callout: {
        content: '金陵科技学院图书馆',
        color: '#FF0000',
        fontSize: 15,
        borderRadius: 10,
        display: 'ALWAYS',
      }
    }, {
      id: 1,
      latitude: 32.058442,
      longitude: 118.796541,
      title: '南京市市政府',
      callout: {
        content: '10月1日在南京市政府门口升国旗',
        color: '#FF0000',
        fontSize: 15,
        borderRadius: 10,
        display: 'ALWAYS',
      }
    }, {
      id: 2,
      latitude: 31.997534,
      longitude: 118.781820,
      title: '雨花台风景区',
      callout: {
        content: '4月5日在雨花台举行哀悼仪式',
        color: '#FF0000',
        fontSize: 15,
        borderRadius: 10,
        display: 'ALWAYS',
      }
    }],
  },
  bindMarkers: function (e) {
    let markid = e.markerId
    console.log(this.data.markers[markid])
  },
  bind: function (e) {
    console.log(e.currentTarget.dataset.location)
  }
})