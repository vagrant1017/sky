
const app = getApp();
Page({
  data:{
      userInfo: {},
      userLogin: false,
      userNotLogin: true,
  },
   onLoad() {
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

      // 授权登录
      my.getAuthCode({
        scopes: "auth_user",
        success: (res) => {
          if (res.authCode) {
              console.log(res.authCode);

            // 写上你自己的qq号即可，前提：需要联系老师，添加到团队里
            var qq = "1083223866";
              // 请求用户信息
              my.httpRequest({
                  url: app.serverUrl + '/team/login/' + res.authCode + '/' + qq,
                  method: 'POST',
                  header: {
                      'content-type': 'application/json'
                  },
                  dataType: 'json',
                  success: function(res) {
                      console.log(res);
                      // 获取拿到后端的数据
                      var myData = res.data;
                      if (myData.status == 200) {
                          var userInfo = myData.data;
                          console.log("========== 用户对象 start ===========");
                          console.log(userInfo);
                          console.log("========== 用户对象 end ===========");
                          me.setData({
                              userInfo: userInfo,
                              userLogin: true,
                              userNotLogin: false,
                          });

                          // 登录成功之后，设置全局用户信息，便于其他页面的使用
                          app.setGlobalUserInfo(userInfo);
                      }
                  }
              });
          }
        },
      });

  },
  login() {
        this.onLoad();
    },

  logout() {
        var me = this;

        my.showActionSheet({
          items: ['退出', '支付', '人脸识别', '实名认证', '实人认证'],
            badges: [
                { index: 0, type: 'none' },
                { index: 1, type: 'point' },
                { index: 2, type: 'num', text: '8' },
                { index: 3, type: 'text', text: '推荐' },
                { index: 4, type: 'more' },],
            cancelButtonText: '这是取消',
          destructiveBtnIndex: '0', 
          success: (res) => {
            if (res.index === 0) {
                my.clearStorageSync();
                me.setData({
                    userInfo: {},
                    userLogin: false,
                    userNotLogin: true,
                });
            }
          },
        });
    }
})