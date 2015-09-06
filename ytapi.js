// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
player = new YT.Player('player', {
  height: '390',
  width: '640',
  videoId: 'M7lc1UVf-VE',
  events: {
    'onReady': onPlayerReady,
    'onStateChange': onPlayerStateChange
  }
});
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
if (event.data == YT.PlayerState.PLAYING && !done) {
  setTimeout(stopVideo, 6000);
  done = true;
}
}
function stopVideo() {
player.stopVideo();
}


function setVolume() {
    var vol = $("#volume").val();
    var volstring = '';
    if (vol < 10) volstring = '0' + vol + '%';
    else if (vol<100){volstring = + vol + '%';}
    else {volstring = '100';}
    $("#volumeAmt").html(volstring);

    player.setVolume(vol);
}

function pauseplay() {
    if (player.getPlayerState()==1)
        player.stopVideo();
    else
        player.playVideo();
}

      function onPlayerStateChange(event) {
          //player.PlayerState
          // -1 (unstarted)
          // 0 (ended)
          // 1 (playing)
          // 2 (paused)
          // 3 (buffering)
          // 5 (video cued)
        switch(event.data) {
          case 0:
            console.log('video ended');
                advance();
            break;
          case 1:
            console.log('video playing from '+player.getCurrentTime());
            $("#PP").attr("title","Pause");
            $("#PPicon").removeClass("fa-play");
            $("#PPicon").addClass("fa-pause");
            break;
          case 2:
            console.log('video paused at '+player.getCurrentTime());
            $("#PP").attr("title","Play");
            $("#PPicon").removeClass("fa-pause");
            $("#PPicon").addClass("fa-play");
        }
      }

function advance() {
    var VID = "sblR0eIRW-I";
    var YTsrc = 'https://www.youtube.com/embed/' + VID + '?autoplay=1&controls=0&disablekb=1&enablejsapi=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&enablejsapi=1';
    $("#player").attr("src",YTsrc);
}

$(document).ready( function() {
    $("#PP").click(function() {
        //alert(player.getPlayerState());
            //alert($(this).attr("title"));
        if(player.getPlayerState()==1) {
            //$(this).attr("title","Play");
            //$("#PPicon").removeClass("fa-pause");
            //$("#PPicon").addClass("fa-play");
            player.pauseVideo();
            
        }
        else {
            //$(this).attr("title","Pause");
            //$("#PPicon").removeClass("fa-play");
            //$("#PPicon").addClass("fa-pause");
            player.playVideo();
        }
    });
});
/*$("#PP").click(function() {
            //alert($(this).attr("title"));
        if($(this).attr("title") == "Pause") {
            $(this).attr("title","Play");
            $("#PPicon").removeClass("fa-pause");
            $("#PPicon").addClass("fa-play");
            
        }
        else {
            $(this).attr("title","Pause");
            $("#PPicon").removeClass("fa-play");
            $("#PPicon").addClass("fa-pause");
        }
    });*/

