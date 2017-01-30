
var masterTL = new TimelineMax();

masterTL.to('#tri1', 1, {
	x: 600
})
,masterTL.to('#tri2', 1, {
	y: 600
}, '-=0.5')
.add(animateLogo3(), '-=0.5');

function animateLogo3() {
	var logo3TL = new TimelineMax();

	logo3TL.to('#tri3', 1, {
		x: '-=600'
	})

	return logo3TL;
}