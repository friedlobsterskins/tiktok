$(window).on("load", function(){$("#loading").fadeOut(200);});
if(window.history.replaceState){
window.history.replaceState(null, null, window.location.href);}
$(document).ready(function(){$(".menu").click(function(){$("#show_tkfollow").show()}),$(".menu7").click(function(){$("#show_tcomments").show()}),$(".menu8").click(function(){$("#show_tcomments_likes").show()}),$(".menu2").click(function(){$("#show_theart").show()}),$(".menu3").click(function(){$("#show_tshare").show()}),$(".menu4").click(function(){$("#show_tviews").show()}),$(".menu5").click(function(){$("#show_fblikes").show()}),$(".menu").click(function(){$(".colsmenu").hide()}),$(".menu2").click(function(){$(".colsmenu").hide()}),$(".menu7").click(function(){$(".colsmenu").hide()}),$(".menu8").click(function(){$(".colsmenu").hide()}),$(".menu3").click(function(){$(".colsmenu").hide()}),$(".menu4").click(function(){$(".colsmenu").hide()}),$(".menu5").click(function(){$(".colsmenu").hide()})});
$(".menugoster").click(function() {
$(".colsmenu").show()
$("#show_theart").hide()
$("#show_tkfollow").hide()
$("#show_tcomments_likes").hide()
$("#show_tviews").hide()
})
$(document).on("click","#toast-container .toast",function(){$(this).fadeOut(function(){$(this).remove()})});
function comviews() {
$('.w1f').hide(),$('#w2f').show();
}
function comhearts() {
$('.w1a').hide(),$('#w2a').show();
}
function comthearts() {
$('.w1c').hide(),$('#w2c').show();
}
function comfollowers() {
$('.w1e').hide(),$('#w2e').show();
}