var app = new Vue({
    el: '#index_home',
    data: {
        products: viewObj,
    }
})

/*var appvArr = new Vue({
    el: '#index_detail_body_content_table_right_table',
    data: {
       productsArr: rankViewObj.arr,
    }
})*/


//以下为页面公共方法
if(c('footerb')[0] != undefined && c('footerc')[0] != undefined && c('footerd')[0] != undefined){
    c('footerb')[0].ontouchend = function(){location.href = 'index.html'};
    c('footerc')[0].ontouchend = function(){location.href = 'record.html'};
    c('footerd')[0].ontouchend = function(){location.href = 'last_30_days.html'};
}

//日期选择默认今天
var defaultDate = c('index_header_int');
var date = new Date();
var count = date.getTime() - 86400000;
for (var i = 0; i<defaultDate.length; i++) {
    defaultDate[i].valueAsDate = new Date(count);
}

//禁用所有页面touchmove事件