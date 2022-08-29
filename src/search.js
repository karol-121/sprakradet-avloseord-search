console.log("extension loaded :)");

const tableHeaderRegEx = /\nImportord\nAvløserord\n/;
const tableSectionHeaderRegEx = /\n\n[A-Z]{1}\n\n.*\n/;

const querystring = document.location.search;
const params = new URLSearchParams(querystring);
const searchTerm = String (params.get("q")); //ensures that searchTerm is always a string, allows to use .length in if statement

const list = document.querySelector('tbody');
const searchInput = document.getElementById('searchInput');



if (searchTerm != "null" && searchTerm.length > 0) { //do search if string exist and is not empty

  //todo convert single letter searches to indexes "a" -> "#a"

  searchInput.value = searchTerm;

  for (let row of list.rows) {
    
    filter(row, filterAction);

  }

}


//this function filters table
function filter(node, action) {

  //if node is a table header, skip filtering
  if (node.textContent.match(tableHeaderRegEx)) {
    return;
  }

  //if node is a section header, skip filtering
  if (node.textContent.match(tableSectionHeaderRegEx)) {
    return;
  }

  //if node does not contain search term
  if (node.textContent.indexOf(searchTerm) === -1) {
      
      action(node); //callback to action

    }
}


//this function specifies action that will result in filtering, in this case every irrelevant node will be hidden.
function filterAction(node) {

  node.style.display = "none";
  //todo: hiding rows in table does not affect altered background thus is does render fail,.

}