var topPage = document.querySelector('.topPage');
var midPage = document.querySelector('.midPage');
var bottomPage = document.querySelector('.bottomPage');
var photoList = document.querySelector('.photoList');
var dogsAlbum = document.getElementById('dogsAlbum');
var fishesAlbum = document.getElementById('fishesAlbum');
var marmotsAlbum = document.getElementById('marmotsAlbum');
var slothsAlbum = document.getElementById('slothsAlbum');
var pigsAlbum = document.getElementById('pigsAlbum');
var penguinsAlbum = document.getElementById('penguinsAlbum');
var dogPics = document.querySelector('.dogPics');
var fishPics = document.querySelector('.fishPics');
var slothPics = document.querySelector('.slothPics');
var pigPics = document.querySelector('.pigPics');
var penguinPics = document.querySelector('.penguinPics');
var marmotPics = document.querySelector('.marmotPics');
var dog1 = document.getElementById('dog1');
var dog2 = document.getElementById('dog2');
var dog3 = document.getElementById('dog3');
var dog4 = document.getElementById('dog4');
var dog5 = document.getElementById('dog5');
var dog6 = document.getElementById('dog6');
var fish1 = document.getElementById('fish1');
var fish2 = document.getElementById('fish2');
var fish3 = document.getElementById('fish3');
var fish4 = document.getElementById('fish4');
var fish5 = document.getElementById('fish5');
var fish6 = document.getElementById('fish6');
var sloth1 = document.getElementById('sloth1');
var sloth2 = document.getElementById('sloth2');
var sloth3 = document.getElementById('sloth3');
var sloth4 = document.getElementById('sloth4');
var sloth5 = document.getElementById('sloth5');
var sloth6 = document.getElementById('sloth6');
var pig1 = document.getElementById('pig1');
var pig2 = document.getElementById('pig2');
var pig3 = document.getElementById('pig3');
var pig4 = document.getElementById('pig4');
var pig5 = document.getElementById('pig5');
var pig6 = document.getElementById('pig6');
var penguin1 = document.getElementById('penguin1');
var penguin2 = document.getElementById('penguin2');
var penguin3 = document.getElementById('penguin3');
var penguin4 = document.getElementById('penguin4');
var penguin5 = document.getElementById('penguin5');
var penguin6 = document.getElementById('penguin6');
var marmot1 = document.getElementById('marmot1');
var marmot2 = document.getElementById('marmot2');
var marmot3 = document.getElementById('marmot3');
var marmot4 = document.getElementById('marmot4');
var marmot5 = document.getElementById('marmot5');
var marmot6 = document.getElementById('marmot6');

$('#marmotReturn').click(function() {
	console.log('There was a click');
	bottomPage.style.display = 'none';
	midPage.style.display = 'block';
	$('.dogs').removeClass('active');
	$('.fishes').removeClass('active');
	$('.sloths').removeClass('active');
	$('.pigs').removeClass('active');
	$('.penguins').removeClass('active');
	$('.marmots').addClass('active');
	dogsAlbum.style.display = 'none';
	fishesAlbum.style.display = 'none';
	slothsAlbum.style.display = 'none';
	pigsAlbum.style.display = 'none';
	penguinsAlbum.style.display = 'none';
	marmotsAlbum.style.display = 'block';
});

$('#penguinReturn').click(function() {
	console.log('There was a click');
	bottomPage.style.display = 'none';
	midPage.style.display = 'block';
	$('.dogs').removeClass('active');
	$('.fishes').removeClass('active');
	$('.sloths').removeClass('active');
	$('.pigs').removeClass('active');
	$('.penguins').addClass('active');
	$('.marmots').removeClass('active');
	dogsAlbum.style.display = 'none';
	fishesAlbum.style.display = 'none';
	slothsAlbum.style.display = 'none';
	pigsAlbum.style.display = 'none';
	penguinsAlbum.style.display = 'block';
	marmotsAlbum.style.display = 'none';
});

