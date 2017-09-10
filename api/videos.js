const app = getApp()
var videos = {
    "data": [
    {
        "id": 369,
        "title": "Simulation 2 d'entretien d'embauche, de recrutement, se présenter",
        "likes": "/Image/zan.jpg",
        "views": "178",
        "free": "0",
        "avatar": "http://o9dnc9u2v.bkt.clouddn.com/videos/DW1K0XiwemI-1.jpg",
        "slug": "simulation-2-d-entretien-d-embauche-de-recrutement-se-presenter",
        "duration": "01:53",
        "youtubeId": "DW1K0XiwemI",
        "state": "8",
        "level": "beginner"
    },
    {
        "id": 214,
        "title": "Le Mot du champion : Homonyme",
        "likes": "/Image/zan.jpg",
        "views": "246",
        "free": "0",
        "avatar": "http://o9dnc9u2v.bkt.clouddn.com/videos/mMHpEEU5tTk-1.jpg",
        "slug": "le-mot-du-champion-homonyme",
        "duration": "02:17",
        "youtubeId": "mMHpEEU5tTk",
        "state": "8",
        "level": "beginner"
    },
    {
        "id": 121,
        "title": "Cyprien - Pourquoi YouTube bloque à 301 vues",
        "likes": "/Image/zan.jpg",
        "views": "223",
        "free": "0",
        "avatar": "http://o9dnc9u2v.bkt.clouddn.com/videos/d3GlXEZJsRg-1.jpg",
        "slug": "cyprien-pourquoi-youtube-bloque-a-301-vues",
        "duration": "03:27",
        "youtubeId": "d3GlXEZJsRg",
        "state": "8",
        "level": "beginner"
    },
    {
        "id": 378,
        "title": "Stratégies de mise en ligne pour les chaînes de jeux vidéo sur YouTube",
        "likes": "/Image/zan.jpg",
        "views": "155",
        "free": "0",
        "avatar": "http://o9dnc9u2v.bkt.clouddn.com/videos/wMqPyVnqDMw-1.jpg",
        "slug": "strategies-de-mise-en-ligne-pour-les-chaines-de-jeux-video-sur-youtube",
        "duration": "02:52",
        "youtubeId": "wMqPyVnqDMw",
        "state": "7",
        "level": "beginner"
    },
    {
        "id": 1430,
        "title": "L'Européen d'à côté : Théâtre antique en Haute-Normandie",
        "likes": "/Image/zan.jpg",
        "views": "174",
        "free": "0",
        "avatar": "http://o9dnc9u2v.bkt.clouddn.com/videos/whFwLBFVRHQ-1.jpg",
        "slug": "l-39-europeen-d-39-a-cote-theatre-antique-en-haute-normandie",
        "duration": "01:31",
        "youtubeId": "whFwLBFVRHQ",
        "state": "6",
        "level": "beginner"
    },
    {
        "id": 1254,
        "title": "Et si on s'parlait du harcèlement - Mauvaise influence - YouTube",
        "likes": "/Image/zan.jpg",
        "views": "191",
        "free": "0",
        "avatar": "http://o9dnc9u2v.bkt.clouddn.com/videos/-YLmUiZs5qo-1.jpg",
        "slug": "et-si-on-s-39-parlait-du-harcelement-mauvaise-influence-youtube",
        "duration": "01:12",
        "youtubeId": "-YLmUiZs5qo",
        "state": "6",
        "level": "beginner"
    },
    {
        "id": 1199,
        "title": "Hélène : Je m'appelle Hélène (Clip officiel)",
        "likes": "/Image/zan.jpg",
        "views": "306",
        "free": "0",
        "avatar": "http://o9dnc9u2v.bkt.clouddn.com/videos/OrBjkXziXnw-1.jpg",
        "slug": "helene-je-m-39-appelle-helene-clip-officiel",
        "duration": "04:29",
        "youtubeId": "OrBjkXziXnw",
        "state": "6",
        "level": "beginner"
    },
    {
        "id": 32,
        "title": "Pub Francaise des Jeux Dédé",
        "likes": "/Image/zan.jpg",
        "views": "926",
        "free": "0",
        "avatar": "http://o9dnc9u2v.bkt.clouddn.com/videos/iMS1Vs30DX8-1.jpg",
        "slug": "pub-francaise-des-jeux-dede",
        "duration": "00:31",
        "youtubeId": "iMS1Vs30DX8",
        "state": "6",
        "level": "beginner"
    },
    {
        "id": 19,
        "title": "Avez-vous déjà vu - L'Amour Impossible de Super Arbre",
        "likes": "/Image/zan.jpg",
        "views": "924",
        "free": "0",
        "avatar": "http://o9dnc9u2v.bkt.clouddn.com/videos/wUQeZviZ94I-1.jpg",
        "slug": "l-amour-impossible-de-super-arbre",
        "duration": "00:49",
        "youtubeId": "wUQeZviZ94I",
        "state": "6",
        "level": "beginner"
    },
    {
        "id": 18,
        "title": "Avez-vous déjà vu - Un piano chez le dentiste",
        "likes": "/Image/zan.jpg",
        "views": "890",
        "free": "0",
        "avatar": "http://o9dnc9u2v.bkt.clouddn.com/videos/N1et8VnKbgg-1.jpg",
        "slug": "un-piano-chez-le-dentiste",
        "duration": "00:40",
        "youtubeId": "N1et8VnKbgg",
        "state": "6",
        "level": "beginner"
    }],

    "meta": {
        "pagination": {
            "total": 208,
            "count": 10,
            "per_page": 10,
            "current_page": 1,
            "total_pages": 21,
            "links": {
            "next": "http://www.alpha-beille.com/api/videos/beginner/10/1/id?page=2"
            }
        }
    }
}

