function changeThemeDay() {
  document.getElementById("calc-container").className = "calc-container-day";
  var dayButton = document.getElementById("day-theme-button");
  var nightButton = document.getElementById("night-theme-button");
  dayButton.style.color = "black";
  nightButton.style.color = "grey";
  dayButton.style.background = "#F9F9F9";
  nightButton.style.background = "#F9F9F9";
  document.getElementById("keypad-container").className = "keypad-container-day";
  document.getElementById("keypad-table").className = "keypad-table-day";
  document.getElementById("result").className = "result-day";
  document.getElementById("operand1").className = "operand1-day";
  document.getElementById("operand2").className = "operand2-day";
  var tds = document.getElementsByClassName("tds");
  var td = document.getElementsByTagName("td");
  for(var i=0;i<tds.length;i++){
      tds[i].style.color = "black";
  }
  for(var i=0;i<td.length;i++){
    td[i].style.border = "8px solid #F9F9F9";
    td[i].style.background = "white";
  }
}

function changeThemeNight() {
  document.getElementById("calc-container").className = "calc-container-night";
  var dayButton = document.getElementById("day-theme-button");
  var nightButton = document.getElementById("night-theme-button");
  dayButton.style.color = "grey";
  nightButton.style.color = "white";
  dayButton.style.background = "#292e36";
  nightButton.style.background = "#292e36";
  document.getElementById("keypad-container").className = "keypad-container-night";
  document.getElementById("keypad-table").className = "keypad-table-night";
  document.getElementById("result").className = "result-night";
  document.getElementById("operand1").className = "operand1-night";
  document.getElementById("operand2").className = "operand2-night";
  var tds = document.getElementsByClassName("tds");
  var td = document.getElementsByTagName("td");
  for(var i=0;i<tds.length;i++){
      tds[i].style.color = "white";
  }
  for(var i=0;i<td.length;i++){
    td[i].style.border = "8px solid #292e36";
    td[i].style.background = "#21252c";
  }
}
var operand1 = "";
var operand2 = "";
var operator = "";
var string ="";
function num(value){
    if(!operand1 && !operand2 && !operator){
        document.getElementById("result").innerHTML = "";
        document.getElementById("operand1").innerHTML="";
        document.getElementById("operand2").innerHTML="";
        document.getElementById("operator").innerHTML="";
    }
    
    console.log(value);
    console.log(typeof(value));
    if(string.includes(".") && value == "."){
        return
    }
    string += value;
    if(operand1 == ""){
        document.getElementById("operand1").innerHTML=string;
    }else{
        document.getElementById("operand2").innerHTML=string;
    }
    
}

function operation(op){
    document.getElementById("result").innerHTML = "";
    if(string != ""){
    if(operator == ""){
       operator = op;
       operand1 = string;
    }else if(operator == op){
        return
    }else{
        operator = op;
    }
    string = ""
    document.getElementById("operator").innerHTML=operator;
}
}

function calculate(){
    operand2 = string;
    let in1 = parseFloat(operand1);
    let in2 = parseFloat(operand2);
    let result;
    console.log(in1,in2,operator);
    switch(operator){
        case '+':result = in1+in2;break;
        case '-':result = in1-in2;break
        case 'x':result = in1*in2;break
        case '/':result = in1/in2;break
        case '%':result = in1/in2*100;break;
    }
    console.log(result);
    document.getElementById("result").innerHTML = result.toString();
    operand1 = operand2 = string = operator =  "";
}

function clearAll(){
    operand1 = operand2 = operator = string =  "";
    console.log("Inside clear");
    document.getElementById("operand1").innerHTML = "";
    document.getElementById("operand2").innerHTML = "";
    document.getElementById("operator").innerHTML = "";
}

function reset(){
    clearAll();
    document.getElementById("result").innerHTML = "";
     
}