$('#pigReturn').click(function() {
	console.log('There was a click');
	bottomPage.style.display = 'none';
	midPage.style.display = 'block';
	$('.dogs').removeClass('active');
	$('.fishes').removeClass('active');
	$('.sloths').removeClass('active');
	$('.pigs').addClass('active');
	$('.penguins').removeClass('active');
	$('.marmots').removeClass('active');
	dogsAlbum.style.display = 'none';
	fishesAlbum.style.display = 'none';
	slothsAlbum.style.display = 'none';
	pigsAlbum.style.display = 'block';
	penguinsAlbum.style.display = 'none';
	marmotsAlbum.style.display = 'none';
});

$('#slothReturn').click(function() {
	console.log('There was a click');
	bottomPage.style.display = 'none';
	midPage.style.display = 'block';
	$('.dogs').removeClass('active');
	$('.fishes').removeClass('active');
	$('.sloths').addClass('active');
	$('.pigs').removeClass('active');
	$('.penguins').removeClass('active');
	$('.marmots').removeClass('active');
	dogsAlbum.style.display = 'none';
	fishesAlbum.style.display = 'none';
	slothsAlbum.style.display = 'block';
	pigsAlbum.style.display = 'none';
	penguinsAlbum.style.display = 'none';
	marmotsAlbum.style.display = 'none';
});

$('#fishReturn').click(function() {
	console.log('There was a click');
	bottomPage.style.display = 'none';
	midPage.style.display = 'block';
	$('.dogs').removeClass('active');
	$('.fishes').addClass('active');
	$('.sloths').removeClass('active');
	$('.pigs').removeClass('active');
	$('.penguins').removeClass('active');
	$('.marmots').removeClass('active');
	dogsAlbum.style.display = 'none';
	slothsAlbum.style.display = 'none';
	fishesAlbum.style.display = 'block';
	pigsAlbum.style.display = 'none';
	penguinsAlbum.style.display = 'none';
	marmotsAlbum.style.display = 'none';
});

$('#dogReturn').click(function() {
	console.log('There was a click');
	bottomPage.style.display = 'none';
	midPage.style.display = 'block';
	$('.dogs').addClass('active');
	$('.fishes').removeClass('active');
	$('.sloths').removeClass('active');
	$('.pigs').removeClass('active');
	$('.penguins').removeClass('active');
	$('.marmots').removeClass('active');
	fishesAlbum.style.display = 'none';
	slothsAlbum.style.display = 'none';
	dogsAlbum.style.display = 'block';
	pigsAlbum.style.display = 'none';
	penguinsAlbum.style.display = 'none';
	marmotsAlbum.style.display = 'none';
});

$('#marmotIcon6').click(function() {
	console.log('There was a click');
	midPage.style.display = 'none';
	bottomPage.style.display = 'block';
	dogPics.style.display = 'none';
	fishPics.style.display = 'none';
	slothPics.style.display = 'none';
	pigPics.style.display = 'none';
	penguinPics.style.display = 'none';
	marmotPics.style.display = 'block';
	marmot1.style.display = 'none';
	marmot2.style.display = 'none';
	marmot3.style.display = 'none';
	marmot4.style.display = 'none';
	marmot5.style.display = 'none';
	marmot6.style.display = 'block';
});

$('#marmotIcon5').click(function() {
	console.log('There was a click');
	midPage.style.display = 'none';
	bottomPage.style.display = 'block';
	dogPics.style.display = 'none';
	fishPics.style.display = 'none';
	slothPics.style.display = 'none';
	pigPics.style.display = 'none';
	penguinPics.style.display = 'none';
	marmotPics.style.display = 'block';
	marmot1.style.display = 'none';
	marmot2.style.display = 'none';
	marmot3.style.display = 'none';
	marmot4.style.display = 'none';
	marmot5.style.display = 'block';
	marmot6.style.display = 'none';
});

