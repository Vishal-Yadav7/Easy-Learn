function selectBox(selectedOption) {
    // Remove 'selected' class from all boxes
    var boxes = document.querySelectorAll('.box');
    boxes.forEach(function(box) {
        box.classList.remove('selected');
        box.style.backgroundColor = ''; // Reset background color
    });

    // Check if the selected option is correct
    if (selectedOption === 1) {
        var selectedBox = document.querySelector('.box:nth-child(' + selectedOption + ')');
        selectedBox.classList.add('selected');
        selectedBox.style.backgroundColor = 'rgb(0, 168, 107)';
        confetti({
            particleCount: 100,
            startVelocity: 30,
            spread: 360,
            origin: {
              x: Math.random(),
              y: Math.random() - 0.2
            }
          });
          var duration = 0.15 * 1000;
var end = Date.now() + duration;

(function frame() {
  // launch a few confetti from the left edge
  confetti({
    particleCount: 7,
    angle: 60,
    spread: 55,
    origin: { x: 0 }
  });
  // and launch a few from the right edge
  confetti({
    particleCount: 7,
    angle: 120,
    spread: 55,
    origin: { x: 1 }
  });

  // keep going until we are out of time
  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
}());
        document.getElementById('continueButton').style.display = 'block'; // Show continue button
    } else {
        var incorrectBox = document.querySelector('.box:nth-child(' + selectedOption + ')');
        incorrectBox.classList.add('selected');
        incorrectBox.style.backgroundColor = 'rgb(255, 36, 0)';
        document.getElementById('continueButton').style.display = 'none'; // Hide continue button
    }
   
}
