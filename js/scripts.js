

//   alert("jQuery is working");
// })

$(function(){
$("button#getStarted").click(function() {
  $(".panel-body#operatingSystem").slideDown();
  $("button#getStarted").fadeOut();
  });
});

//next buttons will hide question, show next question, and show new next button for new question. repeats until no more questions.
$(function() {
  $(".panel-body#operatingSystem, .input").click(function(){
    $("button#nextPhoneOS").fadeIn();
    $("button#nextPhoneOS").click(function(){
      $(".panel-body#operatingSystem").fadeOut();
      $(".panel-body#phoneOS").fadeIn();
      $("button#nextPhoneOS").fadeOut();
      $("button#nextWhyCode").fadeIn();
      $("button#nextWhyCode").click(function() {
        $("button#nextWhyCode").fadeOut();
        $(".panel-body#phoneOS").fadeOut();
        $(".panel-body#whyCode").fadeIn();
        $("button#nextDeveloperType").fadeIn();
        $("button#nextDeveloperType").click(function(){
          $(".panel-body#whyCode").fadeOut();
          $("button#nextDeveloperType").fadeOut();
          $("button#nextMoreInteresting").fadeIn();
          $(".panel-body#moreInteresting").fadeIn();
          $("button#nextMoreInteresting").click(function(){
            $(".panel-body#moreInteresting").fadeOut();
            $("button#nextMoreInteresting").fadeOut();
            $(".panel-body#whatCompany").fadeIn();
            $("button#submit").fadeIn();
            $("button#submit").click(function(){
              $(".panel-body#whatCompany").fadeOut();
              $("button#submit").fadeOut();
            });
          });

        });
      });
    });
  });
});

// var osValue = $(function(){
//   $(input.value)
//
// };


//+ 1 = JavaScript
//+ 200 2 = Python
//+ 20 = c#
//+ 1000 4 = Swift  (iOS)
// 5 = Java (Android)
//20000 6 = HTML5 (Web Design - how things look)
// 7 = 1. JavaScript  2. HTML5  [UX: How to interact with things]
// 20000000 = Java + C# + Swift
//+ 1000000= C++
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
