Page({
  data: {
    activeTab: 0,
    tabs: [
      { title: '选项一', anchor: 'a'},
      { title: '选项二', anchor: 'b'},
      { title: '选项三', anchor: 'c' },
      { title: '选项四', anchor: 'd' },
      { title: '选项五', anchor: 'e' },
      { title: '选项六', anchor: 'f' },
    ],
  },
  handleChange(index) {
    this.setData({
      activeTab: index,
    });
  },
  onChange(index) {
   
    this.setData({
      activeTab: index,
    });
  },
});

// var app = getApp()
// Page({
//     data: {
//         navLeftItems: [],
//         navRightItems: [],
//         curNav: 1,
// 		    curIndex: 0
//     },
//     onLoad: function() {

//         var that = this
        
//         my.request({
//             url: '',
//             method: 'GET',
//             data: {},
//             header: {
//                 'Accept': 'application/json'
//             },
//             success: function(res) {
//                 that.setData({
//                     navLeftItems: res.data,
//                     navRightItems: res.data
//                 })
//             }
//         })
//     },

//     //事件处理函数
//     switchRightTab: function(e) {
//         let id = e.target.dataset.id,
// 			index = parseInt(e.target.dataset.index);
// 		this.setData({
// 			curNav: id,
// 			curIndex: index
// 		})
//     }

// })
