function name(){
player1name=localStorage.getItem("player1");
player2name=localStorage.getItem("player2");

player1score=0;
player2score=0;

document.getElementById("player1name").innerHTML=player1name;
document.getElementById("player2name").innerHTML=player2name;

document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;

document.getElementById("question").innerHTML="Question turn -  "+player1name;
document.getElementById("answer").innerHTML="Answer turn -  "+player2name;
}
 function send(){
     num1=document.getElementById("word").value;
     num2=document.getElementById("word1").value;
     actualanswer=parseInt(num1)*parseInt(num2);
     console.log(actualanswer);
     quenum="<h4>"+num1+"X"+num2+"</h4>";
     input="<br><input id='checkbox' type'text'>";
     checkbtn="<br><br><button class='btn-success' type='submit' onclick=check()>Check</button>";
     row=quenum+input+checkbtn;
     document.getElementById("output").innerHTML=row;
     document.getElementById("word").innerHTML="";
     document.getElementById("word1").innerHTML="";
    
 }

 var answerturn="player2";
var questionturn="player1";

function check(){
getWord=document.getElementById("checkbox").value;
answerWord=getWord.toLowerCase();
console.log("answer word = "+answerWord);
console.log(word);
if(answerWord == actualanswer){
    if(answerturn == "player1"){
        player1score=player1score+1;
        document.getElementById("player1score").innerHTML=player1score;
    }
    else{
        player2score=player2score+1;
        document.getElementById("player2score").innerHTML=player2score;
    }
}
if (answerturn == "player1"){
    answerturn="player2";
    document.getElementById("answer").innerHTML="Answer turn -"+ player2name;
}
else{
answerturn="player1";
document.getElementById("answer").innerHTML="Answer turn -"+ player1name;
}

if (questionturn == "player1"){
    questionturn="player2";
    document.getElementById("question").innerHTML="Question turn -"+ player2name;
}
else{
questionturn="player1";
document.getElementById("question").innerHTML="Question turn -"+ player1name;
}
document.getElementById("output").innerHTML="";
}