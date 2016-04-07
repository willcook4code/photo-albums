import $ from 'jquery';
//Return to mid page.~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$('#marmotReturn').click(e => {
	$('.bottomPage').hide();
	$('.midPage').show();
	$('.albumButts').removeClass('active');
	$('.marmots').addClass('active');
});
$('#penguinReturn').click(e => {
	$('.bottomPage').hide();
	$('.midPage').show();
	$('.albumButts').removeClass('active');
	$('.penguins').addClass('active');
});
$('#pigReturn').click(e => {
	$('.bottomPage').hide();
	$('.midPage').show();
	$('.albumButts').removeClass('active');
	$('.pigs').addClass('active');
});
$('#slothReturn').click(e => {
	$('.bottomPage').hide();
	$('.midPage').show();
	$('.albumButts').removeClass('active');
	$('.sloths').addClass('active');
});
$('#fishReturn').click(e => {
	$('.bottomPage').hide();
	$('.midPage').show();
	$('.albumButts').removeClass('active');
	$('.fishes').addClass('active');
});
$('#dogReturn').click(e => {
	$('.bottomPage').hide();
	$('.midPage').show();
	$('.albumButts').removeClass('active');
	$('.dogs').addClass('active');
});
//Large view - Marmots~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$('.photo').click(e => {
	console.log(e.target);
	console.log($(e.target).data("album-id"));
	$('.midPage').hide();
	$('.bottomPage').show();
	$('.bigView').hide();
	$(`.${$(e.target).data("album-id")}Pics`).show();
	$('.pic').hide();
	$(`#${$(e.target).data("album-id")}6`).show();
});
// $('#marmotIcon5').click(e => {
// 	$('.midPage').hide();
// 	$('.bottomPage').show();
// 	$('.bigView').hide();
// 	$('.marmotPics').show();
// 	$('.pic').hide();
// 	$('#marmot5').show();
// });
// $('#marmotIcon4').click(e => {
// 	$('.midPage').hide();
// 	$('.bottomPage').show();
// 	$('.bigView').hide();
// 	$('.marmotPics').show();
// 	$('.pic').hide();
// 	$('#marmot4').show();
// });
// $('#marmotIcon3').click(e => {
// 	$('.midPage').hide();
// 	$('.bottomPage').show();
// 	$('.bigView').hide();
// 	$('.marmotPics').show();
// 	$('.pic').hide();
// 	$('#marmot3').show();
// });
// $('#marmotIcon2').click(e => {
// 	$('.midPage').hide();
// 	$('.bottomPage').show();
// 	$('.bigView').hide();
// 	$('.marmotPics').show();
// 	$('.pic').hide();
// 	$('#marmot2').show();
// });
// $('#marmotIcon1').click(e => {
// 	$('.midPage').hide();
// 	$('.bottomPage').show();
// 	$('.bigView').hide();
// 	$('.marmotPics').show();
// 	$('.pic').hide();
// 	$('#marmot1').show();
// });
//Large view - Penguins~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$('#penguinIcon6').click(e => {
	$('.midPage').hide();
	$('.bottomPage').show();
	$('.bigView').hide();
	$('.penguinPics').show();
	$('.pic').hide();
	$('#penguin6').show();
});
$('#penguinIcon5').click(e => {
	$('.midPage').hide();
	$('.bottomPage').show();
	$('.bigView').hide();
	$('.penguinPics').show();
	$('.pic').hide();
	$('#penguin5').show();
});
$('#penguinIcon4').click(e => {
	$('.midPage').hide();
	$('.bottomPage').show();
	$('.bigView').hide();
	$('.penguinPics').show();
	$('.pic').hide();
	$('#penguin4').show();
});
$('#penguinIcon3').click(e => {
	$('.midPage').hide();
	$('.bottomPage').show();
	$('.bigView').hide();
	$('.penguinPics').show();
	$('.pic').hide();
	$('#penguin3').show();
});
$('#penguinIcon2').click(e => {
	$('.midPage').hide();
	$('.bottomPage').show();
	$('.bigView').hide();
	$('.penguinPics').show();
	$('.pic').hide();
	$('#penguin2').show();
});
$('#penguinIcon1').click(e => {
	$('.midPage').hide();
	$('.bottomPage').show();
	$('.bigView').hide();
	$('.penguinPics').show();
	$('.pic').hide();
	$('#penguin1').show();
});
//Large view - Pigs~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$('#pigIcon6').click(e => {
	$('.midPage').hide();
	$('.bottomPage').show();
	$('.bigView').hide();
	$('.pigPics').show();
	$('.pic').hide();
	$('#pig6').show();
});
$('#pigIcon5').click(e => {
	$('.midPage').hide();
	$('.bottomPage').show();
	$('.bigView').hide();
	$('.pigPics').show();
	$('.pic').hide();
	$('#pig5').show();
});
$('#pigIcon4').click(e => {
	$('.midPage').hide();
	$('.bottomPage').show();
	$('.bigView').hide();
	$('.pigPics').show();
	$('.pic').hide();
	$('#pig4').show();
});
$('#pigIcon3').click(e => {
	$('.midPage').hide();
	$('.bottomPage').show();
	$('.bigView').hide();
	$('.pigPics').show();
	$('.pic').hide();
	$('#pig3').show();
});
$('#pigIcon2').click(e => {
	$('.midPage').hide();
	$('.bottomPage').show();
	$('.bigView').hide();
	$('.pigPics').show();
	$('.pic').hide();
	$('#pig2').show();
});
$('#pigIcon1').click(e => {
	$('.midPage').hide();
	$('.bottomPage').show();
	$('.bigView').hide();
	$('.pigPics').show();
	$('.pic').hide();
	$('#pig1').show();
});
//Large view - Sloths~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$('#slothIcon6').click(e => {
	$('.midPage').hide();
	$('.bottomPage').show();
	$('.bigView').hide();
	$('.slothPics').show();
	$('.pic').hide();
	$('#sloth6').show();
});
$('#slothIcon5').click(e => {
	$('.midPage').hide();
	$('.bottomPage').show();
	$('.bigView').hide();
	$('.slothPics').show();
	$('.pic').hide();
	$('#sloth5').show();
});
$('#slothIcon4').click(e => {
	$('.midPage').hide();
	$('.bottomPage').show();
	$('.bigView').hide();
	$('.slothPics').show();
	$('.pic').hide();
	$('#sloth4').show();
});
$('#slothIcon3').click(e => {
	$('.midPage').hide();
	$('.bottomPage').show();
	$('.bigView').hide();
	$('.slothPics').show();
	$('.pic').hide();
	$('#sloth3').show();
});
$('#slothIcon2').click(e => {
	$('.midPage').hide();
	$('.bottomPage').show();
	$('.bigView').hide();
	$('.slothPics').show();
	$('.pic').hide();
	$('#sloth2').show();
});
$('#slothIcon1').click(e => {
	$('.midPage').hide();
	$('.bottomPage').show();
	$('.bigView').hide();
	$('.slothPics').show();
	$('.pic').hide();
	$('#sloth1').show();
});
//Large view - Fish~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$('#fishIcon6').click(e => {
	$('.midPage').hide();
	$('.bottomPage').show();
	$('.bigView').hide();
	$('.fishPics').show();
	$('.pic').hide();
	$('#fish6').show();
});
$('#fishIcon5').click(e => {
	$('.midPage').hide();
	$('.bottomPage').show();
	$('.bigView').hide();
	$('.fishPics').show();
	$('.pic').hide();
	$('#fish5').show();
});
$('#fishIcon4').click(e => {
	$('.midPage').hide();
	$('.bottomPage').show();
	$('.bigView').hide();
	$('.fishPics').show();
	$('.pic').hide();
	$('#fish4').show();
});
$('#fishIcon3').click(e => {
	$('.midPage').hide();
	$('.bottomPage').show();
	$('.bigView').hide();
	$('.fishPics').show();
	$('.pic').hide();
	$('#fish3').show();
});
$('#fishIcon2').click(e => {
	$('.midPage').hide();
	$('.bottomPage').show();
	$('.bigView').hide();
	$('.fishPics').show();
	$('.pic').hide();
	$('#fish2').show();
});
$('#fishIcon1').click(e => {
	$('.midPage').hide();
	$('.bottomPage').show();
	$('.bigView').hide();
	$('.fishPics').show();
	$('.pic').hide();
	$('#fish1').show();
});
//Large view - Dogs~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$('#dogIcon6').click(e => {
	$('.midPage').hide();
	$('.bottomPage').show();
	$('.bigView').hide();
	$('.dogPics').show();
	$('.pic').hide();
	$('#dog6').show();
});
$('#dogIcon5').click(e => {
	$('.midPage').hide();
	$('.bottomPage').show();
	$('.bigView').hide();
	$('.dogPics').show();
	$('.pic').hide();
	$('#dog5').show();
});
$('#dogIcon4').click(e => {
	$('.midPage').hide();
	$('.bottomPage').show();
	$('.bigView').hide();
	$('.dogPics').show();
	$('.pic').hide();
	$('#dog4').show();
});
$('#dogIcon3').click(e => {
	$('.midPage').hide();
	$('.bottomPage').show();
	$('.bigView').hide();
	$('.dogPics').show();
	$('.pic').hide();
	$('#dog3').show();
});
$('#dogIcon2').click(e => {
	$('.midPage').hide();
	$('.bottomPage').show();
	$('.bigView').hide();
	$('.dogPics').show();
	$('.pic').hide();
	$('#dog2').show();
});
$('#dogIcon1').click(e => {
	$('.midPage').hide();
	$('.bottomPage').show();
	$('.bigView').hide();
	$('.dogPics').show();
	$('.pic').hide();
	$('#dog1').show();
});
//Toggle through Mid Page~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const click = e => {
	console.log(e.target);
	console.log($(e.target).data('album-id'));
	var albumId = `#${$(e.target).data("album-id").toLowerCase()}Album`
	$('button').removeClass('active');
	$(e.target).toggleClass('active');
	$('.photoList').hide();
	$('.topPage').hide();
	$('.midPage').show();
	$(`.all${$(e.target).data("album-id")}`).addClass('active');
	$(albumId).show();
}
$('.albumButts button').click(click);
$('.allView div').click(click);