$('#marmotIcon4').click(function() {
	console.log('There was a click');
	midPage.style.display = 'none';
	bottomPage.style.display = 'block';
	dogPics.style.display = 'none';
	fishPics.style.display = 'none';
	slothPics.style.display = 'none';
	pigPics.style.display = 'none';
	penguinPics.style.display = 'none';
	marmotPics.style.display = 'block';
	marmot1.style.display = 'none';
	marmot2.style.display = 'none';
	marmot3.style.display = 'none';
	marmot4.style.display = 'block';
	marmot5.style.display = 'none';
	marmot6.style.display = 'none';
});

$('#marmotIcon3').click(function() {
	console.log('There was a click');
	midPage.style.display = 'none';
	bottomPage.style.display = 'block';
	dogPics.style.display = 'none';
	fishPics.style.display = 'none';
	slothPics.style.display = 'none';
	pigPics.style.display = 'none';
	penguinPics.style.display = 'none';
	marmotPics.style.display = 'block';
	marmot1.style.display = 'none';
	marmot2.style.display = 'none';
	marmot3.style.display = 'block';
	marmot4.style.display = 'none';
	marmot5.style.display = 'none';
	marmot6.style.display = 'none';
});

$('#marmotIcon2').click(function() {
	console.log('There was a click');
	midPage.style.display = 'none';
	bottomPage.style.display = 'block';
	dogPics.style.display = 'none';
	fishPics.style.display = 'none';
	slothPics.style.display = 'none';
	pigPics.style.display = 'none';
	penguinPics.style.display = 'none';
	marmotPics.style.display = 'block';
	marmot1.style.display = 'none';
	marmot2.style.display = 'block';
	marmot3.style.display = 'none';
	marmot4.style.display = 'none';
	marmot5.style.display = 'none';
	marmot6.style.display = 'none';
});

$('#marmotIcon1').click(function() {
	console.log('There was a click');
	midPage.style.display = 'none';
	bottomPage.style.display = 'block';
	dogPics.style.display = 'none';
	fishPics.style.display = 'none';
	slothPics.style.display = 'none';
	pigPics.style.display = 'none';
	penguinPics.style.display = 'none';
	marmotPics.style.display = 'block';
	marmot1.style.display = 'block';
	marmot2.style.display = 'none';
	marmot3.style.display = 'none';
	marmot4.style.display = 'none';
	marmot5.style.display = 'none';
	marmot6.style.display = 'none';
});

$('#penguinIcon6').click(function() {
	console.log('There was a click');
	midPage.style.display = 'none';
	bottomPage.style.display = 'block';
	dogPics.style.display = 'none';
	fishPics.style.display = 'none';
	slothPics.style.display = 'none';
	pigPics.style.display = 'none';
	penguinPics.style.display = 'block';
	marmotPics.style.display = 'none';
	penguin1.style.display = 'none';
	penguin2.style.display = 'none';
	penguin3.style.display = 'none';
	penguin4.style.display = 'none';
	penguin5.style.display = 'none';
	penguin6.style.display = 'block';
});

$('#penguinIcon5').click(function() {
	console.log('There was a click');
	midPage.style.display = 'none';
	bottomPage.style.display = 'block';
	dogPics.style.display = 'none';
	fishPics.style.display = 'none';
	slothPics.style.display = 'none';
	pigPics.style.display = 'none';
	penguinPics.style.display = 'block';
	marmotPics.style.display = 'none';
	penguin1.style.display = 'none';
	penguin2.style.display = 'none';
	penguin3.style.display = 'none';
	penguin4.style.display = 'none';
	penguin5.style.display = 'block';
	penguin6.style.display = 'none';
});

$('#penguinIcon4').click(function() {
	console.log('There was a click');
	midPage.style.display = 'none';
	bottomPage.style.display = 'block';
	dogPics.style.display = 'none';
	fishPics.style.display = 'none';
	slothPics.style.display = 'none';
	pigPics.style.display = 'none';
	penguinPics.style.display = 'block';
	marmotPics.style.display = 'none';
	penguin1.style.display = 'none';
	penguin2.style.display = 'none';
	penguin3.style.display = 'none';
	penguin4.style.display = 'block';
	penguin5.style.display = 'none';
	penguin6.style.display = 'none';
});

