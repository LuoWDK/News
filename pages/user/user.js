var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log("User Load")
    if (app.appData.userinfo == null) {
      wx.redirectTo({
        url: '../login/login',
      })
    } else {
      this.setData({
        username: app.appData.userinfo.username
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    console.log("User Ready")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log("User Show")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    console.log("User Hide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    console.log("User Unload")
  }
})