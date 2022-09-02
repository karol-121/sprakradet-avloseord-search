//script that creates new filtered table

const wordListNew = document.createElement("tbody");

//create "no result message" to print when nothing is found
const noResultsMessage = document.createElement("p");
  noResultsMessage.innerText = "Ingen resultater funnet!";
  

//add selected rows to new table
function addRowNewTable(row) {

  wordListNew.append(row);

}


//function thtat swaps new table with the old one
function printNewTable() {

  //transfer header from old to new table
  wordListNew.prepend(DOM_references.wordListHeader);

  //replace orginal table with the newly created one
  DOM_references.table.replaceChild(wordListNew, DOM_references.wordList);

  //print message if nothing has been found/ table is empty
  if(wordListNew.children.length < 2) {
    
    DOM_references.table.parentNode.append(noResultsMessage);
    
  }

}