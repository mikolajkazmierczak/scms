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
});