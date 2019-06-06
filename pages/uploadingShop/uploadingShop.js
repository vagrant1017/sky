
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
      console.log(img.src)

    //   my.compressImage({
    //   apFilePaths:['https://resource/apmlcc0ed184daffc5a0d8da86b2f518cf7b.image'],
    //   compressLevel:1,
    //   success:(res)=>{
    //     console.log(JSON.stringify(res))
    //   }
    // })
    },
    });
    
  },




  onBusinessSelect(){
    my.chooseImage({
    count: 1,
    sizeType:'compressed'
    });
  },

  submit(){
    // my.switchTab({
    //   url:'/pages/shop/home/home'
    // });
  }
});