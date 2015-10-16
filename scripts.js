$(document).ready(function() {

var HR = $(".user-full-name").text("Vera Swlovworld");

var userpix = $(".left-column-block");
userpix.hide().show(4000);

var footer = $(".footer");
footer.hide().show(4000);

var tabsContents = $(".site-right-area");
tabsContents.hide().show(4000);

});


function SymbolsCount () {
                        var words, UserAnswer;
                        UserAnswer = prompt("Enter words and numbers");
                        words = UserAnswer.split(' '); 
                        var wordsArr = new Array();
                        var numbersArr = new Array();

                    if(!UserAnswer){
                     alert("You forgot to enter words!");   
                    }
                    else {
                        for (var i = 0; i <words.length;  i++){
                            if (isNaN(words[i])){
                                var test = " (" + words[i].length + ") ";
                                wordsArr.push(words[i].toUpperCase().concat(test));
                            } 
                            else {
                                numbersArr.push(words[i].toUpperCase());
                            }
                        }
                              var newWin = window.open("", "MsgWindow", "width=600, height=300, top=350, left=500");
                                newWin.document.write("We counted the number of symbols for your words: " + wordsArr.join(", ")  +"<br />" );
                              if(numbersArr.length > 0 && numbersArr[0] !== null){

                              newWin.document.write("These were your numbers: "+numbersArr.join(", ") + "<br />");  
                              }
                              else{
                              newWin.document.write(" ");
                               }
                    }  
};

function MercuryQuizz(){

  var answer = "mercury";
                            var UserAnswer = prompt("What is the first planet from the sun?");
                            if (!UserAnswer){
                                alert("You forgot to enter your answer. Try again!" )
                            }
                            else if (isNaN(UserAnswer)) {
                            var result = UserAnswer.toLowerCase();
                            var resultOut = result.toUpperCase();
                            if (result == "mercury") {
                                var newWin = window.open("", "MsgWindow", "width=400, height=300, top=350, left=500");
                                newWin.document.write("Your answer " + resultOut + " for this question is right!");
                            }
                            else {
                                var newWin2 = window.open("", "MsgWindow", "width=400, height=300, top=350, left=500");
                                newWin2.document.write("Your answer " + resultOut + "  for this question is wrong. Try again!");
                            }
                        }else {
                            alert("Please, enter the word, not a number!")
                        }
};


function FavWebsite(){

                    var Myurl = prompt("Before you go share your favourite website!");

                    function CheckIt(wordToCheck) {
                        if (!wordToCheck){
                            alert("You forgot to enter your favourite website!");
                        } 
                        else if (wordToCheck.indexOf("http://") === -1) {
                            alert("Oops, there is no HTTP://  in your URL. Please, try again!");
                        } 
                        else {
                            var wordIndex = wordToCheck.indexOf("/");
                            var wordIndex2 = wordToCheck.lastIndexOf(".");
                            var mine = wordToCheck.slice(wordIndex, wordIndex2);
                            mine2 = mine.slice(2);

                            var newWin2 = window.open("", "MsgWindow", "width=400, height=300, top=350, left=500");
                            newWin2.document.write("We've never heard of " + mine2.toUpperCase() + "! Thanks for recommendation!");
                        }
                    }
                    var result = CheckIt(Myurl);
};

function CalculateBirthYear(){

                            var age = prompt("What is your age?");

                           //var regV = /125-999999999999999/;
                           var regV = /^\d\d\d$/;
                           var resultAge = age.search(regV);
                           
                           if (!age){
                             alert("You forgot to enter your age. Try again!");
                           }
                          else if (resultAge == -1) {

                            for (var i = 0; i < age.length; age++) {

                                if (age.charCodeAt(i) < 48 || age.charCodeAt(i) > 57) {
                                    alert("Please, enter the numbers to continue!");
                                }
                                else {
                                    var year = prompt("Enter the current year");
                                }
                                for (var i = 0; i < year.length; year++) {
                                    if (year.charCodeAt(i) < 48 || year.charCodeAt(i) > 57) {
                                        alert("Please, enter the numbers to continue!");
                                        var year =prompt("Enter the current year");
                                      while (age >= 0){
                           if (age ==0){
                                alert("You were born in " + year +"!");
                            }
                            else{
                            var newWin = window.open("", "MsgWindow", "width=400, height=300, top=230, left=970, scrollbars =1");
                                                newWin.document.write("In year " + year + " you were " + age + "<br />"); 
                           }
                              age--;
                              year--;
                           }
                            }
                                    else {
                                        while (age >= 0) {
                                            if (age == 0) {
                                                alert("You were born in " + year + "!");
                                            }
                                            else {
                                                var newWin = window.open("", "MsgWindow", "width=400, height=300, top=230, left=970, scrollbars =1");
                                                newWin.document.write("In year " + year + " you were " + age + "<br />");
                                            }
                                            age--;
                                            year--;
                                        }
                                    }
                                }
                            }
                        }
                        else{
                            alert("You might be a wizard if you can live so long or you just kidding?" );
                        }
};

