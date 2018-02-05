function AssignInput() {
  //console.log($(event.target).text());
  var inputVal = $(event.target).val(); 
  //console.log(inputVal);
  $(event.target).blur(function(){
    $(event.target).text(inputVal);
    $(event.target).attr("value",inputVal);
  });
}

$(function(){
  $(".o-section__textarea").on("change", function(){
    console.log($(this).val());
    $(this).text($(this).val());
  });

  $(document).ready(function(){			
    $(document).on("change",".o-section__fileToUpload",function(event) {
      //event.preventDefault();
      var file_data = $(event.currentTarget).prop('files')[0];  
      //console.log(file_data)
      var form_data = new FormData();                  
      form_data.append('file', file_data);                 
      //console.log(form_data)
      $.ajax({
        url: 'scripts/imgUpload.php', // point to server-side PHP script 
        dataType: 'text',  // what to expect back from the PHP script, if anything
        cache: false,
        contentType: false,
        processData: false,
        data: form_data,                         
        type: 'post',
        success: function(){
          console.log("[LOG] Img sent to server!");
          $.get('imgs/lastImguploaded.txt', function(data) {
            $(event.currentTarget).next().css("height","auto");
            $(event.currentTarget).next().css("margin-top","10px");
            $(event.currentTarget).next().children(".o-section__img").attr("src","imgs/"+data);
          });
        }
      }).fail(function(){
        console.log("[LOG] There was an error while sending the img to the server...");
      });
    });
  });
});