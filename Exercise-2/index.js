const fs = require("fs").promises;

async function getSum() {
  let data = await fs.readFile("./main.json", "utf-8");
  data = JSON.parse(data);

  let sum = 0;

  for (let user of data) {
    sum += user.salary;
  }

  await fs.writeFile("./sum.txt", String(sum));
}

getSum();