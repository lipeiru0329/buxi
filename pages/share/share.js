//index.js
import videosAPI from '../../api/videos.js'
import carouselsAPI from '../../api/carousels.js'

//获取应用实例
const app = getApp()
var data_student = (wx.getStorageSync('Student_data') || [])
var temp = app.globalData.num


Page({
  // onPullDownRefresh: function () {
  //   wx.startPullDownRefresh();
  //   console.log('Sure');
  //   this.reloadVideos();
  //   this.initZan();
  // },

  data: {
    //videos: videosAPI.loadVideos(1, 2).data,
    hasMore: true,
    initLoading: true,
    reloading: false,
    autoplay: true,
    duration: 1000,
    interval: 5000,
    indicatorDots: true,
    videos : [],
    id : 1,
    imgUrls: [],
    userInfo: {}
  },

  //事件处理函数
  onVideoClick(event) {
    event.target.dataset.alphaBeta;
    wx.navigateTo({
      url: '../detail/detail?id=' + event.currentTarget.id 
    })    
  },

  onLoad() {
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
    this.refresh();
    this.initCarousel();
    this.initZan();
  },

  onPullDownRefresh() {
    var data_student = (wx.getStorageSync('Student_data') || [])
    console.log('Sure');
    var that = this;
    var temp = getApp();
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    });
    this.refresh();
    this.initCarousel();
    //this.reloadVideos();
    this.initZan();
    //console.log('onPullDownRefresh', new Date())
  },
  
  initZan(){
    var getId = this.data.id;
        // 让接收到的id值传递到data:{}里面
        this.setData({
            currentId: getId
        });
        var cache_num = wx.getStorageSync('cache_num');
        var cache = wx.getStorageSync('cache_key');
        // 如果缓存状态存在
        if (cache) {
            // 拿到所有缓存状态中的1个
            var currentCache = cache[getId];
            var currentCache_num = cache_num[getId];
            // 把拿到的缓存状态中的1个赋值给data中的collection，如果当前文章没有缓存状态，currentCache 的值就是 false，如果当前文章的缓存存在，那么 currentCache 就是有值的，有值的说明 currentCache 的值是 true
            this.setData({
                collection: currentCache,
                collection_num :  currentCache_num,
            })
        } else {
            // 如果所有的缓存状态都不存在 就让不存在的缓存存在
            var cache = {};
            var cache_num = {};
            // 既然所有的缓存都不存在，那么当前这个文章点赞的缓存也不存在，我们可以把当前这个文章点赞的缓存值设置为 false
            cache[getId] = false;
            cache_num[getId] = 0;
            // 把设置的当前文章点赞放在整体的缓存中
            wx.setStorageSync('cache_key',cache);
            wx.setStorageSync('cache_num', cache_num);
        }
  },

// toCollect: function(event) {
//         // 获取所有的缓存

//        /// var now_num = event.currentTarget.id;
//         var cache = wx.getStorageSync('cache_key');
//         console.log('aldhakdklas');
//         // 获取当前文章是否被点赞的缓存
//         var currentCache = cache[this.data.currentId];
//         // 取反，点赞的变成未点赞 未点赞的变成点赞
//         // if(currentCache)
//         // {
//         //  // var video_now = videosAPI.findVideo(now_num);
//         //   videosAPI.transfer(now_num, '/Image/zanzan.jpg');
//         // }
//         // else{
//         //   videosAPI.transfer(now_num, '/Image/zan.jpg');
//         // }

//         currentCache = !currentCache;
//         // 更新cache中的对应的1个的缓存值，使其等于当前取反的缓存值
//         cache[this.data.currentId] = currentCache;
//         // 重新设置缓存
//         wx.setStorageSync('cache_key',cache);
//         // 更新数据绑定,从而切换图片
//         this.setData({
//             // collection 默认的是 false
//             collection: currentCache,
//         });
//         // 交互反馈
//         wx.showToast({
//             title: currentCache? now_num:'取消',
//             //text: now_num,
//             icon: 'success',
//             duration: 1000
//         });
//        // refresh();
//     },


    toCollect: function(event) {
        // 获取所有的缓存
        var now_num = event.currentTarget.id;
        var cache = wx.getStorageSync('cache_key');
        var cache_num = wx.getStorageSync('cache_num');
        console.log('aldhakdklas');
        // 获取当前文章是否被点赞的缓存
        var currentCache = cache[1];
 
        // if(currentCache)
        // {
        //   event.currentTarget.likes = "/Image/zanzan.jpg";
        //  // var video_now = videosAPI.findVideo(now_num);
        // //   videosAPI.transfer(now_num, '/Image/zanzan.jpg');
        // // }
        // // else{
        // //   videosAPI.transfer(now_num, '/Image/zan.jpg');
        // };
        // 取反，点赞的变成未点赞 未点赞的变成点赞
        currentCache = !currentCache;
        if(currentCache)
        {
          console.log(this.data.userInfo.nickName);
          var Student_data = {
            like_save: this.data.userInfo.nickName,

          }

          wx.setStorageSync('Student_data', Student_data);
        }
        else{
          var Student_data = {
            like_save: '',

          }

          wx.setStorageSync('Student_data', Student_data);
        }
        // 更新cache中的对应的1个的缓存值，使其等于当前取反的缓存值
        cache[this.data.currentId] = currentCache;
        cache_num[this.data.currentId] = now_num;
            // 把设置的当前文章点赞放在整体的缓存中
        console.log(cache);
        wx.setStorageSync('cache_key', cache);
        wx.setStorageSync('cache_num', cache_num);
        // 重新设置缓存


        // 更新数据绑定,从而切换图片
        this.setData({
            // collection 默认的是 false
            // videos: videosAPI.loadVideos(1, 2).data,
            // page: 1,
            // initLoading: false,
            // reloading: false,
            collection: currentCache
        });
        // 交互反馈
        wx.showToast({
            title: currentCache? '喜欢':'取消',
            icon: 'success',
            duration: 1000
        });
        this.refresh();
    },
  
  initCarousel() {
    this.setData({
      imgUrls: carouselsAPI.loadCarousels()
    });
  },

  reloadVideos() {
    this.setData({ reloading: true});
    const that = this;
    setTimeout(function () { that.refresh(); }, 2000);
  },

  loadMoreVideos() {
    let that = this;
    setTimeout(() => {
      that.setData({
        videos: [...that.data.videos, ...videosAPI.loadVideos(that.data.page, 1).data],
        page: that.data.page ++
      })
    }, 1000);

  },

  refresh() {
    var temp = app.globalData.num
    console.log('now ' + temp);
    this.setData({
      videos: videosAPI.loadVideos(0, temp).data,
      page: 1,
      initLoading: false,
      reloading: false,
    });
  },

  

  onShow: function () {
      this.setData({ reloading: true });
      const that = this;
      setTimeout(function () { that.refresh(); }, 2000);
  }
})
