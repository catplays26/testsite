var url = 'https://raw.githubusercontent.com/catplays26/testsite/master/danger.txt';
var storedText;

fetch(url)
  .then(function(response) {
    response.text().then(function(text) {
      storedText = text;
      done();
    });
  });

function done() {
  while (true) {

console.log(storedText)

}
}