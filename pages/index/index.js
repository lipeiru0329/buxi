//index.js
//获取应用实例
var app = getApp()
var temp = app.globalData.num
var data_student = (wx.getStorageSync('Student_data') || [])

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

    Fre_Type: ['一周一次', '一周两次', '一周三次', '一周四次','一周五次'],
    Fre_TypeIndex: 0,

    hour_Type: ['1.5h', '2h', '2.5h', '3h'],
    hour_TypeIndex: 0,

    name_input: '',
    contact_number_input: 0,
    faculty_Input: '',
    year_Input: '',
    module_Input: '',
    require_Input: '',
    Fee_Input: '',
    tot_Input: 0,
    require_time_Input: '',
    require_place_Input: '',
    //tot_Input: '',
    module_before: data_student.module_save,
    tot_before: data_student.tot_save,
    tot_number: temp,

    other_Input: '',

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


  nameInput: function (e) {
    this.setData({
      name_input: e.detail.value
    })
  },

  Fre_bindPickerChange: function (e) {
    let _this = this;
    _this.setData({
      Fre_TypeIndex: e.detail.value
    })
  },

  hour_bindPickerChange: function (e) {
    let _this = this;
    _this.setData({
      hour_TypeIndex: e.detail.value
    })
  },

  contactnumberInput: function (e) {
    this.setData({
      contact_number_input: e.detail.value
    })
  },


  facultyInput: function (e) {
    this.setData({
      faculty_Input: e.detail.value
    })
  },


  yearInput: function (e) {
    let _this = this;
    _this.setData({
      year_Input: e.detail.value
    })
  },



  moduleInput: function (e) {
    this.setData({
      module_Input: e.detail.value
    })
  },

  requireInput: function (e) {
    this.setData({
      require_Input: e.detail.value
    })
  },

  FeeInput: function (e) {
    this.setData({
      Fee_Input: e.detail.value
    })
  },

  totInput: function (e) {
    this.setData({
      tot_Input: e.detail.value
    })
  },

  require_timeInput: function (e) {
    this.setData({
      require_time_Input: e.detail.value
    })
  },

  require_placeInput: function (e) {
    this.setData({
      require_place_Input: e.detail.value
    })
  },

  otherInput: function (e) {
    this.setData({
      other_Input: e.detail.value
    })
  },



  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
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
    let _this = this;
    var _name = _this.data.name_input;
    let _number = _this.data.contact_number_input;
    var _faculty = this.data.faculty_Input;
    var _year = _this.data.year_Input;
    var _module = this.data.module_Input;
    var _require = _this.data.require_Input;
    let _Free = _this.data.Fee_Input;
    var _tot = this.data.tot_Input;
    var _require_time = this.data.require_time_Input;
    var _require_place = _this.data.require_place_Input;
    let _other = _this.data.other_Input;

    var _module_before = this.data.module_before;
    var _tot_before = this.data.tot_before;
    //var _tot = app.globalData.;

    //const len = this.data.modules.length

    // wx.navigateTo({
    //   url: '../logs/logs?type=1'
    // });
    // return false;
    //console.log('Hello World', _time_tot);

    if (
      typeof (_name) == 'undefined' || !_name ||
      typeof (_number) == 'undefined' || !_number ||
      typeof (_faculty) == 'undefined' || !_faculty ||
      typeof (_year) == 'undefined' || !_year ||
      typeof (_module) == 'undefined' || !_module ||
      typeof (_year) == 'undefined' || !_year ||
      typeof (_require) == 'undefined' || !_require ||
      typeof (_Free) == 'undefined' || !_Free ||
      //typeof (_tot) == 'undefined' || !_tot ||
      typeof (_require_time) == 'undefined' || !_require_time ||
      typeof (_require_place) == 'undefined' || !_require_place ||
      typeof (_other) == 'undefined' || !_other) {//!_this.data.Phy) {
      wx.showModal({
        title: '提示',
        content: '请输入全部信息',
        showCancel: false
      });
      return false;
    }
    else {

      _module_before = _module_before + ' ' +  _module;
      _tot = _tot_before + ' ' + _tot;
      temp++;
      app.globalData.num = temp;

      var Student_data = {
        name_save: _name,
        number_save: _number,
        faculty_save: _faculty,
        year_save: _year,
        module_save: _module_before,
        Fre_save: this.data.Fre_Type[this.data.Fre_TypeIndex],
        hour_save: this.data.hour_Type[this.data.hour_TypeIndex],
        require_save: _require,
        Free_save: _Free,
        tot_save: _tot,
        require_time_save: _require_time,
        require_place_save: _require_place,
        other_save: _other,
        tot_now: temp,

      }

      wx.setStorageSync('Student_data', Student_data);

      console.log(temp);
      console.log('姓名' + _name);
      console.log('联系电话' + _number);
      console.log('所在学院' + _faculty);
      console.log('所在年级', _year);
      console.log('科目需求' + _module_before);
      console.log('上课频率' + this.data.Fre_Type[this.data.Fre_TypeIndex]);
      console.log('上课时长' + this.data.hour_Type[this.data.hour_TypeIndex]);
      console.log('家教要求' + _require);
      console.log('课时费要求', _Free);
      console.log('预计补习时长' + _tot);
      console.log('上课时间要求' + _require_time);
      console.log('执教经历' + _require_place);
      console.log('其他要求' + _other);

    }
  }
})
