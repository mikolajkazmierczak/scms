function PagesSaveConvert() {
  var tempEditorHtml = $.trim($(".c-editor").html());
  // check if empty and assign the pages.php welcome screen
  if(tempEditorHtml == '<div class="js-inserter"></div>') {
    tempEditorHtml = "";
    $(".c-editor").load("scms/scms_pages/pages.php");
  } else {
    //console.log(tempEditorHtml);
    $.ajax({
      url: 'scripts/pagesSave.php', // point to server-side PHP script 
      //dataType: 'text',  // what to expect back from the PHP script, if anything
      //cache: false,
      //contentType: false,
      //processData: false,
      data: { value: tempEditorHtml },         
      type: "POST",
      success: function(){
        console.log("[LOG] Page html sent to server!");
      }
    }).fail(function(){
      console.log("[LOG] There was an error while sending the img to the server...");
    });
  }
}

FIXME: check why page1.php content is not chaning on the server after save