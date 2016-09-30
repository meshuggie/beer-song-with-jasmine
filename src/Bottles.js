/*jshint esversion: 6 */
class Bottles {
  verse(n){
    var verse = '';
    if (n > 2) {
      verse = n + ' bottles of beer on the wall, ' + n + ' bottles of beer.\n' +
        'Take one down and pass it around, ' + (n - 1) +' bottles of beer on the wall.\n';
    } else if (n == 2) {
      verse = n + ' bottles of beer on the wall, ' + n + ' bottles of beer.\n' +
        'Take one down and pass it around, ' + (n - 1) +' bottle of beer on the wall.\n';
    } else if (n == 1) {
      verse = n + ' bottle of beer on the wall, ' + n + ' bottle of beer.\n' +
        'Take it down and pass it around, no more bottles of beer on the wall.\n';
    } else {
      n = 99;
      verse = 'No more bottles of beer on the wall, no more bottles of beer.\n' +
        'Go to the store and buy some more, ' + n + ' bottles of beer on the wall.\n';
    }
    return verse;
  }

  verses(a, b) {
    return this.lyrics(a, b);
  }

  lyrics(a = 99, b = 0) {
    var verse = '';
    for (var i = a; i >= b; i--) {
      verse = verse + this.verse(i);
      verse += (i !== b) ? '\n' : '';
    }
    return verse;
  }
}