function VerifyAgeNumber(){

                           var age = prompt("Before you join us, enter you age!");
                           var regV = /\d{3}/;
                           var resultAge = age.search(regV); 

                        if (!age){
                             alert("You forgot to enter your age. Try again!");
                           }
                        
                        else if (resultAge == -1){

                        for (var i = 0; i < age.length; age++) {

                                if (age.charCodeAt(i) < 48 || age.charCodeAt(i) > 57) {
                                    alert("Oh, we need numbers to continue. Try again!");
                            }
                            else if(age <18){
                             alert("You are so young! Ask your parents for permission and come back soon!");
                           }
                           else if (age > 18 && age <124){
                        
                        alert("Okay, you are of enough age! Press to continue!");

                         var phone =  prompt("Enter your phone number"); 
                      
                          var regV = /^\d{11}$/;
                          var resultAge = phone.search(regV);
                          if (resultAge == -1){
                          alert("Oops, not that! Please enter 11 numbers for your phone number!");
                          var phone =  prompt("Enter your phone number"); 
                          var newWin = window.open("", "MsgWindow", "width=400, height=300, top=230, left=970, scrollbars =1");
                                                newWin.document.write("Well done! This is your phone number: " + phone + "<br />");
                          }
                          else {
                          var newWin = window.open("", "MsgWindow", "width=400, height=300, top=230, left=970, scrollbars =1");
                                                newWin.document.write("Well done! Welcome to the class!" + "<br />");
                          }
                        }
                       }
                        }
                        else {
                            alert("Wow! You might be a wizard if you can live so long or you just kidding? Try again!");
                        }
};

  function RandomInRange (){
      
      var From = parseInt(prompt("Enter from which number you want to generate"));
       var To = parseInt(prompt("Enter till which number you want to generate"));
       var ran =Math.floor((Math.random()*(To-From+1))+From);
        
        alert(ran);
    }

function RandomInNumber(){
  
    var choose = parseInt(prompt("Please enter how many numbers you want to generate"));

        var randomArray = new Array(choose);
        
        for (var i = 0; i < randomArray.length; i++) {
        randomArray[i] = Math.round(Math.random()*10);
         var newWin = window.open("", "MsgWindow", "width=400, height=300, top=230, left=970, scrollbars =1");
                                                newWin.document.write(randomArray[i]);
         }
};

function CountDaysNYear(){
var forTime = new Date();
var from1970 = (forTime.getTime() / (1000*60*60*24));
var ny = new Date(2016, 0, 1, 0, 0, 0);
var from1970ToNy = (ny.getTime()/ (1000*60*60*24));
var myDays = ["Sunday",　"Monday", "Tuesday", "Wendsday", "Thursday", "Friday", "Saturday"];

 alert("How may days until the New Year?  "+ (Math.round(from1970ToNy) -Math.round(from1970)) + ". It will be "+myDays[ny.getDay()] + "!");
}

function CountDateInDays () {

var now = new Date();
var nowMilli = now.getTime();
var UserCount = prompt("Enter here the number of days from now. We will show you the date!");

if(UserCount<1 || isNaN(UserCount)){
    alert("Please enter a correct number!")
}
else
{
var nowPlus = new Date(1000*60*60*24*UserCount);
var Milli79 = nowPlus.getTime();

var sumMilli = nowMilli+Milli79;
var result = new Date(sumMilli);
var myDays = ["Sunday",　"Monday", "Tuesday", "Wendsday", "Thursday", "Friday", "Saturday"];
var monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",]

var DateWin = window.open("", "MsgWindow", "width=400, height=300, top=230, left=970, scrollbars =1");
                                                DateWin.document.write("This is the date in " + UserCount+ " days: "+ myDays[result.getDay()]+ ", Day "+ result.getDate() + ", Month " + monthArr[result.getMonth()] + ", Year "+ result.getFullYear());
}
};

function GetProperty() {
      
      navigator.show = function (prop) {
            navigator[prop] = prop;            
            alert(navigator[prop]);
      };
      
      navigator.show(prompt("Enter..."));
};

function GetBrowserName() {

    var browser = navigator.userAgent;
    var regV = /firefox/i;
    var regV2 = /chrome/i;
    var regV3 = /opera/i;

    if (browser.search(regV) != -1){
        alert("You use Firefox, right?");
    }
    else if (browser.search(regV2) != -1){
        document.write("You use Firefox, right?");
    }
    else if (browser.search(regV3) != -1){
        document.write("You use Firefox, right?");
    }
    else {
        document.write("We don't know what browser you use");
    }

};


