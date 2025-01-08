let allBtn = document.querySelectorAll("#work .btn");
// add class actives
allBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    allBtn.forEach((ele) => ele.classList.remove("active"));
    btn.classList.add("active");
  });
});

// add class  opacity

// images
let allimg = document.querySelectorAll("#work .work-image div");
let web = document.querySelectorAll("#work .work-image  .web");
let logo = document.querySelectorAll("#work .work-image  .logo");
let graphic = document.querySelectorAll("#work .work-image  .graphic");
let mark = document.querySelectorAll("#work .work-image  .mark");
let video = document.querySelectorAll("#work .work-image  .vid");
// buttons
let all = document.querySelector("#work .all");
let webBtn = document.querySelector("#work .website");
let logoBtn = document.querySelector("#work .logos");
let graphicBtn = document.querySelector("#work .graphic");
let markBtn = document.querySelector("#work .marketing");
let videoBtn = document.querySelector("#work .video");

function add_opacity(element) {
  allimg.forEach((ele) => (ele.style.display = "none"));
  element.forEach((ele) => (ele.style.display = "block"));
}
all.addEventListener("click", () => add_opacity(allimg));
webBtn.addEventListener("click", () => add_opacity(web));
logoBtn.addEventListener("click", () => add_opacity(logo));
graphicBtn.addEventListener("click", () => add_opacity(graphic));
markBtn.addEventListener("click", () => add_opacity(mark));
videoBtn.addEventListener("click", () => add_opacity(video));
