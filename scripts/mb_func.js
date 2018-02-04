$(function(){
  // menu top buttons
  $(".js-back-button").on("click", function(){
    $(".c-editor").html("error:nocontent(no_niestety_to_potem)");
  });
  
  $(".js-home-button").on("click", function(){
    $(".c-editor").load("scms/scms_pages/home.php");
    $(".c-header__h1").text("");
    // hiding the edition buttons
    $(".js-add-buttons").css("display","none");
    $(".js-add").css("display","none");
    $(".js-save").css("display","none");
  });

  $(".js-subpages-button").on("click", function(){
    if($edit_subpages == "") {
      $(".c-editor").load("scms/scms_pages/pages.php");
    } else {
      $(".c-editor").html($edit_subpages);
    }
    $(".c-header__h1").text("Strony");
    // showing the edition buttons
    $(".js-add-buttons").load("scms/mb_add/mb_page.php");
    $(".js-add-buttons").css("display","block");
    $(".js-add").css("display","flex");
    $(".js-save").css("display","flex");
  });


    // editing buttons
    $(".js-add-buttons").on("click",".js-add-text",function(){
      $(".o-section--expl").remove(); // remove the explanation
      $(".js-inserter").before("<section class='o-section o-section--text'></section>"); // add a section
      $(".o-section--text").last().load("scms/editor_elem/text.php"); // throw stuff in the section
    });
    $(".js-add-buttons").on("click",".js-add-img",function(){
      $(".o-section--expl").remove(); // remove the explanation
      $(".js-inserter").before("<section class='o-section o-section--img'></section>"); // add a section
      $(".o-section--img").last().load("scms/editor_elem/img.php"); // throw stuff in the section
    });
    $(".js-add-buttons").on("click",".js-add-tiles",function(){
      $(".o-section--expl").remove(); // remove the explanation
      $(".js-inserter").before("<section class='o-section o-section--tiles'></section>"); // add a section
      $(".o-section--tiles").last().load("scms/editor_elem/tiles.php"); // throw stuff in the section
    });
    $(".js-add-buttons").on("click",".js-add-code",function(){
      $(".o-section--expl").remove(); // remove the explanation
      $(".js-inserter").before("<section class='o-section o-section--code'></section>"); // add a section
      $(".o-section--code").last().load("scms/editor_elem/code.php"); // throw stuff in the section
    });
  
    $(".js-add-buttons").on("click",".js-add-subpage",function(){
      $(".o-section--expl").remove(); // remove the explanation
      $(".js-inserter").before("<section class='o-section o-section--subpage'></section>"); // add a section
      $(".o-section--subpage").last().load("scms/editor_elem/subpage.php"); // throw stuff in the section
    });


  // menu buttom buttons
  var addMenuOpened = false;
  $(".js-add").on("click",function(){
    if(addMenuOpened == false) {
      addMenuOpened = true;
      $(".js-add").children(".c-menu__img-wrapper").children(".c-menu__img").css("transform","rotate(45deg)");
      $(".js-add-buttons").css("transform","translateY(0)");
      $(".c-menu__tooltip--sub").css("display","flex");
    } else {
      addMenuOpened = false;
      //$(".js-add-buttons").html("");
      $(".js-add").children(".c-menu__img-wrapper").children(".c-menu__img").css("transform","rotate(0)");
      $(".js-add-buttons").css("transform","translateY(100%)");
      $(".c-menu__tooltip--sub").css("display","none");
    }
  });

  $(".js-save").on("click", function(){
    var trimEditorHtml = $.trim($(".c-editor").html());
    if(trimEditorHtml == '<div class="js-inserter"></div>') {
      $edit_subpages = "";
      $(".c-editor").load("scms/scms_pages/pages.php");
    } else {
      $edit_subpages = trimEditorHtml;
    }
    alert("Zapisano!");
  });

  $(".c-menu__img-wrapper--help").hover(function(){
    $(".c-menu__tooltip").addClass("c-menu__tooltip--hovered");
  },function(){
    $(".c-menu__tooltip").removeClass("c-menu__tooltip--hovered");
  });
});