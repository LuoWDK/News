var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: null,
    password: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log("Login Load")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    console.log("Login Ready")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log("Login Show")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    console.log("Login Hide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    console.log("Login Unload")
  },

  loginBtnClick: function() {
    // 用户名和密码验证的过程
    app.appData.userinfo = {
      username: this.data.username,
      password: this.data.password
    }
    wx.switchTab({
      url: '../user/user',
    })
  },

  usernameInput: function(event) {
    this.setData({
      username: event.detail.value
    })
  },

  passwordInput: function(event) {
    this.setData({
      password: event.detail.value
    })
  }
})