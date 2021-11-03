
//var name = "Marcos Passos";
//var age = 35;
//var age2 = 10;
//var n1 = 5;
//var n2 = 3;
//var phrase = "Australia is the best country of the world";
//alert(name + " is " + age + " years old");
//alert(age + age2);
//console.log(name);
//console.log(age + age2);
//console.log(n1 * n2);
//console.log(phrase.replace("Australia", "Brazil"));
//console.log(phrase.toUpperCase());
//alert(phrase.replace("Australia", "Brazil"));

//var list = ["apple", "pear", "orange"];
//list.push("grape"); //adds an element
//list.pop(); //removes the last element
//console.log(list);
//console.log(list.length);
//console.log(list.reverse());
//console.log(list.toString());
//console.log(list[0]);
//console.log(list.toString()[0]);
//console.log(list.join(" | "));
//console.log(list[1]);
//alert(list[1]);

/*var fruit = {name:"apple", color:"red"} //dictionary
console.log(fruit);
console.log(fruit.name);
alert(fruit.color);*/

/*var fruits = [{name:"apple", color:"red"}, {name:"grape", color:"purple"}] //list of dictionaries
console.log(fruits);
alert(fruits[1].name);*/

//var age = 18;
/*var age = prompt("How old are you?");
if (age >= 18) {
    alert("adult");
}else {
    alert("minor");
}*/

/*var count = 0;
while (count < 5) {
    console.log(count);
    //alert(count);
    count = count + 1;
    //count++;
}*/

/*var count;
for(count=0; count <=5; count++){
    alert(count);
} */

/*var d = new Date();
alert(d.getMonth()+1);
alert(d.getDay());
alert(d.getMinutes());
alert(d.getUTCFullYear());*/

/*function sum(n1, n2) {
    return n1 + n2;
}
alert(sum(5, 10));*/

/*function setReplace(phrase, name, newName){
    return phrase.replace(name, newName);
}
alert(setReplace("Go Australia", "Australia", "Brazil"));*/

/*var age = prompt("How old are you?");
function validateAge(age){
    var validate;
    if(age >= 18){
        validate = true;
    }else {
        validate = false;
    }
    return validate;
}
console.log(validateAge(age));*/

/*var validate = 0;
function validateAge(age){
    if(age >= 18){
        validate = true;
    }else {
        validate = false;
    }
    return validate;
}
var age = prompt("How old are you?");
validateAge(age);
console.log(validate);*/

/*function clicked() {
    alert("Thanks for clicking");
}*/

function clicked(){
    document.getElementById("thanks").innerHTML = "<b>Thanks for clicking</b>";
    //console.log(document.getElementById("thanks"));
}

function redirect(){
    //window.open("https://globallab.org/en/#.YYI_BWBBxPY"); //new page
    window.location.href = "https://globallab.org/en/#.YYI_BWBBxPY"; //same page
}

function change(element){
    //document.getElementById("mouseMove").innerHTML = "Thanks for hovering the mouse";
    element.innerHTML = "Thanks for hovering the mouse";
    //alert("change text");
}

function goBack(element){
    //document.getElementById("mouseMove").innerHTML = "Hover the mouse here again";
    element.innerHTML = "Hover the mouse here again";
}

function load(){
    alert("page loaded");
}

function functionChange(element){
    console.log(element.value);
}