// TweenMax.to('#tri', 1, {
// 	x: 600,
// 	y: 600,
// 	ease: Elastic.easeInOut
// })

// TweenMax.to('#tri', 1, {
// 	x:600,
// });
// TweenMax.to('#tri', 1, {
// 	y:600,
// 	delay: 1
// })

// TweenMax.from('#tri', 1, {
// 	x: 850
// });

TweenMax.fromTo('#tri', 1, {
	x: 0,
	y: 600,
	autoAlpha: 1
},
{
	x: 600,
	y: 600,	
	autoAlpha: 0.2
});