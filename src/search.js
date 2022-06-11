console.log("extension loaded :)");

const querystring = document.location.search;
const params = new URLSearchParams(querystring);
const searchTerm = String (params.get("q")); //ensures that searchTerm is always a string, allows to use .length in if statement

const searchLocation = document.getElementsByTagName('tbody')[0];
const searchInput = document.getElementById('searchInput');




if (searchTerm != "null" && searchTerm.length > 0) { //do search if string exist and is not empty

  searchInput.value = searchTerm;

  for (const row of searchLocation.children) { //go through all rows in list

    if (row.children[0].innerText.indexOf(searchTerm) != -1) { //if search term exist in given row and collumn
      
      const mark = document.createElement('mark'); //create mark object, allows to mark found word/text
        mark.innerHTML = row.children[0].innerHTML;

      row.children[0].replaceChild(mark, row.children[0].children[0]);
      
      row.scrollIntoView(); //scroll to found word/text

      break; //end after first match
      
    }

  }

}