$('#penguinIcon3').click(function() {
	console.log('There was a click');
	midPage.style.display = 'none';
	bottomPage.style.display = 'block';
	dogPics.style.display = 'none';
	fishPics.style.display = 'none';
	slothPics.style.display = 'none';
	pigPics.style.display = 'none';
	penguinPics.style.display = 'block';
	marmotPics.style.display = 'none';
	penguin1.style.display = 'none';
	penguin2.style.display = 'none';
	penguin3.style.display = 'block';
	penguin4.style.display = 'none';
	penguin5.style.display = 'none';
	penguin6.style.display = 'none';
});

$('#penguinIcon2').click(function() {
	console.log('There was a click');
	midPage.style.display = 'none';
	bottomPage.style.display = 'block';
	dogPics.style.display = 'none';
	fishPics.style.display = 'none';
	slothPics.style.display = 'none';
	pigPics.style.display = 'none';
	penguinPics.style.display = 'block';
	marmotPics.style.display = 'none';
	penguin1.style.display = 'none';
	penguin2.style.display = 'block';
	penguin3.style.display = 'none';
	penguin4.style.display = 'none';
	penguin5.style.display = 'none';
	penguin6.style.display = 'none';
});

$('#penguinIcon1').click(function() {
	console.log('There was a click');
	midPage.style.display = 'none';
	bottomPage.style.display = 'block';
	dogPics.style.display = 'none';
	fishPics.style.display = 'none';
	slothPics.style.display = 'none';
	pigPics.style.display = 'none';
	penguinPics.style.display = 'block';
	marmotPics.style.display = 'none';
	penguin1.style.display = 'block';
	penguin2.style.display = 'none';
	penguin3.style.display = 'none';
	penguin4.style.display = 'none';
	penguin5.style.display = 'none';
	penguin6.style.display = 'none';
});

$('#pigIcon6').click(function() {
	console.log('There was a click');
	midPage.style.display = 'none';
	bottomPage.style.display = 'block';
	dogPics.style.display = 'none';
	fishPics.style.display = 'none';
	slothPics.style.display = 'none';
	pigPics.style.display = 'block';
	penguinPics.style.display = 'none';
	marmotPics.style.display = 'none';
	pig1.style.display = 'none';
	pig2.style.display = 'none';
	pig3.style.display = 'none';
	pig4.style.display = 'none';
	pig5.style.display = 'none';
	pig6.style.display = 'block';
});

$('#pigIcon5').click(function() {
	console.log('There was a click');
	midPage.style.display = 'none';
	bottomPage.style.display = 'block';
	dogPics.style.display = 'none';
	fishPics.style.display = 'none';
	slothPics.style.display = 'none';
	pigPics.style.display = 'block';
	penguinPics.style.display = 'none';
	marmotPics.style.display = 'none';
	pig1.style.display = 'none';
	pig2.style.display = 'none';
	pig3.style.display = 'none';
	pig4.style.display = 'none';
	pig5.style.display = 'block';
	pig6.style.display = 'none';
});

$('#pigIcon4').click(function() {
	console.log('There was a click');
	midPage.style.display = 'none';
	bottomPage.style.display = 'block';
	dogPics.style.display = 'none';
	fishPics.style.display = 'none';
	slothPics.style.display = 'none';
	pigPics.style.display = 'block';
	penguinPics.style.display = 'none';
	marmotPics.style.display = 'none';
	pig1.style.display = 'none';
	pig2.style.display = 'none';
	pig3.style.display = 'none';
	pig4.style.display = 'block';
	pig5.style.display = 'none';
	pig6.style.display = 'none';
});

$('#pigIcon3').click(function() {
	console.log('There was a click');
	midPage.style.display = 'none';
	bottomPage.style.display = 'block';
	dogPics.style.display = 'none';
	fishPics.style.display = 'none';
	slothPics.style.display = 'none';
	pigPics.style.display = 'block';
	penguinPics.style.display = 'none';
	marmotPics.style.display = 'none';
	pig1.style.display = 'none';
	pig2.style.display = 'none';
	pig3.style.display = 'block';
	pig4.style.display = 'none';
	pig5.style.display = 'none';
	pig6.style.display = 'none';
});

