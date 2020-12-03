$('#file-select').change(function(){
    var files = $(this)[0].files;
    if(files.length < 1){
        $('#selected-file-count').text("No files Selected");
        $('#selected-file-count').css("background-color", "red");
    }else{
        $('#selected-file-count').text(files.length + " files Selected.");
        $('#selected-file-count').css("background-color", "green");
    }
});