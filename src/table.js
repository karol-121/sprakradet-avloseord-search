//script that creates new filtered table

const table = document.querySelector('table');
const tbodyOld = document.querySelector('tbody');
const headerRow = tbodyOld.children[0];
const tbodyNew = document.createElement("tbody");

//create message object regardles status of the search
const searchStatusMessage = document.createElement("p");
  searchStatusMessage.innerText = "Ingen resultater funnet!";
  


//add selected rows to new table
function addRowNewTable(row) {

  tbodyNew.append(row);

}


//function thtat swaps new table with the old one
function printNewTable() {

  //transfer header from old to new table
  tbodyNew.prepend(headerRow);

  table.replaceChild(tbodyNew, tbodyOld);

  //print message if nothing has been found/ table is empty
  if(tbodyNew.children.length < 2) {
    
    table.parentNode.append(searchStatusMessage);
    
  }

}