const http = require("http");
const fs = require("fs").promises;
const url = require("url");

const data = require("./data/data.json");
const port = 3131;

const server = http.createServer(async (req, res) => {
  if (req.url === "/favicon.ico ") return;

  const myUrl = new URL(req.url, `http://${req.headers.host}/`);
  const pathname = myUrl.pathname;
  const id = myUrl.searchParams.get("id");

  //Routes
  //Main page
  if (req.url === "/") {
    let html = await fs.readFile("./views/bicycles.html", "utf-8");
    const eachBicycle = await fs.readFile(
      "./views/partials/bicycle.html",
      "utf-8",
    );

    let allTheBicycle = "";
    for (let i = 0; i <= 5; i++) {
      allTheBicycle += replaceTemplate(eachBicycle, data[i]);
    }

    html = html.replace(/<%ALLTHEBICYCLE%>/g, allTheBicycle);

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  }

  //Single page
  else if (pathname === "/bicycle" && id >= 0 && id <= 5) {
    let html = await fs.readFile("./views/single.html", "utf-8");
    const bicycles = data.find((bicycle) => bicycle.id === id);

    html = replaceTemplate(html, bicycles);

    let price = bicycles.originalPrice;
    if (bicycles.hasDiscount) {
      price = (price * (100 - bicycles.discount)) / 100;
    }

    html = html.replace(/<%PRICE%>/g, price);

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  }


  //css loader
  else if (/\.(css)$/i.test(req.url)) {
    const css = await fs.readFile("./public/css/index.css");
    res.writeHead(200, { "Content-Type": "text/css" });
    res.end(css);
  }

  //images loader
  else if (/\.(png)$/i.test(req.url)) {
    const images = await fs.readFile(`./public/images${req.url}`);
    res.writeHead(200, { "Content-Type": "image/png" });
    res.end(images);
  }

  //svg loader
  else if (/\.(svg)$/i.test(req.url)) {
    const svg = await fs.readFile(`./public/images/icons.svg`);
    res.writeHead(200, { "Content-Type": "image/svg+xml" });
    res.end(svg);
  }

  //not found page
  else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("page not found");
  }
});

server.listen(port);

function replaceTemplate(html, bicycle) {
  html = html.replace(/<%IMAGE%>/g, bicycle.image);
  html = html.replace(/<%NAME%>/g, bicycle.name);
  html = html.replace(/<%ID%>/g, bicycle.id);

  let price = bicycle.originalPrice;
  if (bicycle.hasDiscount) {
    price = (price * (100 - bicycle.discount)) / 100;
  }

  html = html.replace(/<%PRICE%>/g, price);
  html = html.replace(/<%CURRENT_PRICE%>/g, price);

  if (bicycle.hasDiscount) {
    html = html.replace(/<%OLD_PRICE%>/g, bicycle.originalPrice);
  } else {
    html = html.replace(/<%OLD_PRICE%>/g, "");
  }

  if (bicycle.hasDiscount) {
    html = html.replace(
      /<%DISCOUNT_PARCENT%>/g,
      `<div class="discount__rate">
    <p>${bicycle.discount}% off</p>
     </div>`,
    );
  } else {
    html = html.replace(/<%DISCOUNT_PARCENT%>/g, "");
  }

  for (let i = 0; i < bicycle.star; i++) {
    html = html.replace(/<%START%>/, " checked");
  }

  html = html.replace(/<%START%>/g, "");

  return html;
}
