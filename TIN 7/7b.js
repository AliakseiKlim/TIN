var fs = require("fs");

function watch(directory) {
  var readingScan = fs.readdirSync(directory);
  fs.watch(directory, "utf8"); {
    file = fs.readdirSync(directory);
    console.log("Content in given directory : " + readingScan);
  };
}

watch("./directoryContent");
