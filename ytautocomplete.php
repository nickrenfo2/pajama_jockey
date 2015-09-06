<?php
$url = sprintf("http://suggestqueries.google.com/complete/search?hl=en&ds=yt&client=youtube&hjson=t&cp=1&q=%s&alt=json", urlencode($_POST['q']));

$json = file_get_contents($url);

$results = json_decode($json);

//$text ='';
$text ='<ul class="YTAutoComplete">';
foreach($results[1] as $result)
{
    // echo search suggestion
    $text .= "<li class='YTSearchSuggestion'>";
    $text .= $result[0];
    $text .= "</li>";
}
$text .= "</ul>";
echo $text;
?>