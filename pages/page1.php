<section class="o-section o-section--img"><div class="o-bar">
  <h1 class="o-bar__h1">Zdjęcie</h1>

  <img class="o-bar__img o-bar__img--move-up js-move-up" src="icons/editor/color/arrow.svg" alt="">
  <img class="o-bar__img o-bar__img--move-down js-move-down" src="icons/editor/color/arrow.svg" alt="">
  <img class="o-bar__img js-remove" src="icons/editor/color/remove.svg" alt="">
</div>

<div class="o-section__content">
  <form class="o-section__form" method="post" enctype="multipart/form-data">
    <input class="o-section__fileToUpload border-on-edit" name="imgUploader" type="file">
    <div class="o-section__img-wrapper">
      <img class="o-section__img" src="" alt="">
    </div>
  </form>
</div></section><section class="o-section o-section--code"><div class="o-bar">
  <h1 class="o-bar__h1">Kod</h1>

  <img class="o-bar__img o-bar__img--move-up js-move-up" src="icons/editor/color/arrow.svg" alt="">
  <img class="o-bar__img o-bar__img--move-down js-move-down" src="icons/editor/color/arrow.svg" alt="">
  <img class="o-bar__img js-remove" src="icons/editor/color/remove.svg" alt="">
</div>

<div class="o-section__content">
  <textarea class="o-section__textarea border-on-edit" cols="30" rows="10" placeholder="Wpisz kod html" oninput="AssignInput()"></textarea>
</div></section><section class="o-section o-section--page"><div class="o-bar">
  <img class="o-bar__img js-edit" src="http://localhost/scms/icons/editor/color/edit.svg" alt="">
  <h1 class="o-bar__h1">Strona</h1>

  <img class="o-bar__img o-bar__img--move-up js-move-up" src="http://localhost/scms/icons/editor/color/arrow.svg" alt="">
  <img class="o-bar__img o-bar__img--move-down js-move-down" src="http://localhost/scms/icons/editor/color/arrow.svg" alt="">
  <img class="o-bar__img js-remove" src="http://localhost/scms/icons/editor/color/remove.svg" alt="">
</div>

<div class="o-section__content">
  <h1 class="o-section__name">Tytuł:</h1>
  <input class="o-section__input js-page-title border-on-edit" value="" type="text" placeholder="Wpisz nazwę strony" oninput="AssignInput()">
  
  <!-- <h1 class="o-section__name">Bibliografia:</h1>
  <textarea class="o-section__textarea" cols="30" rows="10" placeholder="Wpisz bibliografię" oninput="AssignInput()"></textarea> -->
</div></section><div class="js-inserter"></div>