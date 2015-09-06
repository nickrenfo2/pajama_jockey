//This file contains all function related to searching for youtube videos
$(document).ready(function () {
    //This function handles all keypresses except arrow keys and enter key
    $('#YTSearchField').keyup(function (e) {
        if (e.which != 38 && e.which != 40 && e.which != 37 && e.which != 39 && e.which != 13) {
            var query = $(this).val();
            //alert(query);
            if (query != '')
                $('.YTAutoCompleteDiv').show();
            $.ajax({
                url:"ytautocomplete.php",
                type:"POST",
                data:{q:query},
                success: function(res) {
                //$('#log').append(res);
                    $('.YTAutoCompleteDiv').html(res);
                    //$queryHTML = "<li class='YTSearchSuggestion'>" + query + "</li>";
                    //$(".YTAutoCompleteDiv").prepend($queryHTML);
                    //$('.YTSearchSuggestion').first().addClass("highlighted");
                }
           });
            //$queryHTML = "<li class='YTSearchSuggestion'>" + query + "</li>";
            //$("YTAutoCompleteDiv").prepend($queryHTML);
            if (query == '')
                $('.YTAutoCompleteDiv').hide();
        }
    });
    /*
    $('#YTSearchField').on('keyup',function () {
        var query = $(this).val();
        //alert(query);
        $.ajax({
            url:"YTSearch.php",
            type:"POST",
            data:{q:query},
            success: function(res) {
            //$('#log').append(res);
                $('#searchResults').html(res);
            }
       });
    });*/
    
    //This function handles Up/Down/Enter keypresses
    $('#YTSearchField').bind('keydown', function(e) {
        
        $cur = $(".highlighted");
        //Down Arrow
        if(e.which==40){ 
            e.preventDefault();
            if ($cur[0]) {
                $cur.removeClass("highlighted");
                $cur.next().addClass("highlighted");
            } else {
                $('.YTSearchSuggestion').first().addClass("highlighted");
            }
        } 
        // Up Arrow
        else if (e.which==38) {
            e.preventDefault();
            if ($cur[0]) {
                $cur.removeClass("highlighted");
                $cur.prev().addClass("highlighted");
            } else {
                $('.YTSearchSuggestion').last().addClass("highlighted");
            }
        } 
        // Enter Key
        else if (e.which == 13) {
            if ($cur[0]) {
                $query = $(".highlighted").text();
            } else {
                $query = $(this).val();
            }
            //alert($query);
            $.ajax({
                url:"helpers/YTSearch.php",
                type:"POST",
                data:{q:$query},
                success: function(res) {
                //$('#log').append(res);
                    $('#searchResults').html(res);
                }
           });
            $('.YTAutoCompleteDiv').hide();
            $("div.YTSearchField").toggleClass("hidden");
            $(this).val("");
        }
    });
    $('.YTSearchSuggestion').on('mouseenter', function() {
        alert('hover');
        //$('.highlighted').removeClass('highlighted');
        //$(this).addClass("highlighted");
    });
    
});