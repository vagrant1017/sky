Page({
  data: {
    hasLocation:false,
    location:{}
  },
  onReady(){
    my.getLocation({
      success(res) {
        my.hideLoading();
        console.log(res)
        this.setData({
          hasLocation: true,
          location: formatLocation(res.longitude, res.latitude)
        })
      },
      fail() {
        my.hideLoading();
        my.alert({ title: '定位失败' });
      },
    })
  },
  onLoad() {
    
  },
});
