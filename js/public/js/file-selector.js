$('#file-select').change(function(){
    var files = $(this)[0].files;
    if(files.length < 1 ){
        $('#selected-file-count').text("No files Selected");
        $('#selected-file-count').css("background-color", "red");
    }else{
        $('#selected-file-count').text(files.length + " files Selected.");
        $('#selected-file-count').css("background-color", "green");
    }
});

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
});