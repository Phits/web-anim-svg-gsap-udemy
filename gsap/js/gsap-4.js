var masterTL = new TimelineMax();

masterTL
    .add('begining')
    .to('#tri1', 1, {
    	x: 600
    })
    .add('endTri1')
    .to('#tri2', 1, {
    	y: 600
    }, 'endTri1-=0.5')
    .to('#tri3', 1, {
    	x: '-=600',
    	onComplete: showBigLogo,
    	onCompleteParams: ['orange']
    }, '-=0.5')

  function showBigLogo(color) {
  	var bigT = document.querySelector('#bigTri');
  
    TweenMax.set(bigT, {
    	autoAlpha: 1,
    	fill: color
    });
  }