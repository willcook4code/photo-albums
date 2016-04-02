var topPage = document.querySelector('.topPage');
var midPage = document.querySelector('.midPage');

$('#allDogs').click(function() {
	console.log('There was a click');
	topPage.style.display = 'none';
	midPage.style.display = 'block';
	$('.dogs').addClass('active');
});