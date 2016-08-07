import $ from "jquery"

export function queryGHJobs (query) {
   var term = query.replace(/\s/, "+"); // replace any white space characters with a "+"
   var url = "https://api.usa.gov/jobs/search.json?size=100query="+term;
   // fetch all jobs matching the passed in search as JSON
   return $.getJSON(url).then(function(response) {
     return response
   });
 }