$('#pigIcon2').click(function() {
	console.log('There was a click');
	midPage.style.display = 'none';
	bottomPage.style.display = 'block';
	dogPics.style.display = 'none';
	fishPics.style.display = 'none';
	slothPics.style.display = 'none';
	pigPics.style.display = 'block';
	penguinPics.style.display = 'none';
	marmotPics.style.display = 'none';
	pig1.style.display = 'none';
	pig2.style.display = 'block';
	pig3.style.display = 'none';
	pig4.style.display = 'none';
	pig5.style.display = 'none';
	pig6.style.display = 'none';
});

$('#pigIcon1').click(function() {
	console.log('There was a click');
	midPage.style.display = 'none';
	bottomPage.style.display = 'block';
	dogPics.style.display = 'none';
	fishPics.style.display = 'none';
	slothPics.style.display = 'none';
	pigPics.style.display = 'block';
	penguinPics.style.display = 'none';
	marmotPics.style.display = 'none';
	pig1.style.display = 'block';
	pig2.style.display = 'none';
	pig3.style.display = 'none';
	pig4.style.display = 'none';
	pig5.style.display = 'none';
	pig6.style.display = 'none';
});

$('#slothIcon6').click(function() {
	console.log('There was a click');
	midPage.style.display = 'none';
	bottomPage.style.display = 'block';
	dogPics.style.display = 'none';
	fishPics.style.display = 'none';
	slothPics.style.display = 'block';
	pigPics.style.display = 'none';
	penguinPics.style.display = 'none';
	marmotPics.style.display = 'none';
	sloth1.style.display = 'none';
	sloth2.style.display = 'none';
	sloth3.style.display = 'none';
	sloth4.style.display = 'none';
	sloth5.style.display = 'none';
	sloth6.style.display = 'block';
});

$('#slothIcon5').click(function() {
	console.log('There was a click');
	midPage.style.display = 'none';
	bottomPage.style.display = 'block';
	dogPics.style.display = 'none';
	fishPics.style.display = 'none';
	slothPics.style.display = 'block';
	pigPics.style.display = 'none';
	penguinPics.style.display = 'none';
	marmotPics.style.display = 'none';
	sloth1.style.display = 'none';
	sloth2.style.display = 'none';
	sloth3.style.display = 'none';
	sloth4.style.display = 'none';
	sloth5.style.display = 'block';
	sloth6.style.display = 'none';
});

$('#slothIcon4').click(function() {
	console.log('There was a click');
	midPage.style.display = 'none';
	bottomPage.style.display = 'block';
	dogPics.style.display = 'none';
	fishPics.style.display = 'none';
	slothPics.style.display = 'block';
	pigPics.style.display = 'none';
	penguinPics.style.display = 'none';
	marmotPics.style.display = 'none';
	sloth1.style.display = 'none';
	sloth2.style.display = 'none';
	sloth3.style.display = 'none';
	sloth4.style.display = 'block';
	sloth5.style.display = 'none';
	sloth6.style.display = 'none';
});

$('#slothIcon3').click(function() {
	console.log('There was a click');
	midPage.style.display = 'none';
	bottomPage.style.display = 'block';
	dogPics.style.display = 'none';
	fishPics.style.display = 'none';
	slothPics.style.display = 'block';
	pigPics.style.display = 'none';
	penguinPics.style.display = 'none';
	marmotPics.style.display = 'none';
	sloth1.style.display = 'none';
	sloth2.style.display = 'none';
	sloth3.style.display = 'block';
	sloth4.style.display = 'none';
	sloth5.style.display = 'none';
	sloth6.style.display = 'none';
});

