$(document).ready(function() {

    
    // Find all YouTube videos
    var $allVideos = $("#player");

        // The element that is fluid width
        $fluidEl = $("#YTPlayback");

    // Figure out and save aspect ratio for each video
    $allVideos.each(function() {
      //$(this)
          //.data('aspectRatio',$(this).height() / $(this).width() )
          // and remove the hard coded width/height
          //.removeAttr('height')
          //.removeAttr('width');
        $(this).data('aspectRatio',$(this).height() / $(this).width() );
        log("VHeight: " + $(this).height());
        log("VWidth: " + $(this).width());
        log("VRatio: " + $(this).data('aspectRatio'));
    });

    // When the window is resized
    $(window).resize(function() {
      var newWidth = $fluidEl.width();

      // Resize all videos according to their own aspect ratio
      $allVideos.each(function() {
        var $el = $(this);
          var newHeight = newWidth * $el.data('aspectRatio');
          $el.attr("width",newWidth);
          $el.attr("height",newHeight);
          
          

      });

    // Kick off one resize to fix all videos on page load
    }).resize();

    
});

function log($text) {
    $("#pagecontent").append($text);
    $("#pagecontent").append(" | ");
    
    
}