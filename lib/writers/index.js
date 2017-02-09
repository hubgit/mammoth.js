var htmlWriter = require("./html-writer");

exports.writer = writer;


function writer(options) {
    options = options || {};
    return htmlWriter.writer(options);
}
