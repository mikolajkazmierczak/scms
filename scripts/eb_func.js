$(function(){
  // bar right
  $(".c-editor").on("click",".js-move-up",function(){
    var thisSection = $(this).parent().parent(); // get this section
    thisSection.wrap("<p/>"); // wrap this section in p
    var tempHtml = thisSection.parent().html(); // get html of p
    thisSection.unwrap(); // unwrap the section of p
    if(thisSection.prev(".o-section").length) { // check if there is any previous section before this section
      thisSection.prev(".o-section").before(tempHtml); // add tempHtml (this section) before the previous section
      thisSection.remove(); // remove this section
    }
  });
  $(".c-editor").on("click",".js-move-down",function(){
    var thisSection = $(this).parent().parent(); // get this section
    thisSection.wrap("<p/>"); // wrap this section in p
    var tempHtml = thisSection.parent().html(); // get html of p
    thisSection.unwrap(); // unwrap the section of p
    if(thisSection.next(".o-section").length) { // check if there is any next section before this section
      thisSection.next(".o-section").after(tempHtml); // add tempHtml (this section) after the next section
      thisSection.remove(); // remove this section
    }
  });
  $(".c-editor").on("click",".js-remove",function(){
    if(confirm("Are you sure?")) {
      $(this).parent(".o-bar").parent(".o-section").remove();
    }
  });

  // section
  $(".c-editor").on("click",".js-add-tile",function(){
    var tile =
      '<div class="o-section__tile">\
        <img class="o-section__img" src="imgs/zyczenia.png"\
        alt="">\
        <h1 class="o-section__name\
        o-section__name--tile">Płytka</h1>\
      </div>';
    console.log(tile);
  });
});