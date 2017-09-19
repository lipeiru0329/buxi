//index.js
//获取应用实例
const app = getApp()
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

    sex_Type: ['男', '女'],
    sex_TypeIndex: 0,

    education_Type: ['JC', 'Poly', 'Bachelor', 'Master', 'PHD'],
    education_TypeIndex: 0,

    name_input: '',
    Fin_Input: '',
    contact_number_input: 0,
    outcome_Input: '',
    history_Input: '',
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
    var _Fin = this.data.Fin_Input;
    var _outcome = _this.data.outcome_Input;
    var _history = this.data.history_Input;
    let _other = _this.data.other_Input;


    //const len = this.data.modules.length

    // wx.navigateTo({
    //   url: '../logs/logs?type=1'
    // });
    // return false;
    //console.log('Hello World', _time_tot);
    if (
      typeof (_name) == 'undefined' || !_name ||
      typeof (_number) == 'undefined' || !_number ||
      typeof (_Fin) == 'undefined' || !_Fin ||
      typeof (_outcome) == 'undefined' || !_outcome ||
      typeof (_history) == 'undefined' || !_history ||
      typeof (_other) == 'undefined' || !_other) {//!_this.data.Phy) {
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
        other_save: _other,

      }

      wx.setStorageSync('Teacher_data', Teacher_data);


      console.log('姓名' + _name);
      console.log('联系电话' + _number);
      console.log('教员NRIC/FIN' + _Fin);
      console.log('教员性别', this.data.sex_Type[this.data.sex_TypeIndex]);
      console.log('教员学历' + this.data.education_Type[this.data.education_TypeIndex]);
      console.log('教员成绩' + _outcome);
      console.log('执教经历' + _history);
      console.log('其他要求' + _other);

    }
  },

  like(e) {
    var data_like = (wx.getStorageSync('Like_data') || []);
    var _like = data_like.like_now;
    var _like_save = '';
    console.log(_like);
    if (_like != 1) {
      _like = 1;
      var Teacher_data = {
        like_save: this.data.userInfo.nickName,

      }

      wx.setStorageSync('Teacher_data', Teacher_data);
    }
    else {
      _like = 0;
      var Teacher_data = {
        like_save: '',

      }

      wx.setStorageSync('Teacher_data', Teacher_data);
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
