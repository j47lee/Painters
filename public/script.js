$(function(){

  $('h1').addClass('makeRed');
  $(':text').addClass('makeRed');

  //check if supported and set MIME to prevent errors
  $.ajax({
    beforeSend: function(xhr) {
      if (xhr.overrideMimeType) {
        xhr.overrideMimeType("application/json");
      }
    }
  });

  //collect data from data.json
  var artistsList = '';
  function loadArtists(){

    $.getJSON('assets/data.json')
        .done(function(data){
          for (var i = 0; i < data.artists.length; i++) {
            artistsList += '<li><a id="'+ data.artists[i].initials + '" href="' + data.artists[i].initials + '">' + data.artists[i].name + '</a></li>';
          }
          $('#artists').html(artistsList);

          //selecting artist
          $('body').on('click', '#artists a', function(e){
            e.preventDefault();
            for (var i = 0; i < data.artists.length; i++) {
              if (this.id === data.artists[i].initials) {
                $('#description').text(data.artists[i].description)
              }
            }
          });

        })
        .fail(function(){
          $('#leftCol').html('Sorry, we were unable to load the artists at this time.');
        });

  } //end loadArtists function
  loadArtists();

}); // end IIFE
