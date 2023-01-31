const filters = document.querySelectorAll(".filter");

const filtersLength = filters.length;
const listObj = document.querySelectorAll(".listObj");

const list = [];

for (var i = 0; i < filtersLength; i++) {
  console.log(filters[i].firstChild);
  filters[i].addEventListener("mouseover", function () {
    this.classList.add("active");

    this.lastChild.style.display = "flex";
  });
  filters[i].addEventListener("mouseout", function () {
    this.classList.remove("active");

    this.lastChild.style.display = "none";
  });
}

function changeToInput() {
  const filter1 = document.getElementById(filter1);
  console.log("filter1");
}
function blur(li) {
  console.log(li);
}
function setActiv(e) {
  const filterSection = document.getElementById("filterSection");

  const filterContent = document.createElement("div");
  filterContent.classList.add("choosedFilter");
  const filter = document.createElement("p");
  filter.textContent = e.textContent;

  const close = document.createElement("i");
  close.classList.add("fa-regular", "fa-circle-xmark");

  filterSection.appendChild(filterContent);
  filterContent.appendChild(filter);
  filterContent.appendChild(close);
  if (e.classList.contains("ingredient")) {
    filterContent.classList.add("ingredient");
    e.classList.add("activeFlt");
  }
  if (e.classList.contains("appliance")) {
    filterContent.classList.add("appliance");
  }
  if (e.classList.contains("ustensils")) {
    filterContent.classList.add("ustensils");
  }
  close.addEventListener("click", (e) => {
    setInactive(close.parentElement);
  });

  var filterList = [];
  var choosedFilters = document.querySelectorAll(".choosedFilter");

  for (let i = 0; i < listObj.length; i++) {
    list.push(listObj[i].textContent.toUpperCase().trim());

    for (let y = 0; y < choosedFilters.length; y++) {
      filterList.push(choosedFilters[y].textContent.toUpperCase().trim());
      if (filterList.some((element) => list.includes(element))) {
        listObj[i].classList.add("inactive");
      }
    }
  }

  updateContent();
}
function setInactive(e) {
  const filterSection = document.getElementById("filterSection");

  filterSection.removeChild(e);
  updateContent();
}
