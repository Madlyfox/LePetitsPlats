// display recipies

const mainSection = document.querySelector(".content");
const ingredientFilter = document.getElementById("filter1");
const applianceFilter = document.getElementById("filter2");
const ustensilssFilter = document.getElementById("filter3");

function displayrecipesFiltred(recipes) {
  mainSection.innerHTML = "";
  recipes.forEach((recipe) => {
    const mainModel = recipesFiltredFactory(recipe);
    const recipesFiltredDOM = mainModel.recipesFiltredDOM();
    mainSection.appendChild(recipesFiltredDOM);
  });
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
    choosedFilters.forEach((filter) => {
      if (filter.classList.contains("ingredient")) {
        ingredientFilterList.push(filter.textContent.toUpperCase().trim());
      }
      if (filter.classList.contains("appliance")) {
        applianceFilterList.push(filter.textContent.toUpperCase().trim());
      }
      if (filter.classList.contains("ustensils")) {
        ustensilsFilterList.push(filter.textContent.toUpperCase().trim());
      }
    });
  }

  recipes.forEach((e) => {
    if (e.name.toUpperCase().includes(search)) {
      recipesFiltred.push(e);
    }
  });

  // Filter Ingredient
  if (ingredientFilterList.length >= 1) {
    transition = [];
    recipesFiltred.forEach((recipe) => {
      recipe.ingredients.forEach((ingredient) => {
        if (
          ingredientFilterList.includes(
            ingredient.ingredient.toUpperCase().trim()
          )
        ) {
          transition.push(recipe);
        }
      });
    });
    recipesFiltred = [];
    recipesFiltred = transition;
  }

  if (applianceFilterList.length >= 1) {
    transition = [];
    recipesFiltred.forEach((recipe) => {
      if (applianceFilterList.includes(recipe.appliance.toUpperCase().trim())) {
        transition.push(recipe);
      }
    });
    recipesFiltred = [];
    recipesFiltred = transition;
  }

  if (ustensilsFilterList.length >= 1) {
    transition = [];
    recipesFiltred.forEach((recipe) => {
      recipe.ustensils.forEach((ustensil) => {
        if (ustensilsFilterList.includes(ustensil.toUpperCase().trim())) {
          transition.push(recipe);
        }
      });
    });
    recipesFiltred = [];
    recipesFiltred = transition;
  }

  ingredientFilter.removeChild(document.querySelector(".container"));
  applianceFilter.removeChild(document.querySelector(".container"));
  ustensilssFilter.removeChild(document.querySelector(".container"));

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
  li = document.querySelectorAll(".ingredient");
  filtersValue = "";
  li.forEach((ingredient) => {
    txtValue = ingredient.innerText;
    if (txtValue.toUpperCase().includes(search)) {
      ingredient.style.display = "";
    } else {
      ingredient.style.display = "none";
    }
  });
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
  li = document.querySelectorAll(".appliance");
  filtersValue = "";
  li.forEach((appliance) => {
    txtValue = appliance.innerText;

    if (txtValue.toUpperCase().includes(search)) {
      appliance.style.display = "";
    } else {
      appliance.style.display = "none";
    }
  });
}
//filter 3

function displayUstensilsFilter() {
  const ustensilsModel = ustensilsFactory(recipesFiltred);
  const ustensilsDOM = ustensilsModel.ustensilsDOM();
  ustensilssFilter.appendChild(ustensilsDOM);
}

displayUstensilsFilter(recipesFiltred);

function ustensilsSearch() {
  var input, li, txtValue, filtersValue;

  input = document.getElementById("ustensilsInput");
  search = input.value.toUpperCase();
  li = document.querySelectorAll(".ustensils");
  filtersValue = "";
  li.forEach((ustensils) => {
    txtValue = ustensils.innerText;
    if (txtValue.toUpperCase().includes(search)) {
      ustensils.style.display = "";
    } else {
      ustensils.style.display = "none";
    }
  });
}
