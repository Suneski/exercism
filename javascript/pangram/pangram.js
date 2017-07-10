Pangram = function(str) {
    this.str = str
}

Pangram.prototype.isPangram = function() {
  var letters = this.str.toLowerCase();
  var alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
  return alphabet.every((char) => letters.includes(char));
}

module.exports = Pangram;
