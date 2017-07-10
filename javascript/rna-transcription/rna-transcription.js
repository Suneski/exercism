class DnaTranscriber{
  conductor(){}

  toRna(dna){

    var output = "";

    for (var i = 0; i < dna.length; i++) {
      var char = dna[i];

      if (char === 'G'){
        output += 'C';
      }
      else if (char === 'C'){
        output += 'G';
      }
      else if (char === 'T') {
        output += 'A';
      }
      else if (char === 'A'){
        output += 'U';
      }
      else {
        throw new Error('Invalid input');
      }
    }

    return output;

  }
}

module.exports = DnaTranscriber;
