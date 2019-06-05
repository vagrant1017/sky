if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


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
require('../../node_modules/mini-antui/es/badge/index');
require('../../node_modules/mini-antui/es/vtabs/index');
require('../../node_modules/mini-antui/es/vtabs/vtab-content/index');
require('../../node_modules/mini-antui/es/picker-item/index');
require('../../node_modules/mini-antui/es/input-item/index');
require('../../pages/index/index');
require('../../pages/setting/setting');
require('../../pages/card/card');
require('../../pages/creatshop/creatshop');
require('../../pages/shop/cart/cart');
require('../../pages/shop/mine/mine');
require('../../pages/shop/home/home');
require('../../pages/connect/connect');
require('../../pages/qr/qr');
require('../../pages/index/outurl/outurl');
require('../../pages/uploadingShop/uploadingShop');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}