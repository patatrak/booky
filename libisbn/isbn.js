
var debug = require('debug')('booky:isbn');

var A = "the letter A";
var B = "la  réponse D";

exports.isbn = function () {
    debug("I am in ze isbn lib");
    return { A: A, B: B};
}
