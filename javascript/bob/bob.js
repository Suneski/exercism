var Bob = function() {};

Bob.prototype.hey = function(input) {
  var response = "Whatever.";    // default response
  var removeWhiteSpace = input.trim();
  var lastChar = input.charAt(input.length - 1);
  var silent = input.trim() === '';
  var shouting = input.toUpperCase() === input && !silent;
  var allNumbers = input.search(/(\d+,?\s?)+[\.!\?]*/) != -1;
  var question = lastChar === '?';
  var exclamation = lastChar === '!';
  var lastCharBlank = lastChar === " ";

  if (shouting && !allNumbers) {
    response = 'Whoa, chill out!';
  }
  else if (question) {
    response = 'Sure.';
  }
  else if (allNumbers) {
    if (exclamation) {
      response = 'Whoa, chill out!';
    }
    else {
      response = "Whatever.";
    }
  }
  else if (silent) {
    response = "Fine. Be that way!";
  }
  else if (lastCharBlank) {
    if (removeWhiteSpace[removeWhiteSpace.length - 1] === "?") {
      response = "Sure.";
    }
    else {
      response = "Whatever.";
    }
  }

  return response;
};

module.exports = Bob;
