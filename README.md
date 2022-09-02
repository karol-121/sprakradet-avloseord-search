
# ![logo](src/icons/icon-48.png) Språkrådet avløseord - search

Browser extension that implements search functionality for [språkrådets replacement word list](https://www.sprakradet.no/sprakhjelp/Skriverad/Avloeysarord/). Extension adds search input together with search query ("www.example.com/q=%seachterm%") to the main site. Search results are presented by filtering the orginal table so it only contain results.

## preview

Search form where user can enter search term:

![screenshot-search-form](assets/screenshot-search-form.png)

Peformed search, results are shown as filtered table:

![screenshot-search](assets/screenshot-search.png)

Situation with no search results:

![screenshot-no-results](assets/screenshot-no-results.png)

## Todo
- Currently there is a problem where id attribute links (".../#id") will not lead to given element while search is peformed. This is due to filtered table where search results are shown. 



