let r = 5;
let v = 4;

let p1 = r;
let p2 = r * r;
let p3 = r * r * r;
let p4 = r * r * r * r;

let c1 = 1;
let c2 = 1;
let c3 = 1;
let c4 = 1;

let cell1 = 1;
let cell2 = 1;
let cell3 = 1;
let cell4 = 1;


//let meter = '24'; // two beats duple
//let meter = '34'; // two beats triple
let meter = '68'; // two beats compound

function formatCell(n){
	return '<img class="cell" src="img/mode' + meter + n + '.png" />';
}

for (let i = 1; i <= p4; i++) {
	
	if (c1 == p1+1) {
		cell2++;
		cell1=1;
		c1 = 1;
		document.getElementById("symmetric_group").insertAdjacentHTML("beforeend", "<hr />");
	}
	if (c2 == p2+1) {
		cell3++;
		cell2=1;
		c2 = 1;
	}
	if (c3 == p3+1) {
		cell4++;
		cell3=1;
		c3 = 1;
	}
	if (c4 == p4+1) {
		c4 = 1;
	}
	
	var cellsHTML = '';
	cellsHTML += '<div class="num">&num;' + i + '</div>';
	cellsHTML += formatCell(cell1);
	cellsHTML += formatCell(cell2);
	cellsHTML += formatCell(cell3);
	cellsHTML += formatCell(cell4);
	
	var m = '<div class="tuple">' + cellsHTML + '</div>';
	document.getElementById("symmetric_group").insertAdjacentHTML("beforeend", m);
	
	cell1++;
	
	c1++;
	c2++;
	c3++;
	c4++;

}
document.getElementById("symmetric_group").insertAdjacentHTML("afterbegin", `<ul class="calc"><li><em>Symmetric group</em> for a <em>set</em> of 5 rhythms, in 4 voices, for a total of 625 (5^4) <em>tuples</em>.</li></ul>`);
