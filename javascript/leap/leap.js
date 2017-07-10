//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function(input) {
//
// YOUR CODE GOES HERE
//
  this.value = input;
};

Year.prototype.isLeap = function() {
//
// YOUR CODE GOES HERE
//
 if (this.value % 4 === 0) {
   if (this.value % 100 === 0) {
     if (this.value % 400 === 0) {
       return true;
     }
     else {
       return false;
     }
   }
   else {
     return true;
   }
 }
 else {
   return false;
 }
};

module.exports = Year;
