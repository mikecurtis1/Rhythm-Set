const arr = ['1','2','3','4','5'];
var voices = 4;
function getRhythmicMode(len){
	var r = Math.floor(Math.random()*len);
	return arr[r];
}
for (let i = 0; i < voices; i++) {
	getRhythmicMode(arr.length);
}
const submit = document.getElementById('submit');
submit.addEventListener('click', generateHTML);
function generateHTML(){
	meter='24';
	document.getElementsByName('meter').forEach(node => {if(node.checked){meter=node.value;}});
	document.getElementById("1.1").src = 'img/mode' + meter + getRhythmicMode(arr.length) + '.png';
	document.getElementById("1.2").src = 'img/mode' + meter + getRhythmicMode(arr.length) + '.png';
	document.getElementById("1.3").src = 'img/mode' + meter + getRhythmicMode(arr.length) + '.png';
	document.getElementById("1.4").src = 'img/mode' + meter + getRhythmicMode(arr.length) + '.png';
	document.getElementById("2.1").src = 'img/mode' + meter + getRhythmicMode(arr.length) + '.png';
	document.getElementById("2.2").src = 'img/mode' + meter + getRhythmicMode(arr.length) + '.png';
	document.getElementById("2.3").src = 'img/mode' + meter + getRhythmicMode(arr.length) + '.png';
	document.getElementById("2.4").src = 'img/mode' + meter + getRhythmicMode(arr.length) + '.png';
}
