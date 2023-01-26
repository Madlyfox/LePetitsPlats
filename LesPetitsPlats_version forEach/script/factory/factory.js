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
    card.setAttribute("id", `${id}`);
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

    ingredients.forEach((e) => {
      let li = document.createElement("li");
      ul.classList.add("ingred");
      ul.appendChild(li);
      if (!e.unit && e.quantity) {
        li.innerHTML += `<p class="ingredOnDisplay"> ${e.ingredient} </p> : <small> ${e.quantity} <small/>`;
      }
      if (!e.unit && !e.quantity) {
        li.innerHTML += `<p class="ingredOnDisplay"> ${e.ingredient} </p> `;
      }
      if (e.unit && e.quantity) {
        li.innerHTML += `<p class="ingredOnDisplay"> ${e.ingredient} </p> : <small> ${e.quantity} ${e.unit} <small/>`;
      }
    });

    //appliance

    const appli = document.createElement("p");
    appli.textContent = appliance;

    appUl.appendChild(appli);

    //ustensils
    ustensils.forEach((e) => {
      let p = document.createElement("p");
      utilsUl.appendChild(p);
      p.innerHTML = `${e}  `;
    });

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
let test;
function ingredientFactory(recipesFiltred) {
  let ingredientsList = document.querySelectorAll(".ingredOnDisplay");
  let ingredArray = [...ingredientsList];

  map1 = ingredArray.map(function (e) {
    return e.textContent;
  });
  function uniq(map1) {
    return map1.sort().filter(function (item, pos, ary) {
      return !pos || item != ary[pos - 1];
    });
  }
  mapped = uniq(map1);

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
    mapped.forEach((element) => {
      let li = document.createElement("div");
      ingredients.appendChild(li);
      li.textContent = element;
      li.classList.add("ingredient");
      li.addEventListener("click", (e) => {
        setActiv(li);
      });
    });
    container.appendChild(input);
    container.appendChild(listContainer);
    listContainer.appendChild(ingredients);

    return container;
  }
  return { ingredientsList, ingredientsDOM };
}
function applianceFactory(recipesFiltred) {
  const applianceMap = recipesFiltred.map(function (e) {
    const sortAp = e.appliance;
    return sortAp;
  });

  function uniq(appliance) {
    return appliance.sort().filter(function (item, pos, ary) {
      return !pos || item != ary[pos - 1];
    });
  }
  mappedAp = uniq(applianceMap);

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
    mappedAp.forEach((element) => {
      let li = document.createElement("div");
      appliance.appendChild(li);
      li.textContent = element;
      li.classList.add("appliance");
      li.addEventListener("click", (e) => {
        setActiv(li);
      });
    });
    container.appendChild(input);
    container.appendChild(listContainer);
    listContainer.appendChild(appliance);

    return container;
  }
  return { applianceDOM };
}
function ustensilsFactory(recipesFiltred) {
  const ustMAp = recipesFiltred.map(function (e) {
    const sortUst = e.ustensils;
    let sortedUst;
    sortUst.forEach((ustensils) => {
      sortedUst = ustensils;
      return sortedUst;
    });
    return sortedUst;
  });

  function uniq(ustensils) {
    return ustensils.sort().filter(function (item, pos, ary) {
      return !pos || item != ary[pos - 1];
    });
  }
  mappedUst = uniq(ustMAp);
  function ustensilsDOM() {
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    const input = document.createElement("input");
    input.classList.add("input");
    input.setAttribute("id", "ustensilsInput");
    input.setAttribute("onkeyup", "ustensilsSearch()");

    const listContainer = document.createElement("div");
    listContainer.setAttribute("class", "listContainer");

    const ustensils = document.createElement("div");
    ustensils.setAttribute("class", "list");
    mappedUst.forEach((element) => {
      let li = document.createElement("div");
      ustensils.appendChild(li);
      li.textContent = element;
      li.classList.add("ustensils");
      li.addEventListener("click", (e) => {
        setActiv(li);
      });
    });
    container.appendChild(input);
    container.appendChild(listContainer);
    listContainer.appendChild(ustensils);

    return container;
  }
  return { ustensilsDOM };
}
