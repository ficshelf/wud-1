const yahoo = "http://query.yahooapis.com/v1/public/yql/";
const yql_query = 'select * from rss where url="http://rss.news.yahoo.com/rss/';


// Meteor.methods are executed on the server and accessed by the client by calling Meteor.call() asynchronously
Meteor.methods({
  'getYahooNews': function (category="topstories") {
    // avoid blocking other method calls from the same client
    this.unblock();
    const apiUri = yahoo+'?q='+encodeURIComponent(yql_query+category+'"')+"&format=json";
    console.log(apiUri);
    // asynchronous call to the dedicated API calling function
          let errorCode, errorMessage;
	  try {
	    let response = HTTP.get(apiUri).data;
	    // A successful API call returns no error 
	    // but the contents from the JSON response
	    return response;
	  } catch (error) {
	    // If the API responded with an error message and a payload 
	    if (error.response) {
	      errorCode = error.response.data.code;
	      errorMessage = error.response.data.message;
	    // Otherwise use a generic error message
	    } else {
	      errorCode = 500;
	      errorMessage = 'Cannot access the API';
	    }
	    // Create an Error object and return it via callback
	    let myError = new Meteor.Error(errorCode, errorMessage);
	  }
  }
});

