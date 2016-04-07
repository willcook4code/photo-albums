import $ from 'jquery';
//Return to mid page.~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$('.albumReturn').click(e => {
	$('.bottomPage').hide();
	$('.midPage').show();
});
//Large view ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$('.photo').click(e => {
	console.log(e.target);
	console.log($(e.target).data("album-id"));
	$('.midPage').hide();
	$('.bottomPage').show();
	$('.bigView').hide();
	$(`.${$(e.target).data("album-id")}Pics`).show();
	$('.pic').hide();
	$(`#${$(e.target).data("album-id")}${$(e.target).data("number")}`).show();
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