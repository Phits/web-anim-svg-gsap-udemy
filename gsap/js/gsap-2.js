
// TweenMax.to ('#tri1', 1, {
// 	y:600
// });

// TweenMax.to ('#tri2', 1, {
// 	y:600,
// 	delay: 0.25
// });

// TweenMax.to ('#tri3', 1, {
// 	y:600,
// 	delay: 0.5
// })

// TweenMax.to(['#tri1, #tri2, #tri3'], 1, {
// 	y: 600
// })

// TweenMax.staggerTo(['#tri1', '#tri2', '#tri3'], 1, {
// 	y: 600
// }, 0.25);

// TweenMax.staggerFrom(['#tri1', '#tri2', '#tri3'], 1, {
// 	y: 600
// }, 0.25);

TweenMax.staggerFromTo(['#tri1', '#tri2', '#tri3'], 1, {
	y: 350
},
{
	y: 600,
	ease: Bounce.easeOut
}, 0.25);