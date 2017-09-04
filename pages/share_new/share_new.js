let app = getApp()
let util = require('../../utils/util_new_new')
let ajax = require('../../network/ajax')

let refreshing = false, refreshed = false, loadingMore = false, loadedEnd = false

Page({
  data: {
    timeline: []
  },
  onReady() {
    this.getTimeline()   
  },

  onLoad: function(option) {
        // 获取接收到的id值
        var getId = option.id;
        // 让接收到的id值传递到data:{}里面
        this.setData({
            currentId: getId
        });
        var cache = wx.getStorageSync('cache_key');
        // 如果缓存状态存在
        if (cache) {
            // 拿到所有缓存状态中的1个
            var currentCache = cache[getId];
            // 把拿到的缓存状态中的1个赋值给data中的collection，如果当前文章没有缓存状态，currentCache 的值就是 false，如果当前文章的缓存存在，那么 currentCache 就是有值的，有值的说明 currentCache 的值是 true
            this.setData({
                collection: currentCache,
            })
        } else {
            // 如果所有的缓存状态都不存在 就让不存在的缓存存在
            var cache = {};
            // 既然所有的缓存都不存在，那么当前这个文章点赞的缓存也不存在，我们可以把当前这个文章点赞的缓存值设置为 false
            cache[getId] = false;
            // 把设置的当前文章点赞放在整体的缓存中
            wx.setStorageSync('cache_key',cache);
        }
    },


     toCollect: function(event) {
        // 获取所有的缓存
        var cache = wx.getStorageSync('cache_key');
        console.log('aldhakdklas');
        // 获取当前文章是否被点赞的缓存
        var currentCache = cache[this.data.currentId];
        // 取反，点赞的变成未点赞 未点赞的变成点赞
        currentCache = !currentCache;
        // 更新cache中的对应的1个的缓存值，使其等于当前取反的缓存值
        cache[this.data.currentId] = currentCache;
        // 重新设置缓存
        wx.setStorageSync('cache_key',cache);
        // 更新数据绑定,从而切换图片
        this.setData({
            // collection 默认的是 false
            collection: currentCache,
            sour: currentCache? "/Image/diet_b.png" : "/Image/home_b.png"
        });
        // 交互反馈
        wx.showToast({
            title: currentCache?'点赞':'取消',
            icon: 'success',
            duration: 1000
        });
    }
})

  // onPullDownRefresh() {
  //   if (refreshing) return false

  //   refreshing = true
  //   ajax({
  //     //url: 'refresh_timeline.json',
  //     success: res => {
  //       if (refreshed) {
  //         wx.showToast({
  //           title: '没有刷出新消息哦！'
  //         })
  //       } else {
  //         let timeline = this.formatTimeline(res.data)
  //         this.setData({
  //           timeline: [...timeline, ...this.data.timeline]
  //         })
  //       }
  //     },
  //     complete: _ => {
  //       refreshing = false
  //       refreshed = true
  //       wx.stopPullDownRefresh()
  //     }
  //   })
  // },
  // scrollToLower() {
  //   if (loadingMore || loadedEnd) return false

  //   loadingMore = true
  //   ajax({
  //     //url: 'more_timeline.json',
  //     success: res => {
  //       let timeline = this.formatTimeline(res.data)
  //       this.setData({
  //         timeline: [...this.data.timeline, ...timeline]
  //       })
  //     },
  //     complete: _ => {
  //       loadingMore = false
  //       loadedEnd = true
  //     }
  //   })
  // },
  // getTimeline() {
  //   wx.showToast({
  //     title: 'loading...',
  //     icon: 'loading'
  //   })
  //   ajax({
  //     //url: 'timeline.json',
  //     success: res => {
  //       let timeline = this.formatTimeline(res.data)
  //       this.setData({
  //         timeline: timeline
  //       })
  //     },
  //     complete: _ => {
  //       wx.hideToast()
  //     }
  //   })
  // },
  // formatTimeline(items) {
  //   items.forEach(item => {
  //     item.avatar = util.getAvatarUrl(item.avatar)
  //     item.time = util.timeFormat(item.created_at)
  //     return item
  //   })
  //   return items
  // },
  // previewImage(event) {
  //   wx.previewImage({
  //     current: '',
  //     //urls: [event.target.dataset.originalPic]
  //   })
  // }
//})
