const body = document.getElementsByClassName("body")[0];

const divBox = document.createElement("div");
  divBox.className = "block database-block"

const divWrapper = document.createElement("div");
  divWrapper.className = "input_wrapper";

const form = document.createElement("form");
  form.action = "?";

const formSearch = document.createElement("input");
  formSearch.type = "search";
  formSearch.name = "q";
  formSearch.placeholder = "Søk i listen"
  formSearch.className = "search";
  formSearch.id = "searchInput";

const formSubmit = document.createElement("input");
  formSubmit.type = "submit";
  formSubmit.value = "Søk";


divWrapper.append(formSearch);
divWrapper.append(formSubmit);

form.append(divWrapper);

divBox.append(form);

body.insertBefore(divBox, body.children[1]);