$('#slothIcon2').click(function() {
	console.log('There was a click');
	midPage.style.display = 'none';
	bottomPage.style.display = 'block';
	dogPics.style.display = 'none';
	fishPics.style.display = 'none';
	slothPics.style.display = 'block';
	pigPics.style.display = 'none';
	penguinPics.style.display = 'none';
	marmotPics.style.display = 'none';
	sloth1.style.display = 'none';
	sloth2.style.display = 'block';
	sloth3.style.display = 'none';
	sloth4.style.display = 'none';
	sloth5.style.display = 'none';
	sloth6.style.display = 'none';
});

$('#slothIcon1').click(function() {
	console.log('There was a click');
	midPage.style.display = 'none';
	bottomPage.style.display = 'block';
	dogPics.style.display = 'none';
	fishPics.style.display = 'none';
	slothPics.style.display = 'block';
	pigPics.style.display = 'none';
	penguinPics.style.display = 'none';
	marmotPics.style.display = 'none';
	sloth1.style.display = 'block';
	sloth2.style.display = 'none';
	sloth3.style.display = 'none';
	sloth4.style.display = 'none';
	sloth5.style.display = 'none';
	sloth6.style.display = 'none';
});

$('#fishIcon6').click(function() {
	console.log('There was a click');
	midPage.style.display = 'none';
	bottomPage.style.display = 'block';
	dogPics.style.display = 'none';
	fishPics.style.display = 'block';
	slothPics.style.display = 'none';
	pigPics.style.display = 'none';
	penguinPics.style.display = 'none';
	marmotPics.style.display = 'none';
	fish1.style.display = 'none';
	fish2.style.display = 'none';
	fish3.style.display = 'none';
	fish4.style.display = 'none';
	fish5.style.display = 'none';
	fish6.style.display = 'block';
});

$('#fishIcon5').click(function() {
	console.log('There was a click');
	midPage.style.display = 'none';
	bottomPage.style.display = 'block';
	dogPics.style.display = 'none';
	fishPics.style.display = 'block';
	slothPics.style.display = 'none';
	pigPics.style.display = 'none';
	penguinPics.style.display = 'none';
	marmotPics.style.display = 'none';
	fish1.style.display = 'none';
	fish2.style.display = 'none';
	fish3.style.display = 'none';
	fish4.style.display = 'none';
	fish5.style.display = 'block';
	fish6.style.display = 'none';
});

$('#fishIcon4').click(function() {
	console.log('There was a click');
	midPage.style.display = 'none';
	bottomPage.style.display = 'block';
	dogPics.style.display = 'none';
	fishPics.style.display = 'block';
	slothPics.style.display = 'none';
	pigPics.style.display = 'none';
	penguinPics.style.display = 'none';
	marmotPics.style.display = 'none';
	fish1.style.display = 'none';
	fish2.style.display = 'none';
	fish3.style.display = 'none';
	fish4.style.display = 'block';
	fish5.style.display = 'none';
	fish6.style.display = 'none';
});

$('#fishIcon3').click(function() {
	console.log('There was a click');
	midPage.style.display = 'none';
	bottomPage.style.display = 'block';
	dogPics.style.display = 'none';
	fishPics.style.display = 'block';
	slothPics.style.display = 'none';
	pigPics.style.display = 'none';
	penguinPics.style.display = 'none';
	marmotPics.style.display = 'none';
	fish1.style.display = 'none';
	fish2.style.display = 'none';
	fish3.style.display = 'block';
	fish4.style.display = 'none';
	fish5.style.display = 'none';
	fish6.style.display = 'none';
});

$('#fishIcon2').click(function() {
	console.log('There was a click');
	midPage.style.display = 'none';
	bottomPage.style.display = 'block';
	dogPics.style.display = 'none';
	fishPics.style.display = 'block';
	slothPics.style.display = 'none';
	pigPics.style.display = 'none';
	penguinPics.style.display = 'none';
	marmotPics.style.display = 'none';
	fish1.style.display = 'none';
	fish2.style.display = 'block';
	fish3.style.display = 'none';
	fish4.style.display = 'none';
	fish5.style.display = 'none';
	fish6.style.display = 'none';
});

