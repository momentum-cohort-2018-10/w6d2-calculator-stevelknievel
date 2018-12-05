// let display = document.getElementById('display');

// function XXX(event){
//     let button = event.target.innerText;
//     // if (button)...blahblahblah...


document.getElementById('clear').addEventListener('click', function() {
    display = "";
    document.getElementById('display').innerText = display})

document.getElementById('seven').addEventListener('click', function() {
    document.getElementById('display').innerText += '7'})

document.getElementById('eight').addEventListener('click', function() {
    document.getElementById('display').innerText += '8'})

document.getElementById('nine').addEventListener('click', function() {
    document.getElementById('display').innerText += '9'})

document.getElementById('divide').addEventListener('click', function() {
    document.getElementById('display').innerText += '/'})

document.getElementById('four').addEventListener('click', function() {
    document.getElementById('display').innerText += '4'})

document.getElementById('five').addEventListener('click', function() {
    document.getElementById('display').innerText += '5'})

document.getElementById('six').addEventListener('click', function() {
    document.getElementById('display').innerText += '6'})

document.getElementById('multiply').addEventListener('click', function() {
    document.getElementById('display').innerText += '*'})

document.getElementById('one').addEventListener('click', function() {
    document.getElementById('display').innerText += '1'})

document.getElementById('two').addEventListener('click', function() {
    document.getElementById('display').innerText += '2'})

document.getElementById('three').addEventListener('click', function() {
    document.getElementById('display').innerText += '3'})

document.getElementById('subtract').addEventListener('click', function() {
    document.getElementById('display').innerText += '-'})

document.getElementById('zero').addEventListener('click', function() {
    document.getElementById('display').innerText += '0'})

document.getElementById('decimal').addEventListener('click', function() {
    document.getElementById('display').innerText += '.'})

document.getElementById('add').addEventListener('click', function() {
    document.getElementById('display').innerText += '+'})

function equal() {
    document.getElementById('display').innerText = eval(document.getElementById('display').innerText)
}

 
// let clear = document.getElementById('clear');
// clear.addEventListener("click", function(){
//     display = "";
