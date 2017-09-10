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
    tot_Input: '',
    require_time_Input: '',
    require_place_Input: '',
    //tot_Input: '',
    module_before: '',
    //module_before: data_student.module_save,
    tot_before: '',
    //tot_before: data_student.tot_save,
    tot_number: temp,

    other_Input_student: '',

    sex_Type: ['男', '女'],
    sex_TypeIndex: 0,

    education_Type: ['JC', 'Poly', 'Bachelor', 'Master', 'PHD'],
    education_TypeIndex: 0,

    name_input: '',
    Fin_Input: '',
    contact_number_input: 0,
    outcome_Input: '',
    history_Input: '',
    other_Input_Teacher: '',

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

  otherInput_Student: function (e) {
    this.setData({
      other_Input_Student: e.detail.value
    })
  },

  sex_bindPickerChange: function (e) {
    let _this = this;
    _this.setData({
      sex_TypeIndex: e.detail.value
    })
  },

  FinInput: function (e) {
    this.setData({
      Fin_Input: e.detail.value
    })
  },


  contactnumberInput: function (e) {
    this.setData({
      contact_number_input: e.detail.value
    })
  },


  education_bindPickerChange: function (e) {
    let _this = this;
    _this.setData({
      education_TypeIndex: e.detail.value
    })
  },



  outcomeInput: function (e) {
    this.setData({
      outcome_Input: e.detail.value
    })
  },

  historyInput: function (e) {
    this.setData({
      history_Input: e.detail.value
    })
  },

  otherInput_Teacher: function (e) {
    this.setData({
      other_Input_Teacher: e.detail.value
    })
  },



  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
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

  onLoad: function () {
    console.log('onLoad')
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
      time_tot_data: data_student.tot_save,

    });

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

  find_student(e) {
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
    let _other_Student = _this.data.other_Input_Student;


    // var _Fin = this.data.Fin_Input;
    // var _outcome = _this.data.outcome_Input;
    // var _history = this.data.history_Input;
    // let _other_Teacher = _this.data.other_Input_Teacher;

    var _module_before = this.data.module_before;
    var _tot_before = this.data.tot_before;
    //var _tot = app.globalData.;

    //const len = this.data.modules.length

    // wx.navigateTo({
    //   url: '../logs/logs?type=1'
    // });
    // return false;
    //console.log('Hello World', _time_tot);

    // console.log('姓名' + _name);
    // console.log('联系电话' + _number);
    // console.log('所在学院' + _faculty);
    // console.log('所在年级', _year);
    // console.log('科目需求' + _module_before);
    // console.log('上课频率' + this.data.Fre_Type[this.data.Fre_TypeIndex]);
    // console.log('上课时长' + this.data.hour_Type[this.data.hour_TypeIndex]);
    // console.log('家教要求' + _require);
    // console.log('课时费要求', _Free);
    // console.log('预计补习时长' + _tot);
    // console.log('上课时间要求' + _require_time);
    // console.log('执教经历' + _require_place);
    // console.log('其他要求' + _other_Student);

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
      typeof (_other_Student) == 'undefined' || !_other_Student) {//!_this.data.Phy) {
      wx.showModal({
        title: '提示',
        content: '请输入全部信息',
        showCancel: false
      });
      return false;
    }
    else {

      // if (_module_before == '')
      // {
         _module_before = _module;
      // }
      // else{
      //   _module_before = _module_before + ' ' + _module;
      // }
      // _tot = _tot_before + ' ' + _tot;
      temp++;
      app.globalData.num = temp;

      console.log('temp' + temp);

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
        other_save: _other_Student,
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
      console.log('其他要求' + _other_Student);

    }
  },


  find_teacher(e) {
    let _this = this;
    var _name = _this.data.name_input;
    let _number = _this.data.contact_number_input;
    var _Fin = this.data.Fin_Input;
    var _outcome = _this.data.outcome_Input;
    var _history = this.data.history_Input;
    let _other_teacher = _this.data.other_Input_Teacher;


    //const len = this.data.modules.length

    // wx.navigateTo({
    //   url: '../logs/logs?type=1'
    // });
    // return false;
    //console.log('Hello World', _time_tot);
    // console.log('姓名' + _name);
    // console.log('联系电话' + _number);
    // console.log('教员NRIC/FIN' + _Fin);
    // console.log('教员性别', this.data.sex_Type[this.data.sex_TypeIndex]);
    // console.log('教员学历' + this.data.education_Type[this.data.education_TypeIndex]);
    // console.log('教员成绩' + _outcome);
    // console.log('执教经历' + _history);
    // console.log('其他要求' + _other_teacher);

    if (
      typeof (_name) == 'undefined' || !_name ||
      typeof (_number) == 'undefined' || !_number ||
      typeof (_Fin) == 'undefined' || !_Fin ||
      typeof (_outcome) == 'undefined' || !_outcome ||
      typeof (_history) == 'undefined' || !_history ||
      typeof (_other_teacher) == 'undefined' || !_other_teacher) {//!_this.data.Phy) {
      wx.showModal({
        title: '提示',
        content: '请输入全部信息',
        showCancel: false
      });
      return false;
    }
    else {


      var Teacher_data = {
        name_save: _name,
        number_save: _number,
        NRIC_save: _Fin,
        sex_save: this.data.sex_Type[this.data.sex_TypeIndex],
        education_save: this.data.education_Type[this.data.education_TypeIndex],
        outcome_save: _outcome,
        history_save: _history,
        other_save: _other_teacher,

      }

      wx.setStorageSync('Teacher_data', Teacher_data);


      console.log('姓名' + _name);
      console.log('联系电话' + _number);
      console.log('教员NRIC/FIN' + _Fin);
      console.log('教员性别', this.data.sex_Type[this.data.sex_TypeIndex]);
      console.log('教员学历' + this.data.education_Type[this.data.education_TypeIndex]);
      console.log('教员成绩' + _outcome);
      console.log('执教经历' + _history);
      console.log('其他要求' + _other_teacher);

    }
  }
})
