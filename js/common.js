$(function () {
	var $page = $('html, body');
	$('a[href*="#"]' && !"a[href='#modal-franchise']").click(function () {
		$page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top - 67
		}, 800);
		return false;
	});

});





$(".uk-inline").click(function () {
	$(".cbp-af-header").hide();
});
$("button[class='uk-lightbox-toolbar-icon']").click(function () {
	$(".cbp-af-header").show();
});
$("a[href='#modal-franchise']").click(function () {
	$(".cbp-af-header").hide();
});
$(".box-content-button").click(function () {
	$(".cbp-af-header").hide();
});

$(".uk-modal-close").click(function () {
	$(".cbp-af-header").show();
});
$(".uk-close").click(function () {
	$(".cbp-af-header").show();
});
