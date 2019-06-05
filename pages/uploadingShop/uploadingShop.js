

Page({
  data: {
    bank: '',
  },
  onSelect() {
    my.chooseImage({
  count: 1,
  success: (res) => {
    img.src = res.apFilePaths[0];
  },
  });
  },
});