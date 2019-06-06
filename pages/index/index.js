const app = getApp();
Page({
  data:{
    avatar:'',
    nickName:'',
    userInfo:{},
    list:[
      {
        icon: 'https://mdn.alipay.com/wsdk/img?fileid=A*UQd1Q6gOBT8AAAAAAAAAAABjAfYuAQ&amp;bz=life_app&amp;zoom=2048w_80q_1l',
        text: '门店授权',
        
      },
      {
        icon: 'https://mdn.alipay.com/wsdk/img?fileid=A*UQd1Q6gOBT8AAAAAAAAAAABjAfYuAQ&amp;bz=life_app&amp;zoom=2048w_80q_1l',
        text: '签约产品',
        
      },
      {
        icon: 'https://mdn.alipay.com/wsdk/img?fileid=A*UQd1Q6gOBT8AAAAAAAAAAABjAfYuAQ&amp;bz=life_app&amp;zoom=2048w_80q_1l',
        text: '代理服务',
        
      },
      {
        icon: 'https://mdn.alipay.com/wsdk/img?fileid=A*UQd1Q6gOBT8AAAAAAAAAAABjAfYuAQ&amp;bz=life_app&amp;zoom=2048w_80q_1l',
        text: '联系我们',
        
      }
    ],
   
  },
  // onItemClick(ev) {
  //   var index = ev.detail.index
    
  //   switch(index) {
  //     case 0:
  //       my.navigateTo({
  //         url: '/pages/index/outurl/outurl'
  //       })
         
  //         break;
  //     case 1:
  //         my.switchTab({
  //           url: '/pages/shop/home/home'
  //         })
  //         break;
  //     case 2:
  //         my.alert({
  //         title: '亲',
  //         content: '暂时无此服务'
  //       });
  //         break;
  //     case 3:
  //         my.alert({
  //         title: '亲',
  //         content: '联系电话18627809978'
  //       });
  //         break;
     
  //   } 
  // },

 
   onLoad(query) {

      // 页面加载
    var me  = this;

          // 判断用户是否登录过
        var userInfo = app.getGlobalUserInfo();
        if (userInfo != null && userInfo != undefined) {
            me.setData({
                userInfo: userInfo,
                userLogin: true,
                userNotLogin: false,
            });
            return;
        }
  },
  goCard(){
    my.alert({
      content:"名片",
    });
  },
  onReady() {
    // 页面加载完成
     my.getAuthCode({
      scopes: 'auth_user',
      success: (res) => {
        my.getAuthUserInfo({
          success: (userInfo) => {
           
          this.setData({
            avatar: userInfo.avatar,
            nickName: userInfo.nickName
          })
       
          }
        });
      },
    });
  },
  ruzhu(){
      my.navigateTo({
      url: '/pages/creatshop/creatshop'
    })
  },
   goShop(){
    my.switchTab({
      url:'/pages/shop/home/home'
    });
  },
  onShow() {
    // 页面显示
    
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