$('#fishIcon1').click(function() {
	console.log('There was a click');
	midPage.style.display = 'none';
	bottomPage.style.display = 'block';
	dogPics.style.display = 'none';
	fishPics.style.display = 'block';
	slothPics.style.display = 'none';
	pigPics.style.display = 'none';
	penguinPics.style.display = 'none';
	marmotPics.style.display = 'none';
	fish1.style.display = 'block';
	fish2.style.display = 'none';
	fish3.style.display = 'none';
	fish4.style.display = 'none';
	fish5.style.display = 'none';
	fish6.style.display = 'none';
});

$('#dogIcon6').click(function() {
	console.log('There was a click');
	midPage.style.display = 'none';
	bottomPage.style.display = 'block';
	fishPics.style.display = 'none';
	dogPics.style.display = 'block';
	slothPics.style.display = 'none';
	pigPics.style.display = 'none';
	penguinPics.style.display = 'none';
	marmotPics.style.display = 'none';
	dog1.style.display = 'none';
	dog2.style.display = 'none';
	dog3.style.display = 'none';
	dog4.style.display = 'none';
	dog5.style.display = 'none';
	dog6.style.display = 'block';
});

$('#dogIcon5').click(function() {
	console.log('There was a click');
	midPage.style.display = 'none';
	bottomPage.style.display = 'block';
	fishPics.style.display = 'none';
	dogPics.style.display = 'block';
	slothPics.style.display = 'none';
	pigPics.style.display = 'none';
	penguinPics.style.display = 'none';
	marmotPics.style.display = 'none';
	dog1.style.display = 'none';
	dog2.style.display = 'none';
	dog3.style.display = 'none';
	dog4.style.display = 'none';
	dog5.style.display = 'block';
	dog6.style.display = 'none';
});

$('#dogIcon4').click(function() {
	console.log('There was a click');
	midPage.style.display = 'none';
	bottomPage.style.display = 'block';
	fishPics.style.display = 'none';
	dogPics.style.display = 'block';
	slothPics.style.display = 'none';
	pigPics.style.display = 'none';
	penguinPics.style.display = 'none';
	marmotPics.style.display = 'none';
	dog1.style.display = 'none';
	dog2.style.display = 'none';
	dog3.style.display = 'none';
	dog4.style.display = 'block';
	dog5.style.display = 'none';
	dog6.style.display = 'none';
});

$('#dogIcon3').click(function() {
	console.log('There was a click');
	midPage.style.display = 'none';
	bottomPage.style.display = 'block';
	fishPics.style.display = 'none';
	dogPics.style.display = 'block';
	slothPics.style.display = 'none';
	pigPics.style.display = 'none';
	penguinPics.style.display = 'none';
	marmotPics.style.display = 'none';
	dog1.style.display = 'none';
	dog2.style.display = 'none';
	dog3.style.display = 'block';
	dog4.style.display = 'none';
	dog5.style.display = 'none';
	dog6.style.display = 'none';
});

$('#dogIcon2').click(function() {
	console.log('There was a click');
	midPage.style.display = 'none';
	bottomPage.style.display = 'block';
	fishPics.style.display = 'none';
	dogPics.style.display = 'block';
	slothPics.style.display = 'none';
	pigPics.style.display = 'none';
	penguinPics.style.display = 'none';
	marmotPics.style.display = 'none';
	dog1.style.display = 'none';
	dog2.style.display = 'block';
	dog3.style.display = 'none';
	dog4.style.display = 'none';
	dog5.style.display = 'none';
	dog6.style.display = 'none';
});

$('#dogIcon1').click(function() {
	console.log('There was a click');
	midPage.style.display = 'none';
	bottomPage.style.display = 'block';
	fishPics.style.display = 'none';
	dogPics.style.display = 'block';
	slothPics.style.display = 'none';
	pigPics.style.display = 'none';
	penguinPics.style.display = 'none';
	marmotPics.style.display = 'none';
	dog1.style.display = 'block';
	dog2.style.display = 'none';
	dog3.style.display = 'none';
	dog4.style.display = 'none';
	dog5.style.display = 'none';
	dog6.style.display = 'none';
});

