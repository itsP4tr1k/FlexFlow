const text = document.getElementById("title-effect");
let i = 1;

function changeWord() {
  const words = ["Mozgás", "Közösség", "Sport", "Család"];
  const word = `${words[i]}.`;

  text.innerText = word;

  if (i + 1 == words.length) {
    i = 0;
  } else {
    i++;
  }
}

window.setInterval(() => {
  changeWord();
}, 3000);

function toggleNavbar(state) {
  if (state === false) {
    document.getElementById("navbar").dataset.show = "false";
  } else {
    if (document.getElementById("navbar").dataset.show === "true") {
      document.getElementById("navbar").dataset.show = "false";
    } else {
      document.getElementById("navbar").dataset.show = "true";
    }
  }
}

function csatlakozzFormSubmit() {
  const msg =
    "Kéréséről csapatunk értesült. Hamarosan visszajelzünk önnek a megadott e-mail címre.";

  var msgBox = document.getElementById("csatlakozz-msg");

  msgBox.innerText = msg;
}

function kapcsolatFormSubmit() {
  const msg =
    "Üzenetét csapatunk megkapta. Hamarosan visszajelzünk önnek a megadott e-mail címre.";

  var msgBox = document.getElementById("kapcsolat-msg");

  msgBox.innerText = msg;
}
