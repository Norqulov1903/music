const inputBox = document.getElementById("input-box");
const results = document.getElementById("results");
const audios = document.getElementById("audios");
// const load = document.getElementById("load");
const btn = document.getElementById("btn");
const elForm = document.getElementById("form");
const loading = document.getElementById("preloader")
loading.style.display = "none";
btn.onclick = (event) => {
  // load.innerHTML = "Loading..";
  // setTimeout(() => {
  //   load.innerHTML = "";
  // }, 2000);

  event.preventDefault();
  loading.style.display = "block";
  fetch(`https://spotify81.p.rapidapi.com/download_track?q=${inputBox.value}`, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c5b09d4a95mshd8c0c09b37f311dp18bacejsna626f782db78",
      "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {

      res.artists.items.forEach((element) => {
        results.innerHTML += `<li>${element.profile.name}</li>`;
      });

      res.youtube.download.forEach((item) => {
        audios.innerHTML += ` <audio controls src=${item.url}></audio>
          `;
      });
    })   .finally(function () {
      loading.style.display = "none";
    });

  newresults();
};
function newresults() {
  results.innerHTML = "";
  audios.innerHTML = "";
}
