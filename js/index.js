//Beginning of jQuery ready Function
$(document).ready(function() {
 //Url to get a Random Wikipedia Article
 var randomUrl = "https://en.wikipedia.org/wiki/Special:Random";

 var autocomplete = document.getElementById("results");
 var search = document.getElementById("search");
 var input = " ";
 var wikiApi = " ";
 var wikiArticle = "";
 

 //Function to go Random Article
 //
 $("#Random").click(function() {
  //Opens the url in a new page
  window.open(randomUrl);
 });
 
 $("#search").on("change paste keyup", function() {
   openSearch(); 
});

 //Lookup for entries
function openSearch() {
 
 input = $("#search").val();
 wikiApi =
   "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
   input +
   "&format=json&origin=*";
  
 $.getJSON(wikiApi, function(data) {
  
  $('#results').empty();
  for(var i = 0; i < data[1].length; i++)
  { 
       
   
     var option = document.createElement('option');
        // Set the value using the item in the JSON array.
      option.value = data[1][i];
   //Set the Attribute URL to the option
   option.setAttribute('data-url',data[3][i]);
        // Add the <option> element to the <datalist>.
        autocomplete.append(option);
   
       
  }
    //End of getJSON
   });
 //end of search function
 }
 
 //EnterKey
 $('#search').bind("enterKey", function(e){
   
  var val = this.value;
    if($('#results option').filter(function(){
        return this.value === val;        
    }).length) {
        //Save the active val
     wikiArticle = $("option[value='"+val+"']").data('url')
        window.open(wikiArticle);
     
    }
});
 $('#search').keyup(function(e){
    if(e.keyCode == 13)
    {
        $(this).trigger("enterKey");
    }
});

  //Click Select
 $('#search').bind("input", function(e){
   
  var val = this.value;
    if($('#results option').filter(function(){
        return this.value === val;        
    }).length) {
        //Save the active val
     wikiArticle = $("option[value='"+val+"']").data('url')
        window.open(wikiArticle);
     
    }
});


 //End of jQuery Ready Function
});