const loadVideos = (limit, page, query = '') => {
    // var cache_num = wx.getStorageSync('cache_num');
    // var cache = wx.getStorageSync('cache_key');
    console.log(limit + ' ' + page);
  var cache_num = wx.getStorageSync('cache_num');
  var cache = wx.getStorageSync('cache_key');
  var data_student = (wx.getStorageSync('Student_data') || []);
  var videos_new = {"data":[]};
  //var videos_new.data[page] = {};
  console.log(videos.data[0]);

  console.log(data_student);
    var i = 1;
    for(i = 0; i < 10 ; i++)
    {
      if (data_student.name_save)
      {
        console.log('start');
        videos.data[0].avatar = app.globalData.userInfo.avatarUrl;
        videos.data[0].title = app.globalData.userInfo.nickName + ' ' + data_student.module_save ;
        videos.data[0].level = data_student.Fre_save + ' ';
        videos.data[0].duration = data_student.hour_save;

      }
      if (videos.data[i].id == cache_num[1]){
        if (cache[1])
          videos.data[i].likes = '/Image/zan.jpg';
        else if (!cache[1])
          videos.data[i].likes = '/Image/zanzan.jpg';
        console.log('Find');
      }
    }
    for(i = 0 ; i < page ; i++)
    {
      console.log(i);
      videos_new.data = videos_new.data.concat(videos.data[i]);
      //videos_new.data[i] = videos.data[i];
    }
    return videos_new;
}

const findVideo = (find_id) =>
{
    var i = 0;
    for(i = 0; i < 10 ; i++)
    {
      if (this.videos.data[i].id == find_id)
        {
          
            return this.data[i];
        }
    }
    return this.data[0];   
}

const transfer = (find_id, location) => {
    var i = 0;
    for(i = 0; i < 10 ; i++)
    {
        if(this.data[i].id == find_id)
        {
            this.data[i].likes = location;
        }
    }
}

const loadpic = (limit, page, query = '') => {
  return videos;
}


module.exports.loadVideos = loadVideos;
module.exports.findVideo = findVideo;
module.exports.transfer = transfer;