// pages/user/user.js
const app = getApp()
var data_student = (wx.getStorageSync('Student_data') || [])
var data_teacher = (wx.getStorageSync('Teacher_data') || [])
Page({

  /**
   * 页面的初始数据
   */
  data: {


      showtab: 0,  //顶部选项卡索引
      showtabtype: '', //选中类型
      tabnav: {},  //顶部选项卡数据
      startx: 0,  //开始的位置x
      endx: 0, //结束的位置x
      critical: 100, //触发切换标签的临界值
      marginleft: 0,  //滑动距离
      //module_data: "Phy",
      currentTab: 0, 
      winWidth: 0,
      winHeight: 0,
      // tab切换  
      currentTab: 0,
      //name_data: '1',
      //name2_data: '2',
      name_data: data_student.name_save,
      contactnumber_data: data_student.number_save,
      faculty_data: data_student.faculty_save,
      year_data: data_student.year_save,
      //module_data: data_student.module_save,
      Fre_data: data_student.Fre_save,
      hour_data: data_student.hour_save,
      Gen_re_data: data_student.require_save,
      Free_re_data: data_student.Free_save,
      time_tot_data: data_student.tot_save,
      require_time_data: data_student.require_time_save,
      require_place_data: data_student.require_place_save,
      other_data_student: data_student.other,


      NRIC_data: data_teacher.NRIC_save,
      sex_data: data_teacher.sex_save,
      education_data: data_teacher.education_save,
      hisory_data: data_teacher.history_save,
      outcome_data: data_teacher.outcome_save,
      other_data_teacher: data_teacher.other_save,

  
  },

  bindChange: function (e) {
    var that = this;
    that.setData({ 
      module_data: data_student.module_save,

      currentTab: e.detail.current });
  }, 

  swichNav: function (e) {
    var that = this;
    var data_student = (wx.getStorageSync('Student_data') || []);
    var data_teacher = (wx.getStorageSync('Teacher_data') || []);
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        

          module_data: data_student.module_save,
        currentTab: e.target.dataset.current
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this;
    var temp = getApp();
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    });

    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });


    this.setData({

      module_data: data_student.module_save,

    });
    // setTab:function (e) { //设置选项卡选中索引
    //   const edata = e.currentTarget.dataset;
    //   this.setData({
    //     showtab: Number(edata.tabindex),
    //     showtabtype: edata.type
    //   })
    //   this.fetchTabData(edata.tabindex);
    // }
    //   //this.fetchTabData(0);
            

              
  },

    /** */
    //this.fetchTabData(0);

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({

      module_data: data_student.module_save,


    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({

      module_data: data_student.module_save,


    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.setData({

      module_data: data_student.module_save,


    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    this.setData({

      module_data: data_student.module_save,


    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

    var data_student = (wx.getStorageSync('Student_data') || []);
    var data_teacher = (wx.getStorageSync('Teacher_data') || []);
    this.setData({

      module_data: data_student.module_save,


    });
  },


  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({

      module_data: data_student.module_save,


    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})