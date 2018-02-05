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
    $(document).on("change",".o-section__fileToUpload",function(e) {
      //e.preventDefault();
      var file_data = $('.o-section__fileToUpload').prop('files')[0];   
      var form_data = new FormData();                  
      form_data.append('file', file_data);
      //alert(form_data);                             
      $.ajax({
        url: 'scripts/imgUpload.php', // point to server-side PHP script 
        dataType: 'text',  // what to expect back from the PHP script, if anything
        cache: false,
        contentType: false,
        processData: false,
        data: form_data,                         
        type: 'post',
        success: function(){
          jQuery.get('imgs/lastImguploaded.txt', function(data) {
            $('.o-section__input-img').attr("src","imgs/"+data);
          });
        }
      });
    });
  });
});