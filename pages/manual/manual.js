// pages/manual/manual.js
let app = getApp()

Page({

  data: {
    productName:"汇金",
    rate:"10",
    deadline:"12",
    money:"10000",
    income:"1000",
    incomeUnit:"单位（元）",
    index:0,
  },

  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '产品信息页'
    })
    
    if (options.index) {
      this.setData({
        index: options.index
      })
    }
  },

  onTapConfirmButton() {
    let rateNum = this.data.rate / 100
    let deadlineNum = this.data.deadline / 12
    let moneyNum = this.data.money
    let income = rateNum * deadlineNum * moneyNum
    this.setData({
      income: income,
      incomeUnit: "单位（元）"
    })
  },

  returnProductName: function(e) {
    this.setData({
      productName: e.detail.value
    })
  },

  returnRate: function(e) {
    this.setData({
      rate: e.detail.value
    })
  },

  returnDeadline: function(e) {
    this.setData({
      deadline: e.detail.value
    })
  },

  returnMoney: function(e) {
    this.setData({
      money: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    let showItem = {
      incomeText:"收益",
      income: this.data.income + "元",
      productName: this.data.productName,
      rate: this.data.rate,
      deadline: this.data.deadline,
      money: this.data.money,
    }
    app.globalData.showList[this.data.index] = showItem    
  },

})