Page({
  data: {
    activeTab: 2,
    tabs: [
      { title: '选项二', anchor: 'a'},
      { title: '选项', anchor: 'b'},
      { title: 'san', anchor: 'c' },
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
    console.log('onChange', index);
    this.setData({
      activeTab: index,
    });
  },
});
