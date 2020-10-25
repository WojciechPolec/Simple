// Script carousel #NEWS
	$(document).ready(function() {
		$('.news').slick({
			dots: true,
			infinite: false,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
				{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
				},
				{
				breakpoint: 900,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
				},
				{
				breakpoint: 750,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
				}
			]
			});
		});

// Script carousel #CONTACT .BRANDS	
	$(document).ready(function() {
		$('.brands').slick({
			dots: true,
			infinite: false,
			speed: 300,
			slidesToShow: 5,
			slidesToScroll: 1,
			responsive: [
				{
				breakpoint: 765,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
				},
				{
				breakpoint: 750,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
				},
				{
				breakpoint: 730,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
				}
			]
			});
		});

// Script carousel #CONTACT .INFORMATION	
$(document).ready(function() {
	$('.information').slick({
		dots: true,
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
			breakpoint: 765,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
			},
			{
			breakpoint: 750,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
			},
			{
			breakpoint: 730,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
			}
		]
		});
	});

// Script AutoPlay Main Page
	$(document).ready(function() {
		$('.autoplay').slick({
			dots: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
		});
	});

// Script when scrolling SidebarContent
var sidebarcontent = document.getElementById('sidebarcontent')
,offset = sidebarcontent.getBoundingClientRect()
,toScroll = offset.top + offset.height - offset.height / 2;

addEventListener('scroll', function () {
  if(window.scrollY > toScroll)
    sidebarcontent.classList.add('scrollingsidebar')
  else
    sidebarcontent.classList.remove('scrollingsidebar');
}, false);

// Script when scrolling Triangle
var triangle = document.getElementById('triangle')
,offset = triangle.getBoundingClientRect()
,toScroll = offset.top + offset.height - offset.height / 0.5;

addEventListener('scroll', function () {
  if(window.scrollY > toScroll)
    triangle.classList.add('scrollingtriangle')
  else
    triangle.classList.remove('scrollingtriangle');
}, false);



/*
  $(document).ready(function(){
	$(window).resize(function(){
		if ($(document).width() < 840) {
			$('div').removeAttr('one');
			$('div').removeAttr('two');
			$('div').removeAttr('three');
			$('div').removeAttr('four');
			$('div').removeAttr('five');
			alert("Hello! I am an alert box!!");
		} else {
			$('div').addAttr('one');
			$('div').addAttr('two');
			$('div').addAttr('three');
			$('div').addAttr('four');
			$('div').addAttr('five');
		}
	});
  });

  document.addEventListener("resize", function() {
	if (document.innerWidth < 840) resize.classList.remove("grid-container");
  });
  */