$('.sloths').click(function(e) {
	$('button').removeClass('active');
	$(e.target).addClass('active');
	pigsAlbum.style.display = 'none';
	dogsAlbum.style.display = 'none';
	fishesAlbum.style.display = 'none';
	marmotsAlbum.style.display = 'none';
	slothsAlbum.style.display = 'block';
	penguinsAlbum.style.display = 'none';
});

$('.marmots').click(function(e) {
	$('button').removeClass('active');
	$(e.target).addClass('active');
	pigsAlbum.style.display = 'none';
	dogsAlbum.style.display = 'none';
	fishesAlbum.style.display = 'none';
	marmotsAlbum.style.display = 'block';
	slothsAlbum.style.display = 'none';
	penguinsAlbum.style.display = 'none';
});

$('.fishes').click(function(e) {
	$('button').removeClass('active');
	$(e.target).addClass('active');
	pigsAlbum.style.display = 'none';
	dogsAlbum.style.display = 'none';
	fishesAlbum.style.display = 'block';
	marmotsAlbum.style.display = 'none';
	slothsAlbum.style.display = 'none';
	penguinsAlbum.style.display = 'none';
});

$('.dogs').click(function(e) {
	$('button').removeClass('active');
	$(e.target).addClass('active');
	pigsAlbum.style.display = 'none';
	dogsAlbum.style.display = 'block';
	fishesAlbum.style.display = 'none';
	marmotsAlbum.style.display = 'none';
	slothsAlbum.style.display = 'none';
	penguinsAlbum.style.display = 'none';
});

$('.pigs').click(function(e) {
	$('button').removeClass('active');
	$(e.target).addClass('active');
	pigsAlbum.style.display = 'block';
	dogsAlbum.style.display = 'none';
	fishesAlbum.style.display = 'none';
	marmotsAlbum.style.display = 'none';
	slothsAlbum.style.display = 'none';
	penguinsAlbum.style.display = 'none';
});

$('.penguins').click(function(e) {
	$('button').removeClass('active');
	$(e.target).addClass('active');
	pigsAlbum.style.display = 'none';
	dogsAlbum.style.display = 'none';
	fishesAlbum.style.display = 'none';
	marmotsAlbum.style.display = 'none';
	slothsAlbum.style.display = 'none';
	penguinsAlbum.style.display = 'block';
});

$('#allPenguins').click(function() {
	console.log('There was a click');
	topPage.style.display = 'none';
	midPage.style.display = 'block';
	$('.penguins').addClass('active');
	photoList.style.display = 'none';
	penguinsAlbum.style.display = 'block';
});

$('#allPigs').click(function() {
	console.log('There was a click');
	topPage.style.display = 'none';
	midPage.style.display = 'block';
	$('.pigs').addClass('active');
	photoList.style.display = 'none';
	pigsAlbum.style.display = 'block';
});

$('#allDogs').click(function() {
	console.log('There was a click');
	topPage.style.display = 'none';
	midPage.style.display = 'block';
	$('.dogs').addClass('active');
	photoList.style.display = 'none';
	dogsAlbum.style.display = 'block';
});

$('#allFishes').click(function() {
	console.log('There was a click');
	topPage.style.display = 'none';
	midPage.style.display = 'block';
	$('.fishes').addClass('active');
	photoList.style.display = 'none';
	fishesAlbum.style.display = 'block';
});

$('#allMarmots').click(function() {
	console.log('There was a click');
	topPage.style.display = 'none';
	midPage.style.display = 'block';
	$('.marmots').addClass('active');
	photoList.style.display = 'none';
	marmotsAlbum.style.display = 'block';
});

$('#allSloths').click(function() {
	console.log('There was a click');
	topPage.style.display = 'none';
	midPage.style.display = 'block';
	$('.sloths').addClass('active');
	photoList.style.display = 'none';
	slothsAlbum.style.display = 'block';
});