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

function toggleNavbar() {
  if (document.getElementById("navbar").dataset.show === "true") {
    document.getElementById("navbar").dataset.show = "false";
  } else {
    document.getElementById("navbar").dataset.show = "true";
  }
}

function setPage(page, subdir) {
  if (page === "home" || (page === "index" && subdir === undefined)) {
    window.location.href = `/`;
  } else {
    if (subdir === undefined) {
      window.location.href = `/${page}.html`;
    } else {
      window.location.href = `/${page}.html#${subdir}`;
    }
  }
}
