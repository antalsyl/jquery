var imgs = $(".preview");
var msg = "Hover over an image below."
for (let i = 0; i < imgs.length;i++){
	console.log(i);
	$(imgs[i]).mouseover(function() {
	 	$('#image').css('backgroundImage',"url("+imgs[i].src+")");
	 	$('#image').html(imgs[i].alt);
	 	console.log('mouseover')
	 });

	 $(imgs[i]).focus(function() {
	 	$('#image').css('backgroundImage',"url("+imgs[i].src+")");
	 	$('#image').html(imgs[i].alt);
	 	console.log('focus')
	 });

	 $(imgs[i]).mouseout(function() {
	 	$('#image').css('backgroundImage', "url('')");
	 	$('#image').html(msg);
	 	console.log('mouseout')
	 });

	 $(imgs[i]).blur(function() {
	 	$('#image').css('backgroundImage',"url('')");
	 	$('#image').html(msg);
	 	console.log('blur')
	 });
	
}
