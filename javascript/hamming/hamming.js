var Hamming = function() {};

Hamming.prototype.compute = function( x, y ) {
  var sum = 0;

  if (x.length !== y.length) {
    throw new Error('DNA strands must be of equal length.');
  }

  for (var i = 0; i <= x.length; i++) {
    if (x.charAt(i) !== y.charAt(i)) {
      sum++
    }
  }

  return sum;
}

module.exports = Hamming;
