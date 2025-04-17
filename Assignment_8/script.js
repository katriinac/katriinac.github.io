$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){
          window.location.hash = hash;
        });
      } 
    });
  })
  $('#imageLink').click(function() {
    $('#pressMessage').hide();
  });
  $('#press').on('hidden.bs.collapse', function () {
    $('#pressMessage').show();
  });

  $('#press').on('shown.bs.collapse', function () {
    $('#pressMessage').hide();
  });
  function sendEmail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("comments").value;
  
    const subject = encodeURIComponent("Contact Form Message from " + name);
    const body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message);
  
    window.location.href = "mailto:katriina.chindjapin@student.laurea.fi?subject=" + subject + "&body=" + body;
  }