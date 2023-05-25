function remSize() {
    var deviceWidth = document.documentElement.clientWidth || window.innerWidth;
    if (deviceWidth >= 750) {
        deviceWidth = 750
    }
    if (deviceWidth <= 320) {
        deviceWidth = 320
    }
    document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px'  
    //  document.documentElement html标签  1rem = xxxpx
    // html的fontsize值的大小                                      
    // 屏幕宽度 750   html的fontsize = 100px    1rem = 100px
    // 屏幕宽度 375   html的fontsize = 50px     1rem = 50px
    // 屏幕宽度 500   html的fontsize = 66.66px  1rem = 66.66px

    document.querySelector('body').style.fontSize = 0.3 + 'rem'
        // 设计稿是750px.
        // 设置1半的宽度，那么就是375px
        // 1rem == 100px的设计稿宽度
        // 表达一半的宽度就是3.75rem
}

remSize();

// 当屏幕宽度发生改变时，重新计划html的font-size大小，即1rem的值
window.onresize = function() {      
    remSize()
}