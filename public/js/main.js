$(document).ready(function() {
    $('.a-pagepiling').pagepiling({
        scrollingSpeed: 280,
        menu: '#menu',
        loopTop: true,
        loopBottom: true,
        navigation: {
            'position': 'right'
        },
        afterLoad: function(anchorLink, index){
            if(index == 1 || index == 3 || index == 5){ // Section with dark bacgkrounds
                $('body').addClass('dark-horizontal');
            }
            else{
                $('body').removeClass('dark-horizontal');
            }
        },
        onLeave: function(){
            $('.section.active .slide-bg-list .slide-bg').removeClass('active').eq(0).addClass('active')
        }
    });

    $('.a-pp-prev').on('click', function(){
        $.fn.pagepiling.moveSectionUp();
    });
    $('.a-pp-next').on('click', function(){
        $.fn.pagepiling.moveSectionDown();
    });
});
