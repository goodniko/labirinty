$(function () {
	var $page = $('html, body');
	$('a[href*="#"]').click(function () {
		$page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top - 67
		}, 800);
		return false;
	});
});

$(".uk-inline").click(function () {
	$(".cbp-af-header").hide();
	// document.getElementsByClassName('cbp-af-header').style.display = 'none';
});
$("button[class='uk-lightbox-toolbar-icon']").click(function () {
	$(".cbp-af-header").show();
	// document.getElementsByClassName('cbp-af-header').style.display = 'block';
});
$("a[href='#modal-overflow']").click(function () {
	$(".cbp-af-header").hide();
	// document.getElementsByClassName('cbp-af-header').style.display = 'none';
});
$(".uk-modal-close").click(function () {
	$(".cbp-af-header").show();
	// document.getElementsByClassName('cbp-af-header').style.display = 'block';
});
$(".uk-close").click(function () {
	$(".cbp-af-header").show();
	// document.getElementsByClassName('cbp-af-header').style.display = 'block';
});
