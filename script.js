function allMenu() {
  $.getJSON("pizza.json", function (menus) {
    const menu = menus.menu;
    let card = "";
    $.each(menu, function (i, m) {
      card += `<div class=" col-md-4 mb-4">
                  <div class="card">
                    <img class="img-fluid" src="img/pizza/${m.gambar}" class="card-img-top" alt="">
                    <div class="card-body">
                      <h5 class="card-title">${m.nama}</h5>
                      <p class="card-text">${m.deskripsi}</p>
                      <h5 class="card-title">${m.harga}</h5>
                      <a href="#" class="btn btn-primary">Pesan</a>
                    </div>
                  </div>
                </div>`;
      $(".cards").html(card);
    });
  });
}

allMenu();

$(".nav-link").on("click", function () {
  $(".nav-link").removeClass("active");
  $(this).addClass("active");

  let kategori = $(this).html();
  $("h1").html(kategori);

  $.getJSON("pizza.json", function (menus) {
    const menu = menus.menu;
    let card = "";

    if (kategori.toLowerCase() == "all menu") {
      allMenu();
    }

    $.each(menu, function (i, m) {
      if (kategori.toLowerCase() == m.kategori) {
        card += `<div class=" col-md-4 mb-4">
                  <div class="card">
                    <img class="img-fluid" src="img/pizza/${m.gambar}" class="card-img-top" alt="">
                    <div class="card-body">
                      <h5 class="card-title">${m.nama}</h5>
                      <p class="card-text">${m.deskripsi}</p>
                      <h5 class="card-title">${m.harga}</h5>
                      <a href="#" class="btn btn-primary">Pesan</a>
                    </div>
                  </div>
                </div>`;
        $(".cards").html(card);
      }
    });
  });
});

$(".searchKey").on("click", function () {
  $(".inputKey").focus();
});
