var topPage = document.querySelector('.topPage');
var midPage = document.querySelector('.midPage');
var photoList = document.querySelector('.photoList');
var dogsAlbum = document.getElementById('dogsAlbum');
var fishesAlbum = document.getElementById('fishesAlbum');
var marmotsAlbum = document.getElementById('marmotsAlbum');
var slothsAlbum = document.getElementById('slothsAlbum');
var pigsAlbum = document.getElementById('pigsAlbum');
var penguinsAlbum = document.getElementById('penguinsAlbum');

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