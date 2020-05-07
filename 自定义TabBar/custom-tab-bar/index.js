const app = getApp();
Component({
  //数据
  data: {
    selected: 0,//当前tabBar页面
    color: "#cdcdcd",//未选中tabBar时的文字颜色
    selectedColor: "#22385d",//选中时tabBar文字颜色
    addImgPath:'/image/icon_component.png',//添加发布图标
    // tabBar对象集合
    list: [
      {
        pagePath: "/pages/index/index",
        iconPath: "/image/icon_API.png",
        selectedIconPath: "/image/icon_API_HL.png",
        text: "发现"
      },
      {
        pagePath: "/pages/index2/index2",
        iconPath: "/image/icon_API.png",
        selectedIconPath: "/image/icon_API_HL.png",
        text: "专栏"
      },
      {
        pagePath: "/pages/index3/index3",
        iconPath: "/image/icon_API.png",
        selectedIconPath: "/image/icon_API_HL.png",
        text: "消息"
      },
      {
        pagePath: "/pages/index4/index4",
        iconPath: "/image/icon_API.png",
        selectedIconPath: "/image/icon_API_HL.png",
        text: "我的"
      }
    ]
  },
  methods: {
    // tabBar切换事件
    tab_bar_index(e) {
      const url = e.currentTarget.dataset.path
      wx.switchTab({url})
    },
  }
})