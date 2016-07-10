    var swiper = new Swiper('.banner .swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        // spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });
    var swiper = new Swiper('.buybanner .swiper-container', {
        // pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        slidesPerGroup: 3
        // spaceBetween: 30
    });
        var goback=document.querySelector(".goback");
        $(window).scroll(function(){
            var topp=$(window).scrollTop();
            if(topp>=500){
                $(goback).fadeIn(400);
            }else{
                $(goback).fadeOut(400);
            }



            $(".foot1").each(function(index,nowobj){
                // alert(1);
                if($(nowobj).offset().top<=(topp+$(window).height())){
                    var imgs=$("img",nowobj);
                    $(imgs).attr("src",function(i,url){
                        return $(this).attr("data-src");
                    })
                    // $(imgs).each(function(index1,nowobj1){
                    //  var src=$(nowobj1).attr("data-src");
                    //  $(nowobj1).attr("src",src);
                    // })
                }
            })
        })
            $(goback).click(function(){
                $({tops:$(window).scrollTop()}).animate({tops:0},{
                    duration:1000,
                    step:function(now){
                        $(window).scrollTop(now);
                    }
                })
            })

