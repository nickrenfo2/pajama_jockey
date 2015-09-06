$(document).ready(function() {
    //alert("ready");
    $ytplayer = $('#player');
    $('.YTAutoCompleteDiv').hide();
    $(".hmbgr_menu").hide();
    var hamHeight = $('body').height() - $('#menubar').height();
    $(".hmbgr_menu").css("height",hamHeight);
    if ($('html').width() >=300) {
        $(".hmbgr_menuItem").css("width","298px");
    } else {
        $(".hmbgr_menuItem").css("width",$('html').width()-2);
    }
    
    
    $(".icon").mousedown(function() {
        $(this).addClass("iconDown");
    });
    $(".icon").mouseup(function() {
        $(this).removeClass("iconDown");
    });
    
    $(".hmbgr_btn").click(function(e) {
        //$(".hmbgr_menu").slideToggle(250);
        $(".hmbgr_menu").animate({width:'toggle'},350);
        e.stopImmediatePropagation(); //Allows the menu to stay down until something gets clicked
    });
    
    
    $("#skip").click(function() {skipSong()});
    
    // When the menu gets clicked, this will send the menu back up if anything else gets clicked
    $(document).click(function (e) {
        if($(".hmbgr_menu").is(":visible") && !$(".hmbgr_menu").is(e.target)) {
            $(".hmbgr_menu").animate({width:'toggle'},350);
        }
    });
    
    $("#YTSearchBtn").click(function() {
        $("div.YTSearchField").toggleClass("hidden");
        
        $('.YTAutoCompleteDiv').fadeToggle();
        
    });
    
    $("#volume-btn").click(function() {
        $("div.volume-slider").toggleClass("hidden");
        $("#volumeAmt").html($("#volume").val() + '%');
        
    });
    
    $('#volume').on('change', function(){
       log($('#volume').val());
    });
    
    
    
});

function skipSong() {
    var VID = "sblR0eIRW-I";
    var YTsrc = 'https://www.youtube.com/embed/' + VID + '?autoplay=1&controls=0&disablekb=1&enablejsapi=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&enablejsapi=1';
    $("#player").attr("src",YTsrc);
}

function setVolume() {
    var vol = $("#volume").val();
    var volstring = '';
    if (vol < 10) volstring = '0' + vol + '%';
    else if (vol<100){volstring = + vol + '%';}
    else {volstring = '100';}
    $("#volumeAmt").html(volstring);

    $player = $('#player');

    $player.setVolume(vol);



}


//When the window is resized, make sure the menu buttons do not overlap the song title



