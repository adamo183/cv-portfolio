$(document).ready(function() {
  let windowWidth = $(window).width();
  let windowHeight = $(window).height();
  let lastMouseXpercentage = 0;
  let lastMouseYpercentage = 0;
  
  $(window).resize(function() {
      windowWidth = $(window).width();
      windowHeight = $(window).height();
  });

  $(document).mousemove(function(event) {
      let mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
      let mouseYpercentage = Math.round(event.pageY / windowHeight * 100);

      if (Math.abs(mouseXpercentage - lastMouseXpercentage) > 1 || Math.abs(mouseYpercentage - lastMouseYpercentage) > 1) {
          $('.radial-gradient').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #153e5a, rgb(15 23 42))');
          lastMouseXpercentage = mouseXpercentage;
          lastMouseYpercentage = mouseYpercentage;
      }
  });
});
