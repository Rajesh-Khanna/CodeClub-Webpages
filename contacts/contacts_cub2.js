/*function styl(cube){
	card = cube.getElementsByClassName('card2')[0];
	var e = (Math.random()%5)+1;
	switch(e){
		case 1:
				card.style.backgroundColor = '#4885ed';
				card.style.boxShadow= 'inset 0 0 20px rgba(255,255,255,0.2)';
				break;

		case 2:
				card.style.backgroundColor = '#db3236';
				card.style.boxShadow= 'inset 0 0 20px rgba(255,255,255,0.2)';
				break;
		case 3:
				card.style.backgroundColor = '#f4c20d';
				card.style.boxShadow= 'inset 0 0 20px rgba(255,255,255,0.2)';
				break;
		case 4:
				card.style.backgroundColor = '#3cba54';
				card.style.boxShadow= 'inset 0 0 20px rgba(255,255,255,0.2)';
				break;
		case 5:
				card.style.backgroundColor = '#ffffff';
				card.style.boxShadow= 'inset 0 0 20px rgba(0,0,0,0.2)';
				break;
	}
}
*/

function flipback(cube){
if(cube.classList.contains("cubespinner1"))
	{
		cube.classList.remove("cubespinner1");
		cube.className+=" cubespinner2";
		cube.style.webkitTransform = "rotateY(0deg)";
		return;
	}
}

function flip(cube){
if(cube.classList.contains("cubespinner2"))
	{
		cube.classList.remove("cubespinner2");
		cube.className+=" cubespinner1";
		cube.style.webkitTransform = "rotateY(-90deg)";
		//styl(cube);
	return ;
		}		
if(cube.classList.contains('cubespinner1'))
	return;
else
	cube.className+=" cubespinner1";
	cube.style.webkitTransform = "rotateY(-90deg)";
}

function new_card(name,cat,im_src,details,details2,SN){
	var tabe = document.getElementsByClassName('contactstable')[cat];
	var tiles = parseInt(tabe.id);
	if(tiles%4 == 0){
		var row = tabe.insertRow();
	}
	else{
		var row = tabe.rows[tabe.rows.length-1];
	}
	var cell = row.insertCell();
	cell.style.padding = "30px 10px";
	tabe.id = (tiles+1).toString();
	var stage = document.createElement('div');
	stage.setAttribute('class','stage');
	stage.style.height = "350px";
	stage.style.width = "300px";
	var cube = document.createElement('div');
	cube.setAttribute('class','cubespinner');
	var face1 = document.createElement('div');
	face1.setAttribute('class','face1');
	var face2 = document.createElement('div');
	face2.setAttribute('class','face2');
	var card1 = document.createElement('div');
	card1.setAttribute('class','card1');
	card1.style.height = '250px';
	card1.style.fontFamily ='Roboto';
	var card2 = document.createElement('div');
	card2.setAttribute('class','card2');
	card2.style.height = '250px';
	card2.style.width = '250px';
	card2.style.fontFamily = 'Roboto';
	////////////////////////////////////////card1//////////////////////////////////////////////
	var fill1 = document.createElement('div');
	fill1.setAttribute('class','front_card');
	fill1.setAttribute('align','left');
	fill1.style.position = 'relative';
	var img_space1 = document.createElement('img');
	img_space1.src = im_src;
	img_space1.style.width = '250px';
	img_space1.style.height = '250px';
	var text_space1 = document.createElement('div');
	text_space1.style.position = 'absolute';
	text_space1.style.zIndex = '100';
	//text_space1.style.opacity = '1';
	text_space1.style.width = '250px';
	text_space1.style.height = '50px';
	//text_space1.style.left = '4px';
	text_space1.style.top = '200px';
	text_space1.style.backgroundColor = 'rgba(255,255,255,0.8)';
	text_space1.innerHTML = '<b>'+name+'</b><br/>'+details;
	card1.style.backgroundColor = 'rgba(255,255,255,1)';
	text_space1.style.boxShadow= 'inset 0 0 20px rgba(0,0,0,0.2)';
	fill1.appendChild(img_space1);
	fill1.appendChild(text_space1);
	card1.appendChild(fill1);
	face1.appendChild(card1);
	cube.appendChild(face1);
	///////////////////////////////////////card2//////////////////////////////////////////////
	var fill2 = document.createElement('div');
	fill2.setAttribute('align','left');
	fill2.setAttribute('class','left_card');
	fill2.style.position = 'relative';
	fill2.style.left = '4px';
	fill2.style.top = '8px';
	fill2.style.textAlign = 'center';
	fill2.style.width='242px';
	fill2.style.height='234px';
	fill2.style.lineHeight = "20px";
	var l = document.createElement('a');
	l.innerHTML = name;
	l.href = details2[4];
	var det = document.createElement('div');
	det.innerHTML = '<br><b>'+details2[0]+'</b>'+'<br><i>mobile</i>: '+details2[1]+'<br><i>emali</i>: '+details2[2]+'<br>'+details2[3];
	card2.style.backgroundColor = 'rgba(255,255,255,1)';
	card2.style.boxShadow= 'inset 0 0 20px rgba(0,0,0,0.2)';
	var connect = document.createElement('div');
	connect.width='100%';
	connect.style.letterSpacing = "5px";
	connect.setAttribute('align','center');
	var goog = document.createElement('a');
	var fb = document.createElement('a');
	var ln = document.createElement('a');
	var tw = document.createElement('a');
	var googi = document.createElement('i');
	var fbi = document.createElement('i');
	var lni = document.createElement('i');
	var twi = document.createElement('i');
	googi.className = "fa fa-google";
	fbi.className = "fa fa-facebook";
	lni.className = "fa fa-linkedin";
	twi.className = "fa fa-twitter";
	goog.href = SN[0];
	fb.href = SN[1];
	ln.href = SN[2];
	tw.href = SN[3];
	goog.appendChild(googi);
	fb.appendChild(fbi);
	ln.appendChild(lni);
	tw.appendChild(twi);
	connect.appendChild(goog);
	connect.appendChild(tw);
	connect.appendChild(ln);
	connect.appendChild(fb);
	/*<div style="margin: 2px 0;">
    <a href="#"><i class="fa fa-dribbble"></i></a> 
    <a href="#"><i class="fa fa-twitter"></i></a>  
    <a href="#"><i class="fa fa-linkedin"></i></a>  
    <a href="#"><i class="fa fa-facebook"></i></a> 
 	</div>*/
	///////////////////////////////////////////////////////////////////////////////////////////////////
	fill2.appendChild(l);
	fill2.appendChild(det);
	fill2.appendChild(connect);
	card2.appendChild(fill2);
	face2.appendChild(card2);
	cube.appendChild(face2);
	stage.appendChild(cube);
	cell.appendChild(stage);
	stage.addEventListener("mouseover",function(){
		flip(cube);
	},false);	
	stage.addEventListener("mouseout",function(){
		flipback(cube);
	},false);
}

