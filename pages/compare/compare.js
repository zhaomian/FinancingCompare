// pages/compare/compare.js
let app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showList: []//app.globalData.showList
  },

  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '产品列表',
    })
  },

  onShow:function () {
    this.setShowList()
  },

  onTapCompareItem(e) {
    let id = e.currentTarget.dataset.index
    wx.navigateTo({
      url: '/pages/manual/manual?index=' + id,
    })
  },

  onTapAddMore() {
    let newList = this.data.showList
    newList.push({
      incomeText: "添加",
      income: "+",
      productName: "",
      rate: "",
      deadline: "",
      money: "",
      id: this.data.showList.length,})
    this.setData ({
      showList: newList
    })
  },

  setShowList() {
    this.setData({
      showList: app.globalData.showList
    })
  },

  onTapDeleteItem(e) {
    let index = e.currentTarget.dataset.index
    let newList = this.data.showList
    newList.splice(index,1)
    this.setData ({
      showList: newList
    })
  }
})