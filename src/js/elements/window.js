var check = false;

function action() {
  if (check === false) {
    document.querySelector("#window").style.display = "flex";
    check = true;
  } else {
    document.querySelector("#window").style.display = "none";
    check = false;
  }
}

function openLocations() {
  document.querySelector("#location-list").style.display = "grid";
  document.querySelector("#guest-list").style.display = "none";
  document.getElementsByClassName("molecule-search-label__location-button").style.border = "1px solid black";
}

function openGuests() {
  document.querySelector("#guest-list").style.display = "grid";
  document.querySelector("#location-list").style.display = "none";
  document.getElementsByClassName("molecule-search-label__guest-button").style.border = "1px solid black";
}

const Adults = document.getElementById("adult-number");
const Childrens = document.getElementById("child-number");
const Guest = document.getElementById("molecule-search-label__guest-text");
const Guests = document.getElementById("molecule-search-block__guest-button-text");

var guests = 0, a = 0, c = 0;

function plusAdults() {
  a++;
  Adults.textContent = a;
  guests = a + c;
  Guest.textContent = guests;
  Guests.textContent = "Guests: " + guests;
}

function minusAdults() {
  if (a > 0) a--;
  Adults.textContent = a;
  guests = a + c;
  Guest.textContent = guests;
  Guests.textContent = "Guests: " + guests;
}

function plusChildrens() {
  c++;
  Childrens.textContent = c;
  guests = a + c;
  Guest.textContent = guests;
  Guests.textContent = "Guests: " + guests;
}

function minusChildrens() {
  if (c > 0) c--;
  Childrens.textContent = c;
  guests = a + c;
  Guest.textContent = guests;
  Guests.textContent = "Guests: " + guests;
}

function change(id) { 
  const location = document.getElementById("molecule-search-block__location-button-text");
  const ilocation = document.getElementById("molecule-search-label__location-text");
  const flocation = document.getElementById(id);
  ilocation.textContent = flocation.textContent;
  location.textContent = flocation.textContent
}

function mode() {
  const dark = document.getElementById("dark");
  const light = document.getElementById("light");
  const background_body = document.getElementById("background-body");

  if (dark.style.display === "none") {
    dark.style.display = "initial";
    light.style.display = "none";
    background_body.style.background = "white";
  } else {
    dark.style.display = "none";
    light.style.display = "initial";
    background_body.style.background = "rgba(30, 30, 30, 1)";
  }

  invert(dark);
}

