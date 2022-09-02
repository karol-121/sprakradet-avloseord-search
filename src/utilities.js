const DOM_references = {
	bodyDiv: document.getElementsByClassName('body')[0],
	wordListIndex: document.getElementsByClassName('body')[0].children[1],
	table: document.querySelector('table'),
	wordList: document.querySelector('tbody'),
	wordListHeader: document.querySelector('tbody').children[0],
	searchInput: null //search input does not exist at the time this object is created, it is defined later
}


const RegEx = {
	index: /[A-Z]{1}/
}

//function that unifyies any string in order to make comparsion easier
function unifyStringInput(string) {

  string = string.trim(); //remove any possible whitespace
  string = string.toUpperCase(); //to upper case
  return string;

}