function findLongestWord(str) {
    var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
    return longestWord[0];
  }
  function Length(str) {
    var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
    return longestWord[0].length;
  }
  //example of use
  var str = "Which oneeeeeeeeeeeee is the longest?";
  console.log(findLongestWord(str) + " The length is - " + Length(str));