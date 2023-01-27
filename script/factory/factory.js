function recipesFiltredFactory(recipe) {
  const {
    id,
    name,
    servings,
    ingredients,
    time,
    description,
    appliance,
    ustensils,
  } = recipe;

  function recipesFiltredDOM() {
    const card = document.createElement("div");
    const a = document.createElement("a");
    a.setAttribute("href", "#");
    card.setAttribute("class", "card");
    const cardHead = document.createElement("div");
    cardHead.setAttribute("class", "cardHead");
    const cardContent = document.createElement("div");
    cardContent.setAttribute("class", "cardContent");
    const cCHead = document.createElement("div");
    cCHead.setAttribute("class", "cchead");

    const title = document.createElement("p");
    title.textContent = name;
    title.setAttribute("class", "title");
    const timer = document.createElement("p");
    timer.textContent = `${time} Min`;
    timer.setAttribute("class", "time");

    const ul = document.createElement("ul");

    const appUl = document.createElement("span");
    appUl.style.display = "none";

    const utilsUl = document.createElement("span");
    utilsUl.classList.add("ust");
    utilsUl.setAttribute("style", "display:none");

    const ingredientsLength = ingredients.length;
    for (var i = 0; i < ingredientsLength; i++) {
      let li = document.createElement("li");
      ul.classList.add("ingred");
      ul.appendChild(li);
      if (!ingredients[i].unit && ingredients[i].quantity) {
        li.innerHTML += `<p>${ingredients[i].ingredient}  :  ${ingredients[i].quantity}<p/>`;
      }
      if (!ingredients[i].unit && !ingredients[i].quantity) {
        li.innerHTML += `<p>${ingredients[i].ingredient} </p> `;
      }
      if (ingredients[i].unit && ingredients[i].quantity) {
        li.innerHTML += `<p>${ingredients[i].ingredient}  : ${ingredients[i].quantity} ${ingredients[i].unit}<p/>`;
      }
    }

    //appliance

    const appli = document.createElement("p");
    appli.textContent = appliance;

    appUl.appendChild(appli);

    //ustensils
    const ustensilsLength = ustensils.length;
    for (var i = 0; i < ustensilsLength; i++) {
      let p = document.createElement("p");
      utilsUl.appendChild(p);
      p.innerHTML = `${ustensils[i]}  `;
    }

    const info = document.createElement("p");
    info.textContent = description;
    info.setAttribute("class", "info");

    card.appendChild(a);
    a.appendChild(cardHead);
    a.appendChild(cardContent);
    cardContent.appendChild(cCHead);
    info.appendChild(appUl);
    info.appendChild(utilsUl);

    cCHead.appendChild(title);
    cCHead.appendChild(timer);
    cardContent.appendChild(ul);
    cardContent.appendChild(info);

    return card;
  }
  return { name, time, description, recipesFiltredDOM };
}
function ingredientFactory(recipesFiltred) {
  const { ingredients } = recipesFiltred;
  let mapTest = [];
  for (i = 1; i < recipesFiltred.length; i++) {
    const test = recipesFiltred[i].ingredients;

    for (y = 1; y < test.length; y++) {
      mapTest.push(test[y].ingredient);
    }
  }

  let uniqMapTest = [...new Set(mapTest)];

  function ingredientsDOM() {
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    const input = document.createElement("input");
    input.classList.add("input");
    input.setAttribute("tabIndex", "0");
    input.setAttribute("id", "ingredientInput");
    input.setAttribute("onkeyup", "filterSearch()");

    const listContainer = document.createElement("div");
    listContainer.setAttribute("class", "listContainer");

    const ingredients = document.createElement("div");
    ingredients.setAttribute("class", "list");
    for (i = 1; i < uniqMapTest.length; i++) {
      let li = document.createElement("div");
      ingredients.appendChild(li);
      li.textContent = uniqMapTest[i];
      li.classList.add("ingredient", "listObj");
      li.addEventListener("click", (event) => {
        setActiv(li);
      });
    }
    container.appendChild(input);
    container.appendChild(listContainer);
    listContainer.appendChild(ingredients);

    return container;
  }
  return { ingredients, ingredientsDOM };
}
function applianceFactory(recipesFiltred) {
  let map = [];

  for (i = 1; i < recipesFiltred.length; i++) {
    map.push(recipesFiltred[i].appliance);
  }

  let uniqMap = [...new Set(map)];

  function applianceDOM() {
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    const input = document.createElement("input");
    input.classList.add("input");
    input.setAttribute("id", "applianceInput");
    input.setAttribute("onkeyup", "applianceSearch()");

    const listContainer = document.createElement("div");
    listContainer.setAttribute("class", "listContainer");

    const appliance = document.createElement("div");
    appliance.setAttribute("class", "list");
    for (i = 1; i < uniqMap.length; i++) {
      let li = document.createElement("div");
      appliance.appendChild(li);
      li.textContent = uniqMap[i];
      li.classList.add("appliance");
      li.addEventListener("click", (e) => {
        setActiv(li);
      });
    }
    container.appendChild(input);
    container.appendChild(listContainer);
    listContainer.appendChild(appliance);

    return container;
  }
  return { applianceDOM };
}

function ustensilsFactory(recipesFiltred) {
  let map = [];

  for (i = 1; i < recipesFiltred.length; i++) {
    let ustencil = recipesFiltred[i].ustensils;
    for (let y = 0; y < ustencil.length; y++) {
      let test = ustencil[y];
      map.push(test);
    }
  }

  let uniqMap = [...new Set(map)];

  function ustensilsDOM() {
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    const input = document.createElement("input");
    input.classList.add("input");
    input.setAttribute("id", "ustencilInput");
    input.setAttribute("onkeyup", "ustencilSearch()");

    const listContainer = document.createElement("div");
    listContainer.setAttribute("class", "listContainer");

    const ustensils = document.createElement("div");
    ustensils.setAttribute("class", "list");
    for (let i = 0; i < uniqMap.length; i++) {
      let li = document.createElement("div");
      ustensils.appendChild(li);
      li.textContent = uniqMap[i];
      li.classList.add("ustensils");
      li.addEventListener("click", (event) => {
        setActiv(li);
      });
    }

    container.appendChild(input);
    container.appendChild(listContainer);
    listContainer.appendChild(ustensils);

    return container;
  }
  return { ustensilsDOM };
}
