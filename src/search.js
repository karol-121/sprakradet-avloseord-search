//main logic

const querystring = document.location.search;
const params = new URLSearchParams(querystring);
const searchTerm = String (params.get("q")); //ensures that searchTerm is always a string, allows to use .length in if statement

const list = document.querySelector('tbody');
const searchInput = document.getElementById('searchInput');


//do search if string exist and is not empty
if (searchTerm != "null" && searchTerm.length > 1) { 

  searchInput.value = searchTerm; //put searched term in to search input

  body.children[2].remove(); //remove index link while searching as it won't work due to the filtered table

  for (let row of list.rows) {
    
    if (row.textContent.indexOf(searchTerm) != -1) {
      
      addRowNewTable(row);

    }

  }

  printNewTable();

} else if (searchTerm.length === 1) { //if search term consist only of one letter, convert it to "index search" i.e "a" -> "#a"
  
  const searchIndex = searchTerm.toUpperCase();

  if (searchIndex.match(/[A-Z]{1}/)) {//input validation to ensure correct url
  
    document.location.replace(document.location.origin+document.location.pathname+"#"+searchIndex);

  }

}