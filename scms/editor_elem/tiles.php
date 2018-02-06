<div class="o-bar">
  <h1 class="o-bar__h1">Płytki</h1>

  <img class="o-bar__img o-bar__img--move-up js-move-up" src="icons/editor/color/arrow.svg" alt="">
  <img class="o-bar__img o-bar__img--move-down js-move-down" src="icons/editor/color/arrow.svg" alt="">
  <img class="o-bar__img js-remove" src="icons/editor/color/remove.svg" alt="">
</div>

<div class="o-section__content o-section__content--tiles">
  <div class="o-section__tiles border-on-edit">
    
    <div class="o-section__tile">
      <h1 class="o-section__name">Miniaturka:</h1>
      <form class="o-section__form" method="post" enctype="multipart/form-data">
        <input class="o-section__fileToUpload border-on-edit" name="imgUploader" type="file">
        <div class="o-section__img-wrapper">
          <img class="o-section__img" src="" alt="">
        </div>
      </form>

      <h1 class="o-section__name o-section__name--tile">Tytuł</h1>
      <input class="o-section__input border-on-edit" value="" type="text" placeholder="Wpisz tytuł płytki" oninput="AssignInput()">
    </div>

    <div class="o-section__button-wrapper">
      <div class="o-section__button js-add-tile">
        <img class="o-section__img" src="icons/menu/color/plus.svg" alt="">
        <!-- <h1 class="o-section__name o-section__name--tile o-section__name--button">Dodaj płytkę</h1> -->
      </div>
    </div>
  </div>
</div>