<?php
    
    //function execSearch($_POST['q']) {
        $searchTerm = $_POST['q'];
        //Google Code Below
        ini_set('display_errors','On');
        error_reporting(E_ALL);
        // Call set_include_path() as needed to point to your client library.
        set_include_path(get_include_path() . PATH_SEPARATOR . '/home/pi/google-api-php-client/src');

        require_once ('Google/Logger/Null.php');
        require_once ('Google/Client.php');
        require_once ('Google/Config.php');
        require_once ('Google/Model.php');
        require_once ('Google/Collection.php');
        require_once ('Google/Service.php');
        require_once ('Google/Service/Resource.php');
        require_once ('Google/Service/YouTube.php');
        //echo "<br/>";

      /*
       * Set $DEVELOPER_KEY to the "API key" value from the "Access" tab of the
       * Google Developers Console <https://console.developers.google.com/>
       * Please ensure that you have enabled the YouTube Data API for your project.
       */
      $DEVELOPER_KEY = 'AIzaSyC_njRed4uARv1snoWU8wCmo5ce9tnwBdI';

      $client = new Google_Client();
      $client->setDeveloperKey($DEVELOPER_KEY);

      // Define an object that will be used to make all API requests.
      $youtube = new Google_Service_YouTube($client);

      try {
        // Call the search.list method to retrieve results matching the specified
        // query term.
        $searchResponse = $youtube->search->listSearch('id,snippet', array(
          'q' => $searchTerm,
          'maxResults' => 25,
            'type' => 'video'
        ));

        $videos = '<ul class="ytSearchResults">';
        //$channels = '';
        //$playlists = '';

        $linkstring = 'https://www.youtube.com/watch?v=';
        // Add each result to the appropriate list, and then display the lists of
        // matching videos, channels, and playlists.
        foreach ($searchResponse['items'] as $searchResult) {
          switch ($searchResult['id']['kind']) {
            case 'youtube#video':
                  $id = $searchResult['id']['videoId'];
              $videos .= sprintf('<li data-id="%s"><a href="%s%s">%s (%s)</a></li>',
                  $id,$linkstring,$id, $searchResult['snippet']['title'], $id);
              break;
            /*case 'youtube#channel':
              $channels .= sprintf('<li>%s (%s)</li>',
                  $searchResult['snippet']['title'], $searchResult['id']['channelId']);
              break;
            case 'youtube#playlist':
              $playlists .= sprintf('<li>%s (%s)</li>',
                  $searchResult['snippet']['title'], $searchResult['id']['playlistId']);
              break;*/
          }
        }
        
        $videos .= "</ul>";
        $htmlResult = <<<END
        Your Search Term: $searchTerm <br/>
        $videos
END;
      } catch (Google_ServiceException $e) {
        $htmlBody .= sprintf('<p>A service error occurred: <code>%s</code></p>',
          htmlspecialchars($e->getMessage()));
      } catch (Google_Exception $e) {
        $htmlBody .= sprintf('<p>An client error occurred: <code>%s</code></p>',
          htmlspecialchars($e->getMessage()));
      }
        //$test = "TEST MESSAGE";
        echo $htmlResult;
    //}

//$something = new YTSearch();
//$res = $something->execSearch("FLCL");
//echo $res;

?>