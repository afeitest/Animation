// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++


// (function($){
//     var bodyHeight = $(window).height(),
//         docWidth = $('.doc').width();
//     $('.doc').css('min-height',bodyHeight);

    
// })(Zepto)

(function($){

    NavShow = function() {

        $('#navbt').hammer().on('tap',function(event) {
            if($(this).hasClass('active')) {
               $(this).removeClass('active'); 
               $('#nav').removeClass('active');
               $('.content').removeClass('active');
            }else{
               $(this).addClass('active'); 
               $('#nav').addClass('active');
               $('.content').addClass('active');
            }
        });
    }
    NavShow();

    motionShow = function(){
        $('[data-name="menu"] .item').hammer().on('tap',function(){
            var motion = $('[data-box="motion"]');
            var target = $(this).attr('data-result');
            var motionPar = $(this).parent().next().find(motion);
            $(this).addClass('active').siblings().removeClass('active');
            motion.removeClass();
            setTimeout(function(){
                motion.addClass("an-"+target);
            }, 300);
            $(".name").text("an-"+target);
        });
    };
    pageShow = function() {   
        var navFirst= $('[data-section]').first().addClass('active').attr('data-section');
        $(".content").load("demo/"+navFirst+".html",function(){
          $(".content").animate({'opacity':'1'},400); 
          motionShow();
        });

        $('[data-section]').hammer().on('tap',function(){
            var navData = $(this).attr('data-section');
            var pageName= "demo/"+navData+".html";
            var pageId= $(".content").attr("id",navData);
            var pageData= pageId.attr('data-show');
            $(this).addClass('active').siblings().removeClass('active');
            $(".content").load(pageName,function(){
                $(".content").hide();
                 motionShow();
            });
            setTimeout(function(){
                $(".content").show().addClass(pageData);
            }, 300);
            $('#navbt').removeClass('active');
            $('#nav').removeClass('active');
            $('.content').removeClass('active');
            $('[data-name="menu"] .item').removeClass('active');
            $('[data-box="motion"]').removeClass();
        });

    }
    pageShow();

})(Zepto)