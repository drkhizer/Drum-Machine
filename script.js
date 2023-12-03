$(document).ready(function () {
  $('.drum-pad').on('click', function () {
    const dataKey = $(this).data('key');
    playSound(dataKey);
  });

  $(document).on('keydown', function (event) {
    const key = event.key.toUpperCase();
    const soundId = '#' + key;
    playSound(key);
  });

  function playSound(dataKey) {
    const audio = $('#' + dataKey)[0];
    if (audio) {
      audio.currentTime = 0; // Rewind to the beginning
      audio.play();

      // Display the associated text in #display
      $('#display').text(dataKey);
    }
  }
});