window.onload = function(){
//	Sudeshna Sarkar
	var details2 = ['Head of Department','283494(o), 283495(r)','sudeshna@cse.iitkgp.ernet.in','Natural Language Processing, Machine Learning','http://www.facweb.iitkgp.ernet.in/~sudeshna/'];
	var SN=['https://plus.google.com/u/0/100271729093160938042','https://www.facebook.com/sudeshna.sarkar.16','https://www.linkedin.com/in/sudeshna-sarkar-b92b242/?trk=public-profile-join-page','#'];
	new_card('Sudeshna Sarkar',0,'img/SSsmall.jpg','Heaf of The Department',details2,SN);
//	Soumyajit Dey
	details2 = ['Assistant Professor','282348(o)','soumya@cse.iitkgp.ernet.in','VLSI and Embedded Systems, Formal Methods','http://cse.iitkgp.ac.in/~soumya/'];
	SN = ['#','https://www.facebook.com/soumyajit.dey','https://www.linkedin.com/in/soumyajit-dey-8a07b711/','#'];
	new_card('Soumyajit Dey',0,'img/SD.jpg','Assistant Professor',details2,SN);
//	Aritra Hazra
	details2 = ['Assistant Professor','+91-3222-304640','aritrah@cse.iitkgp.ernet.in','VLSI and Embedded Systems, Security for Cryptographic Designs','http://cse.iitkgp.ac.in/~aritrah/'];
	SN = ['#','https://www.facebook.com/aritra.hazra.33','https://www.linkedin.com/in/aritra-hazra-70271a7/','#'];
	new_card('Aritra Hazra',0,'img/aritra.jpg','Assistant Professor',details2,SN);
//	Tanay Bhartia
	details2 = ['General Secretary','#','tanaybhartia@gmail.com','I dont know','#'];
	SN = ['#','https://www.facebook.com/tanay.bhartia','https://www.linkedin.com/in/tanaybhartia/','#'];
	new_card('Tanay Bhartia',3,'img/Tanay.jpg',details2[0],details2,SN);
//	Siddharth Jain
	details2 = ['General Secretary','#','1997jainsid@gmail.com','I dont know','#'];
	SN = ['#','https://www.facebook.com/sid.thecooljain','https://www.linkedin.com/in/siddharth-jain-793830104/','#'];
	new_card('Siddharth Jain',3,'img/SJ.jpg',details2[0],details2,SN);
	
//////////////////////////////////////template/////////////////////////////////////////////////////////
/******
	plz upload ur details in the formate given and past it accordingly;
********************************************************************
	details2 = ['Position','Phone Number(if u want to else just #)','gmail id','Topics u have comand in','if u have a website else just #'];
	SN = ['google+ id','fb id','linkedin id','twitter id'];
	new_card('Name',enter 0 for faculty, 1 for 5th years and alumni, 2 for 4th years, 3 for 3rd years ,4 for 2nd years 5 for first years *all in int datatype not  char*,'url of img',details2[0],details2,SN);
********************************************************************

**************/

};
