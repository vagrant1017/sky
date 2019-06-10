if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');
require('./importScripts$');

var AFAppX = self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;


function success() {
require('../..//app');
require('../../node_modules/mini-antui/es/am-icon/index');
require('../../node_modules/mini-antui/es/grid/index');
require('../../node_modules/mini-antui/es/card/index');
require('../../node_modules/mini-antui/es/list/index');
require('../../node_modules/mini-antui/es/list/list-item/index');
require('../../node_modules/mini-antui/es/picker-item/index');
require('../../node_modules/mini-antui/es/input-item/index');
require('../../node_modules/mini-antui/es/badge/index');
require('../../node_modules/mini-antui/es/vtabs/index');
require('../../node_modules/mini-antui/es/vtabs/vtab-content/index');
require('../../pages/shop/home/home');
require('../../pages/index/index');
require('../../pages/setting/setting');
require('../../pages/card/card');
require('../../pages/creatshop/creatshop');
require('../../pages/shop/cart/cart');
require('../../pages/shop/mine/mine');
require('../../pages/connect/connect');
require('../../pages/qr/qr');
require('../../pages/index/outurl/outurl');
require('../../pages/uploadingShop/uploadingShop');
require('../../pages/shop/category/category');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}