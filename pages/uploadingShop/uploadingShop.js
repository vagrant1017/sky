
const shop = ['网商银行', '建设银行', '工商银行', '浦发银行'];
Page({
  data: {
    linkman: 'vagrant',
    phone:"17502185988",
    email:""
  },

  onClassfiySelect(){
   
  },

  onShopSelect() {
    my.chooseImage({
    count: 1,
    success: (res) => {
      img.src = res.apFilePaths[0];
    },
    });
  },
  onBusinessSelect(){
    my.chooseImage({
    count: 1,
    success: (res) => {
      img.src = res.apFilePaths[0];
    },
    });
  },

  submit(){
    // my.switchTab({
    //   url:'/pages/shop/home/home'
    // });
  }
});