var app = new Vue({
    el: '#index_home',
    data: {
        products: viewObj,
    },
})
var apps = new Vue({
    el: '#ranking_home',
    data: {
        products: rankObj,
    }
})
var appz = new Vue({
    el: '#record_home',
    data: {
        products: recordObj,
    }
})


//以下为页面公共方法
c('footerb')[0].ontouchend = function(){location.href = 'index.html'};
c('footerc')[0].ontouchend = function(){location.href = 'record.html'};


//日期选择默认今天
var defaultDate = c('index_header_int');
var date = new Date();
var count = date.getTime() - 86400000;
for (var i = 0; i<defaultDate.length; i++) {
    defaultDate[i].valueAsDate = new Date(count);
}

//禁用所有页面touchmove事件