function invert(darkmode) {
  var window_content = document.getElementsByClassName("window-content");
  var molecule_search_label__label = document.getElementsByClassName("molecule-search-label__label");
  var atom_button_optionlocation__pin_icon = document.getElementsByClassName("atom-button-optionlocation__pin-icon");
  var optionlocation1 = document.getElementById("atom-button-optionlocation__text-id1");
  var optionlocation2 = document.getElementById("atom-button-optionlocation__text-id2");
  var optionlocation3 = document.getElementById("atom-button-optionlocation__text-id3");
  var optionlocation4 = document.getElementById("atom-button-optionlocation__text-id4");
  var molecule_search_label__location_button_text = document.getElementsByClassName("molecule-search-label__location-button-text");
  var molecule_search_label__guest_button_text = document.getElementsByClassName("molecule-search-label__guest-button-text");
  var molecule_search_label__location_text = document.getElementById("molecule-search-label__location-text");
  var molecule_search_label__guest_text = document.getElementById("molecule-search-label__guest-text");
  var molecule_guest_type__guest = document.getElementsByClassName("molecule-guest-type__guest");
  var atom_button_plus__button = document.getElementsByClassName("atom-button-plus__button");
  var atom_button_minus__button = document.getElementsByClassName("atom-button-minus__button");

  var molecule_search_block__block = document.getElementsByClassName("molecule-search-block__block");
  var molecule_search_block__location_button_text = document.getElementById("molecule-search-block__location-button-text");
  var molecule_search_block__guest_button_text = document.getElementById("molecule-search-block__guest-button-text");

  var molecule_title__title_h1 = document.getElementById("molecule-title__title-h1");
  var molecule_title__title_text = document.getElementById("molecule-title__title-text");

  var atom_button_superhost__button = document.getElementsByClassName("atom-button-superhost__button");
  var atom_text_cardrating__rating = document.getElementsByClassName("atom-text-cardrating__rating");
  var atom_text_cardroom__room_info = document.getElementsByClassName("atom-text-cardroom__room-info");

  if (darkmode.style.display === "none") {
    for (var i of window_content) {
      i.classList.add("mode");
    }

    for(var i of molecule_search_label__label) {
      i.classList.add("mode");
    }

    for(var i of atom_button_optionlocation__pin_icon) {
      i.classList.add("mode");
    }

    optionlocation1.classList.add("mode");
    optionlocation2.classList.add("mode");
    optionlocation3.classList.add("mode");
    optionlocation4.classList.add("mode");

    for(var i of molecule_search_label__location_button_text) {
      i.classList.add("mode");
    }

    for(var i of molecule_search_label__guest_button_text) {
      i.classList.add("mode");
    }

    molecule_search_label__location_text.classList.add("mode");
    molecule_search_label__guest_text.classList.add("mode");

    for(var i of molecule_guest_type__guest) {
      i.classList.add("mode");
    }

    Adults.style.color = "white";
    Childrens.style.color = "white";

    for(var i of atom_button_plus__button) {
      i.classList.add("mode");
    }

    for(var i of atom_button_minus__button) {
      i.classList.add("mode");
    }


    for(var i of molecule_search_block__block) {
      i.classList.add("mode");
    }

    molecule_search_block__location_button_text.classList.add("mode");
    molecule_search_block__guest_button_text.classList.add("mode");


    molecule_title__title_h1.classList.add("mode");
    molecule_title__title_text.classList.add("mode");


    for (var i of atom_button_superhost__button) {
      i.classList.add("mode");
    }

    for (var i of atom_text_cardrating__rating) {
      i.classList.add("mode");
    }

    for(var i of atom_text_cardroom__room_info) {
      i.classList.add("mode");
    }
  } else {
    for (var i of window_content) {
      i.classList.remove("mode");
    }

    for(var i of molecule_search_label__label) {
      i.classList.remove("mode");
    }

    for(var i of atom_button_optionlocation__pin_icon) {
      i.classList.remove("mode");
    }

    optionlocation1.classList.remove("mode");
    optionlocation2.classList.remove("mode");
    optionlocation3.classList.remove("mode");
    optionlocation4.classList.remove("mode");

    for(var i of molecule_search_label__location_button_text) {
      i.classList.remove("mode");
    }

    for(var i of molecule_search_label__guest_button_text) {
      i.classList.remove("mode");
    }

    molecule_search_label__location_text.classList.remove("mode");
    molecule_search_label__guest_text.classList.remove("mode");
    
    for(var i of molecule_guest_type__guest) {
      i.classList.remove("mode");
    }

    Adults.style.color = "#333333";
    Childrens.style.color = "#333333";

    for(var i of atom_button_plus__button) {
      i.classList.remove("mode");
    }

    for(var i of atom_button_minus__button) {
      i.classList.remove("mode");
    }


    for(var i of molecule_search_block__block) {
      i.classList.remove("mode");
    }

    molecule_search_block__location_button_text.classList.remove("mode");
    molecule_search_block__guest_button_text.classList.remove("mode");


    molecule_title__title_h1.classList.remove("mode");
    molecule_title__title_text.classList.remove("mode");

    
    for (var i of atom_button_superhost__button) {
      i.classList.remove("mode");
    }

    for (var i of atom_text_cardrating__rating) {
      i.classList.remove("mode");
    }

    for(var i of atom_text_cardroom__room_info) {
      i.classList.remove("mode");
    }
  }
}