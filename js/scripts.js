
// 1 = JavaScript
// 2 = Python
// 3 = c#
// 4 = Swift  (iOS)
// 5 = Java (Android)
// 6 = HTML5 (Web Design - how things look)
// 7 = 1. JavaScript  2. HTML5  [UX: How to interact with things]
// 8 = Java + C# + Swift
// 9 = C++
//--------------OS ---------------------------
// Windows = C#

// Mac os x = C++ || swift || C || Objective-C

// linux = C/C++  || Java || Python
//-------------Mobile OS---------------------------------
// iOS = Swift
// Android = Java
//-------------why learn---------------------------------
// Build something fun = Java + C# + Swift
//start-up = JavaScript
//something fun = HTML 5
//another skill = HTML 5
//-------------type of developer---------------------------------
// Game = C#
// Web = . HTML52. JavaScript
// Mobile = Swift || Java || C#
// Desktop = Java
// Data Scientist = Python
//-------------find most interesting---------------------------------
//UX/UI = 1. JavaScript  2. HTML5
//how things work = java
//-------------type of companies--------------------------------
// small business = PHP
// startup = JavaScript
// Enterprise = Java
require.config({
  paths: {
    mathjs: 'js/',
  }
});
$(document).ready(function()
{    $("#results").click(function mode(arr) {

      return arr.sort((a,b) =>
            arr.filter(v => v===a).length
          - arr.filter(v => v===b).length
      ).pop();
  });

  math.mode(['pear', 'apple', 'orange', 'apple']); // apple

});
