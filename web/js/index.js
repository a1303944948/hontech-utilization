var app = new Vue({
    el: '#index_home',
    data: {
        products: viewObj,
    },
})
for(var i = 0; i < c('index_home_left_item_left').length; i++){
    console.log(c('index_home_left_item_left')[i].clientHeight);
    c('index_home_left_item_center')[i].style.height = c('index_home_left_item_left')[i].clientHeight + 1 + 'px';
    c('index_home_left_item_center')[i].style.lineHeight = c('index_home_left_item_left')[i].clientHeight + 1 + 'px';
    c('index_home_left_item_center')[i].children[0].style.width = c('index_home_left_item_center')[i].children[0].innerHTML;
    console.log(c('index_home_left_item_center')[i].children[0].innerHTML);
    c('index_home_left_item_right')[i].style.height = c('index_home_left_item_left')[i].clientHeight + 1 + 'px';
    c('index_home_left_item_right')[i].style.lineHeight = c('index_home_left_item_left')[i].clientHeight + 1 + 'px';
    c('index_home_left_item_right')[i].children[0].style.width = c('index_home_left_item_right')[i].children[0].innerHTML;
}