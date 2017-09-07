//detail.js
//获取应用实例
var app = getApp()
var temp = app.globalData.num
var data_student = (wx.getStorageSync('Student_data') || [])
var data_like = (wx.getStorageSync('Like_data') || [])

Page({
  onShareAppMessage: function () {
    return {
      title: 'Student_Information',
      desc: 'Student_Information'
    }
  },
  data: {
    // motto: 'Hello World',
    userInfo: {},
    titImg: '/Image/p1-tit.png',

    Fre_Type: ['一周一次', '一周两次', '一周三次', '一周四次', '一周五次'],
    Fre_TypeIndex: 0,

    hour_Type: ['1.5h', '2h', '2.5h', '3h'],
    hour_TypeIndex: 0,

    name_data: data_student.name_save,
    contactnumber_data: data_student.number_save,
    faculty_data: data_student.faculty_save,
    year_data: data_student.year_save,
    //module_data: data_student.module_save,
    Fre_data: data_student.Fre_save,
    hour_data: data_student.hour_save,
    Gen_re_data: data_student.require_save,
    Free_re_data: data_student.Free_save,
    //time_tot_data: data_student.tot_save,
    require_time_data: data_student.require_time_save,
    require_place_data: data_student.require_place_save,
    other_data_student: data_student.other_save,

    like_data: data_like.like_now,

    // CheckBox
    inputContent: {},
    modules: {},
    len: 0,


    button: {
      defaultSize: 'default',
      disabled: false,
      plain: false,
      loading: false
    }
  },






  //事件处理函数

  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo,
        module_data: data_student.module_save,
        time_tot_data: data_student.tot_save,


      })
    })
    /*pageObject = {
      data: {
        //modules: [],
          name,
          price,
          contact_number
      }
    }*/
  },

  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);
    // console.log('checkbox发生change事件，携带value值为：', e.detail.value);
    let _this = this;
    _this.setData({
      modules: e.detail.value,
      len: e.detail.value.length
      //modules: e.detail.value
    });
    //console.log('checkbox发生change事件，携带value值为：', len);
    // pageObject.data['modules'].push(e.detail.value);
  },

  find(e) {
    

    //const len = this.data.modules.length

    // wx.navigateTo({
    //   url: '../logs/logs?type=1'
    // });
    // return false;
    //console.log('Hello World', _time_tot);

  

    
  },
  like(e){
    var data_like = (wx.getStorageSync('Like_data') || []);
    var _like = data_like.like_now;
    console.log(_like);
    if(_like != 1){
      _like = 1;
    }
    else{
      _like = 0;
    }
    console.log('Come');
    this.setData({
      // collection 默认的是 false
      current: _like
      //sour: currentCache ? "/Image/diet_b.png" : "/Image/home_b.png"
    });
    console.log(_like);
    var Like_data = {
      like_now: _like
    }
    console.log(_like);
    wx.setStorageSync('Like_data', Like_data);
  }
})
