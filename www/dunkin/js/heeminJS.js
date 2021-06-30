
$(document).ready(function() {

$(".hover").mouseleave(
	function () {
		$(this).removeClass("hover");
	}
);

$(".menuButton").click(function(){
	$("#hd #myMenu_Moblie").show();
});

	$('#fullpage').fullpage({
		afterLoad: function(anchorLink, index){
			 if(index== '3'){
					$('.summerMenu h2').addClass('animate__bounce');
			 }
			 if(index== '2'){
					$('.event_ul').addClass('animate__bounce');
			 }
		},
		//options here
    sectionsColor: ['', '', '#fff7da', 'rgb(255 222 122)','#72bdf3'],
    // navigation: true,
  	// navigationPosition: 'left',
    // navigationTooltips: ['첫번째슬라이드', '두번째슬라이드', '세번째슬라이드', '네번째슬라이드'],
  	showActiveTooltip: true,
		slidesNavigation: true,
		slidesNavPosition: 'bottom',
    sectionSelector:'.fullSection',
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
		menu: '#myMenu',
		recordHistory: true,
	});

});
