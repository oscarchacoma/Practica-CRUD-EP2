const fs = require ('fs');
const path = require ('path');

module.exports = {
    writeJson : (json, array) => {
        fs.writeFileSync(path.join(__dirname,json),JSON.stringify(array,null,3), {encoding: "utf-8"})
    }
}