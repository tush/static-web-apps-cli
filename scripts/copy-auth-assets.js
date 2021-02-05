const path = require("path");
const fs = require("fs");
// main
(function () {
  // prettier-ignore
  const files = [
    path.join("src", "auth", "index.html"),
    path.join("src", "auth", "unauthorized.html"),
  ];

  files.forEach((file) => {
    let distFile = file.replace("src", "dist");

    if (!fs.existsSync(path.dirname(distFile))) {
      fs.mkdirSync(path.dirname(distFile), { recursive: true });
    }

    fs.copyFileSync(file, distFile);
  });
})();
