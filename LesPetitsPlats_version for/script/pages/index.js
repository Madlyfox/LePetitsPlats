// display recipies

const mainSection = document.querySelector(".content");
const ingredientFilter = document.getElementById("filter1");
const applianceFilter = document.getElementById("filter2");
const ustencilsFilter = document.getElementById("filter3");

function displayrecipesFiltred(recipes) {
  mainSection.innerHTML = "";

  for (i = 0; i < recipes.length; i++) {
    const mainModel = recipesFiltredFactory(recipes[i]);
    const recipesFiltredDOM = mainModel.recipesFiltredDOM();
    mainSection.appendChild(recipesFiltredDOM);
  }
}

displayrecipesFiltred(recipesFiltred);

// search

function updateContent() {
  var input = document.getElementById("myInput");
  var search = input.value.toUpperCase();
  var choosedFilters = document.querySelectorAll(".choosedFilter");

  recipesFiltred = [];
  var ingredientFilterList = [];
  var applianceFilterList = [];
  var ustensilsFilterList = [];
  var transition = [];

  if (choosedFilters) {
    for (i = 0; i < choosedFilters.length; i++) {
      if (choosedFilters[i].classList.contains("ingredient")) {
        ingredientFilterList.push(
          choosedFilters[i].textContent.toUpperCase().trim()
        );
      }
      if (choosedFilters[i].classList.contains("appliance")) {
        applianceFilterList.push(
          choosedFilters[i].textContent.toUpperCase().trim()
        );
      }
      if (choosedFilters[i].classList.contains("ustensils")) {
        ustensilsFilterList.push(
          choosedFilters[i].textContent.toUpperCase().trim()
        );
      }
    }
  }

  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].name.toUpperCase().includes(search)) {
      recipesFiltred.push(recipes[i]);
    }
  }

  // Filters

  if (ingredientFilterList.length >= 1) {
    transiton = [];
    for (let i = 0; i < recipesFiltred.length; i++) {
      let recipe = recipesFiltred[i];
      for (let y = 0; y < recipe.ingredients.length; y++) {
        let localIngredient = recipe.ingredients[y];
        if (
          ingredientFilterList.includes(
            localIngredient.ingredient.toUpperCase().trim()
          )
        ) {
          transition.push(recipe);
        }
      }
    }
    recipesFiltred = [];
    recipesFiltred = transition;
  }

  if (ustensilsFilterList.length >= 1) {
    transition = [];
    for (let i = 0; i < recipesFiltred.length; i++) {
      let localUstensils = recipesFiltred[i].ustensils;
      for (let y = 0; y < localUstensils.length; y++) {
        if (
          ustensilsFilterList.includes(localUstensils[y].toUpperCase().trim())
        ) {
          transition.push(recipesFiltred[i]);
        }
      }
    }
    console.log(transition);
    recipesFiltred = [];
    recipesFiltred = transition;
  }
  if (applianceFilterList.length >= 1) {
    transition = [];

    for (let i = 0; i < recipesFiltred.length; i++) {
      recipe = recipesFiltred[i];
      if (applianceFilterList.includes(recipe.appliance.toUpperCase().trim())) {
        transition.push(recipe);
      }
    }
    recipesFiltred = [];
    recipesFiltred = transition;
  }

  ingredientFilter.removeChild(document.querySelector(".container"));
  applianceFilter.removeChild(document.querySelector(".container"));
  ustencilsFilter.removeChild(document.querySelector(".container"));

  displayrecipesFiltred(recipesFiltred);
  displayIngredientFilter(recipesFiltred);
  displayApplianceFilter(recipesFiltred);
  displayUstensilsFilter(recipesFiltred);
}

//filter 1

function displayIngredientFilter() {
  const ingredientModel = ingredientFactory(recipesFiltred);
  const ingredientsDOM = ingredientModel.ingredientsDOM();

  ingredientFilter.appendChild(ingredientsDOM);
}

displayIngredientFilter(recipesFiltred);

function filterSearch() {
  var input, ul, li, i, txtValue, choosedFilters, filtersValue;

  input = document.getElementById("ingredientInput");
  search = input.value.toUpperCase();
  ul = document.querySelector(".list");
  li = ul.querySelectorAll(".ingredient");
  filtersValue = "";
  for (i = 0; i < li.length; i++) {
    txtValue = li[i].innerText;
    if (txtValue.toUpperCase().includes(search)) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
//filter 2

function displayApplianceFilter() {
  const applianceModel = applianceFactory(recipesFiltred);
  const applianceDOM = applianceModel.applianceDOM();
  applianceFilter.appendChild(applianceDOM);
}

displayApplianceFilter(recipesFiltred);

function applianceSearch() {
  var input, ul, li, i, txtValue, filtersValue;

  input = document.getElementById("applianceInput");
  search = input.value.toUpperCase();
  ul = document.getElementById("appList");
  li = ul.querySelectorAll(".appliance");
  filtersValue = "";
  for (i = 0; i < li.length; i++) {
    txtValue = li[i].innerText;

    if (txtValue.toUpperCase().includes(search)) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
//filter 3

function displayUstensilsFilter() {
  const ustensilsModel = ustensilsFactory(recipesFiltred);
  const ustensilsDOM = ustensilsModel.ustensilsDOM();
  ustencilsFilter.appendChild(ustensilsDOM);
}

displayUstensilsFilter(recipesFiltred);

function ustencilSearch() {
  var input, ul, li, i, txtValue, filtersValue;

  input = document.getElementById("ustencilInput");
  search = input.value.toUpperCase();
  ul = document.getElementById("ustList");
  li = ul.querySelectorAll(".ustensils");
  filtersValue = "";
  for (i = 0; i < li.length; i++) {
    txtValue = li[i].innerText;
    if (txtValue.toUpperCase().includes(search)) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
