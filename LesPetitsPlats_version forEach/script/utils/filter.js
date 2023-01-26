const filters = document.querySelectorAll(".filter");
console.log(filters);
filters.forEach((e) => {
  console.log(e.firstChild);
  e.addEventListener("mouseover", function () {
    e.classList.add("active");

    e.lastChild.style.display = "flex";
  });
  e.addEventListener("mouseout", function () {
    e.classList.remove("active");

    e.lastChild.style.display = "none";
  });
});

function changeToInput() {
  const filter1 = document.getElementById(filter1);
  console.log("filter1");
}
function setActiv(e) {
  const filterSection = document.getElementById("filterSection");

  const filterContent = document.createElement("div");
  filterContent.classList.add("choosedFilter");
  const filter = document.createElement("p");
  filter.textContent = e.textContent;

  console.log(e);
  const close = document.createElement("i");
  close.classList.add("fa-regular", "fa-circle-xmark");

  filterSection.appendChild(filterContent);
  filterContent.appendChild(filter);
  filterContent.appendChild(close);
  if (e.classList.contains("ingredient")) {
    filterContent.classList.add("ingredient");
  }
  if (e.classList.contains("appliance")) {
    filterContent.classList.add("appliance");
  }
  if (e.classList.contains("ustensils")) {
    filterContent.classList.add("ustensils");
  }
  close.addEventListener("click", () => {
    e.classList.remove("disabled");
    setInactive(close.parentElement);
  });
  updateContent();
}
function setInactive(e) {
  const filterSection = document.getElementById("filterSection");

  filterSection.removeChild(e);
  updateContent();
}
