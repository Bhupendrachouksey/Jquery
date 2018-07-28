$(document).ready(()=>
{
 alert("Documents is ready please press 'OK'")
 $(".image").after("Some extra text inserted.")
 
 
 
 $(".accordion").click(function () {

        
          $(this).next().toggle(700)
          
 });
 //handle the click of the button
 
 $("#performSomeAction").click(() =>
 {
 	$(".para1").addClass('big-font');
 }) //end button click
 
 $("#newElement").dblclick(() => {
 		$(".para2").css("color", "red");
 })
 
 $("#some-image").hover(() =>
 {
 		$(".my-image").hide("5000");
   ;
 })
  $("#some-image1").hover(() =>
 {
 		;
    $(".my-image1").hide("5000");
   
 })
  $("#some-image2").hover(() =>
 {
 		;
    $(".my-image2").hide("5000");
   
 })
$("input").focus(function(){
		$(this).addClass("colored-border")
});

$("input").focusout(function(){
		$(this).removeClass("colored-border")
});

$("form").submit((ev) =>{
		ev.preventDefault();
		alert("User logged in successfully")
})
});
