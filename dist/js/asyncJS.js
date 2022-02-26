// HTTP Requests: A request we make to another database to get back some data.
// API Endpoint: An address or url located at the requested database. URL a particular server exposes to us so we can get data from them.

const request = new XMLHttpRequest();

//Create the arrow function getTodos() to neaten up the code.  evertime we have a success response of fail response we can just call the callback.
const getTodos = (callback) => {
  request.addEventListener("readystatechange", () => {
    // If the readystatechange is 4. Can find more about it on MDN. Request status code is 200, which means fetching data was a success, to learn more see MDN docs.
    if (request.readyState === 4 && request.status === 200) {
      // Because all data transfer b/w databases is done STRING format. STRING is the default data format for all database data transfered. We have to convert the STRING text to a JSON object using JSON.parse method. This should give us an array with loads of different objects with JSON data.

      const recievedData = JSON.parse(request.responseText);

      // first parameter in the callback is err parameter set below. second parameter is the success data.
      callback(undefined, recievedData);
    }
    // If the ready state is 4 but the we were unable to fetch data error code anything besides 200
    else if (request.readyState === 4) {
      // first parameter in the callback is err parameter set below. second parameter is the failed data which is undefined.
      callback("could not fetch data", undefined);
    }
  });

  //request the url using method named open(), we still can't do anything with it because we have to send that reqest.
  request.open("GET", "https://jsonplaceholder.typicode.com/todos");

  // we send the url request using send() method.
  request.send();
};

// we set two parameters for the callback function. err and data. err typically goes first because it is the convention. data goes second. We did this to get data in the getTodos() function.
getTodos((err, data) => {
  console.log("Callback fired.");
  console.log(err, data);
  // we could check to see if there is an error to do one thing and if there is't an error to do another...

  // if there is an error we get an error message
  if (err) {
    console.log(err);
  }
  // if there is not an error we get the API data back.
  else {
    console.log(data);
  }
});
