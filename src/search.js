//main logic

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const searchTerm = params.get("q");

if (searchTerm) {

  const searchTermUnified = unifyStringInput(searchTerm);

  //if search searchTermUnified consist only of one letter, convert it to "index search" i.e "a" -> "#a"
  if (searchTermUnified.length === 1 && RegEx.index.test(searchTermUnified)) {

      //redirect to page where list index is set from search form
      document.location.replace(document.location.origin+document.location.pathname+"#"+searchTermUnified);

  } 

  if (searchTermUnified.length > 1) { 

    DOM_references.searchInput.value = searchTerm.trim(); //put searched term into the search input
    DOM_references.wordListIndex.remove(); //remove index link while searching as it won't work due to the filtered table

    //loop through all words in list 
    for (let row of DOM_references.wordList.rows) {

      //unify text from each row to ensure proper comparsion
      const rowTextUnified = unifyStringInput(row.textContent); 
    
      //check if current row contains searching searchTermUnified and it is not index row
      if (rowTextUnified.indexOf(searchTermUnified) != -1 && rowTextUnified.indexOf("TIL TOPPEN") === -1) {

        addRowNewTable(row);

      }

    }

    //after checking all rows for match, print filtered table
    printNewTable();

  }

}


