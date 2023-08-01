const http = require("http");

http.createServer((request, response) => {
  const url = request.url;
  console.log("url is:", url);

  if (url === '/') {
    response.statusCode = 200;
    response.write("<h1>home</h1>");
  } else if (url === "/books") {
    response.statusCode = 200;
    response.write("<h1>books</h1><p>which book are you interested in?</p>");
  } else {
    response.statusCode = 404;
    response.write("<h1>404 Not Found</h1>");
  }

  response.end();
}).listen(5500, () => {
  console.log("Server listening at http://localhost:5500...");
});
