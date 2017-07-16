// Calculate the moment when someone has lived for 10^9 seconds.
//
// A gigasecond is 10^9 (1,000,000,000) seconds.

var Gigasecond = function (time) {
   this.time = time;
}

// 1000000000000 = (1e12)

Gigasecond.prototype.date = function () {
  let gsTime = this.time.getTime() + (1e12);
  let newTime = new Date();
  newTime.setTime(gsTime);
  return newTime;
};

module.exports = Gigasecond;
