Component({
  data: {
    selected: null,
    color: "#333",
    selectedColor: "#d43c33",
    list: [
      {
        pagePath: "/pages/index/index",
        text: "主页",
        iconPath: "/static/images/tabs/tab-home.png",
        selectedIconPath: "/static/images/tabs/tab-home-current.png"
      },
      {
        pagePath: "/pages/video/video",
        text: "视频",
        iconPath: "/static/images/tabs/select.png",
        selectedIconPath: "/static/images/tabs/selected.png"
      },
      {
        pagePath: "/pages/personal/personal",
        text: "个人中心",
        iconPath: "/static/images/tabs/tab-my.png",
        selectedIconPath: "/static/images/tabs/tab-my-current.png"
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
    }
  }
})