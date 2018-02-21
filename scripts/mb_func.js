$(function(){
  // menu top buttons
  $(".js-back-button").on("click", function(){
    $(".c-editor").html("error:nocontent(no_niestety_to_potem)");
    Save();
  });
  
  $(".js-home-button").on("click", function(){
    $(".c-editor").load("scms/scms_pages/home.php");
    $(".c-header__h1").text("");
    // hiding the edition buttons
    $(".js-add-buttons").css("display","none");
    $(".js-add").css("display","none");
    $(".js-save").css("display","none");
    Save();
  });

  $(".js-pages-button").on("click", function(){
    $pages_or_page = "pages";
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
    Save();
  });

  // editing buttons
  function AddSectionMenuButton(sectionName) {
    $(".js-add-buttons").on("click",".js-add-"+sectionName,function(){
      $(".o-section--expl").remove(); // remove the explanation
      $(".js-inserter").before("<section class='o-section o-section--"+sectionName+"'></section>"); // add a section
      $(".o-section--"+sectionName).last().load("scms/editor_elem/"+sectionName+".php", function(){
        Save();
      }); // throw stuff in the section and then save
    });
  }
  AddSectionMenuButton("page");
  $(".js-add-buttons").on("click",".js-add-page",function(){
    
  });
  AddSectionMenuButton("text");
  AddSectionMenuButton("img");
  AddSectionMenuButton("tiles");
  AddSectionMenuButton("code");


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
    Save();
  });

  $(".c-menu__img-wrapper--help").hover(function(){
    $(".c-menu__tooltip").addClass("c-menu__tooltip--hovered");
  },function(){
    $(".c-menu__tooltip").removeClass("c-menu__tooltip--hovered");
  });
});