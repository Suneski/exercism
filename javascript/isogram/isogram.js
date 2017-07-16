var Isogram = function(text) {
  this.text = text.toLowerCase().replace(/-/g, '').replace(/\s/g, '');
};

Isogram.prototype.isIsogram = function() {
  return !/(.).*\1/.test(this.text);
};

module.exports = Isogram;
