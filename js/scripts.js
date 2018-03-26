
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

$(function() {
  $("button#getStarted").click(function() {
    $(".panel-body#operatingSystem").slideDown();
    $("button#getStarted").fadeOut();
    $("button#nextPhoneOS").fadeIn();
    $(".panel-body#operatingSystem, input").click(function(){
      var operatingSystem = $('label input[name=optradio]:checked', '#operatingSystem').val();
      $("span#sOperatingSys").html(operatingSystem);
      $("button#nextPhoneOS").click(function(){
        $(".panel-body#operatingSystem").fadeOut();
        $("button#nextPhoneOS").fadeOut();
        $(".panel-body#phoneOS").fadeIn();
        $("button#nextWhyCode").fadeIn();
        $(".panel-body#phoneOS, input").click(function(){
          var phoneOS = $('input[name=optradio]:checked', '#phoneOS').val();
          $("span#sPhoneOS").html(phoneOS);
          $("button#nextWhyCode").click(function() {
            $(".panel-body#phoneOS").fadeOut();
            $("button#nextWhyCode").fadeOut();
            $(".panel-body#whyCode").fadeIn();
            $("button#nextDeveloperType").fadeIn();
            $(".panel-body#whyCode, input").click(function(){
              var whyCode = $('input[name=optradio]:checked', '#whyCode').val();
              $("span#sWhyCode").html(whyCode);
              $("button#nextDeveloperType").click(function(){
                $(".panel-body#whyCode").fadeOut();
                $("button#nextDeveloperType").fadeOut();
                $("button#nextMoreInteresting").fadeIn();
                $(".panel-body#moreInteresting").fadeIn();
                $(".panel-body#moreInteresting, .input").click(function(){
                  var moreInteresting = $('input[name=optradio]:checked', '#moreInteresting').val();
                  $("span#sDeveloperType").html(moreInteresting);
                  $("button#nextMoreInteresting").click(function(){
                    $(".panel-body#moreInteresting").fadeOut();
                    $("button#nextMoreInteresting").fadeOut();
                    $(".panel-body#whatCompany").fadeIn();
                    $(".panel-body#whatCompany, .input").click(function(){
                      var whatCompany = $('input[name=optradio]:checked', '#whatCompany').val()
                      $("span#smoreInteresting").html(whatCompany)
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
        });
      });
    });
  });
});
