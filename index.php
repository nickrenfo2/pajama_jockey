<?PHP

    $menu = '
    
                <div class="hmbgr_menuItem"><span class="fa fa-users"></span><span class="menuText">Create Party</span></div>
                <div class="hmbgr_menuItem"><span class="fa fa-plus"></span><span class="menuText">Add Song</span></div>
                <div class="hmbgr_menuItem"><span class="fa fa-user-plus"></span><span class="menuText">Suggest a Song</span></div>
                <div class="hmbgr_menuItem"><span class="fa fa-times"></span><span class="menuText">Skip Song</span></div>
                <div class="hmbgr_menuItem"><span class="fa fa-user-times"></span><span class="menuText">Vote Skip Song</span></div>
                <div class="hmbgr_menuItem"><span class="fa fa-times-circle"></span><span class="menuText">Leave Party</span></div>
                <div class="hmbgr_menuItem"><span class="fa fa-cog"></span><span class="menuText">Party Settings</span></div>
    ';
    

?>
<!DOCTYPE html>
<html>
    <head>
        <title>PajamaJockey - Music for Everyone</title>
        <link type="text/css" rel="stylesheet" href="styles.css" />
        <link href='http://fonts.googleapis.com/css?family=Droid+Serif:400,400italic' rel='stylesheet' type='text/css'>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.13/angular.min.js"></script>
        <link rel="stylesheet" href="fa-icons/css/font-awesome.min.css">
        <script src="jquibbles.js"></script>
        <script src="ytfix.js"></script>
        <script src="ytapi.js"></script>
        <script src="searchyt.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    
    <body>
        <div id="menubar">
            <div id="hostControlsTop" class="hostControls"> <!-- Use PHP to insert Host Controls? onclick="pauseplay()" -->
                <div id="PP" class="control icon" title="Pause" ><span id="PPicon" class="fa fa-pause"></span></div>
                <div id="skip" class="control icon" title="Skip"><span class="fa fa-times"></span></div>
                <div id="voteSkip" class="control icon" title="Vote to Skip"><span class="fa fa-user-times"></span></div>
                <div id="volume-btn" class="control icon" title="Adjust Volume"><span class="fa fa-volume-up"></span></div>
            </div>
            <div class="clearleft smallScreenFix"></div>
            <div id="songInfo">
                <div ID="NowPlaying">Now Playing</div>
                <div class="clearleft"></div>
                <div ID="songTitle">This video does not exist.</div>
            </div>
            
            <div id="YTSearchBtn" class="icon"><span class="fa fa-search"></span></div>
            <div class="hmbgr_btn icon"><span class="fa fa-bars"></span></div>
            <div class="clearright"></div>
            <div class="hmbgr_menu">
                <?PHP 
                    echo '<div class="menuItem">' . uniqid() . '</div>';
                    echo $menu;
                ?>
            </div>
            <div class="clearleft"></div>
        </div>
        <div class="YTSearchField hidden" class="icon"><input id="YTSearchField" type="text" placeholder="Search YouTube" class="YTSearchField"></div>
        <div class="YTAutoCompleteDiv"></div>
        <div class="volume-slider hidden" class="icon"><input type="range" id="volume" oninput="setVolume()" class="volume-slider" min="0" max = "100" step = "1"><div class="volumeAmt" id="volumeAmt"></div></div>
        <div id="pagecontent">
                <div id="YTPlayback">
                    <div id="player"></div>
                    <!--<iframe id="YTPlayer" type="text/html" src="https://www.youtube.com/embed/VideoIdHere?autoplay=1&controls=0&disablekb=1&enablejsapi=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3" frameborder="0" allowfullscreen ></iframe>-->
                </div>
            <div id="searchResults"></div>
            <div id="log">
                <?PHP 
                    //include("YTSearch.php");
                    //$ytsearch = new YTSearch();
                    //$res = execSearch("FLCL");
                    //echo $res;
                        //$search = new YTSearch;
                        //$searchRes = $search->execSearch("FLCL");
                        //echo $searchRes;
                    //set_include_path(get_include_path() . PATH_SEPARATOR . '/home/pi/www/helpers');
                    //require_once('YTsearch.php');
                    //$search = new YTSearch();
                    //$res = $search->execSearch("FLCL",25);
                    //echo $res;
                ?>
            </div>
        </div>
    </body>
<html>