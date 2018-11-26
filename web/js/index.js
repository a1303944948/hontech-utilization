var app = new Vue({
    el: '#index_home',
    data: {
        products: viewObj,
    }
})  
var apps = new Vue({
    el: '#ranking_home',
    data: {
        products: rankObj,
    },
    methods: {
        greet: function (machId) {
            location.href = 'index-detail.html?machId=' + machId;
        }
    }
})
var appv = new Vue({
    el: '#index_detail_home',
    data: {
        products: rankViewObj,
    },
})
var appxs = new Vue({
    el: '#last_30_days',
    data: {
        products: last30days,
    },
    methods: {
        greet: function (machId) {
            location.href = 'last_30_days_view.html?machId=' + machId;
        }
    }
})
var appxsv = new Vue({
    el: '#last_30_days_view',
    data: {
        products: last30daysView,
    }
})
/*var appvArr = new Vue({
    el: '#index_detail_body_content_table_right_table',
    data: {
       productsArr: rankViewObj.arr,
    }
})*/
var appz = new Vue({
    el: '#record_home',
    data: {
        products: recordObj,
    }
})


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