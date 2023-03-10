// TypeWritter section
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 5) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  
  
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

  // End of TypeWritter section
  
  
  
  setTimeout(function() {
    document.getElementById('splash-screen').style.display = 'none';
  }, 7000); // 3000 milliseconds = 3 seconds
  

window.onload = function() {
  // Get the buttons
  var button1 = document.getElementById("target");

  // Hide the buttons
  button1.style.display = "none";

  // Display the buttons after 4 seconds
  setTimeout(function() {
    button1.style.display = "block";
  }, 7000);
  
  window.onload = function() {
  // Select the loading animation element
  const loadingAnimation = document.querySelector('.loading-animation');

  // Set the duration of the animation
  const animationDuration = 7000; // 4 seconds

  // Display the loading animation
  loadingAnimation.style.display = 'block';

  // Hide the loading animation after the specified duration
  setTimeout(function() {
    loadingAnimation.style.display = 'none';
  }, animationDuration);
};
}