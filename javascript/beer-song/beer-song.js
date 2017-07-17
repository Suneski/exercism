class BeerSong {
  verse (bottles) {
    if (bottles === 2) {
      return '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n'
    }
    else if (bottles === 1) {
      return '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n'
    }
    else if (bottles === 0) {
      return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n'
    }
    else {
      return `${bottles} bottles of beer on the wall, ${bottles} bottles of beer.\nTake one down and pass it around, ${bottles - 1} bottles of beer on the wall.\n`
    }
  }

  sing(start, end) {
    var end = end || 0;
    var result = '';
    for (var i = start; i >= end; i--) {
      result = result.concat(this.verse(i));
      if (i > end) result = result.concat('\n');
    }
    return result;
  }
}

module.exports = BeerSong
