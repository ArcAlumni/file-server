$(".sidebar-toggle-btn").click(function(){
    $('#chat-sidebar').css("width","250px");
    $(document.body).css({"transition":"0.5s","margin-left":"250px"});
    $('.sidebar-toggle-btn').css({"transition":"0.5s","left":"250px"});   

});

$(".sidebar-toggle-btn").click(function(){
    var sidebarwidth = $('#chat-sidebar').css("width");
    if(sidebarwidth == "250px"){
        $('#chat-sidebar').css("width","0px");
    }
    var bodymargin = $(document.body).css("margin-left");
    if(sidebarwidth == "250px"){
        $(document.body).css("margin-left","0px");
    }
    var togglebtnposition = $('.sidebar-toggle-btn').css("left");
    if(sidebarwidth == "250px"){
        $('.sidebar-toggle-btn').css("left","0px");
    }
    var channelinitial = $('#channel-1').css("width");
    if(channelinitial <= "2px"){
        $('#channel-1').css("left","0px");
    } 

});

$(".channel-list-header").click(function(){
    $(".arrow").toggleClass("right").toggleClass("down");        
    $("#channel-list").css("height","220px");
});

$(".channel-list-header").click(function(){
    var channellistHeight = $("#channel-list").css("height");
    if (channellistHeight == "220px"){
        $("#channel-list").css("height","0px");
    }
});

$("#channel-link-1").click(function(){
    $("#channel-1").css({"width":"620px","transition":"0.5s","left":"250px"});
});

$("#channel-link-1").click(function(){
    var channelwidth = $('#channel-1').css("width");    
    if(channelwidth == "620px"){
        $('#channel-1').css("width","0px");        
    }
});

$(".home").mouseover(function(){
    $("#homeicon").attr('src','images/home-white.png');    
  });
  $(".home").mouseout(function(){
    $("#homeicon").attr('src','images/home.png');
  });