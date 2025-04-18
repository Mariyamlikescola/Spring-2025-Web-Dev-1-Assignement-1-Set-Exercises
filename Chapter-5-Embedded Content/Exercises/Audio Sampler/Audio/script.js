document.addEventListener("DOMContentLoaded", function () {
    // Selecting all buttons that play audio clips
    const audioButtons = document.querySelectorAll('.Audios');
  
    // Looping through each button to attach click event handlers
    audioButtons.forEach(button => {
      button.addEventListener('click', function () {
        // Retrieve the audio file name from the button's data attribute
        const audioFile = this.getAttribute('data-audio');
  
        // Checking if an audio file is specified
        if (audioFile) {
          // Create a new Audio object with the file path
          const audioClip = new Audio(audioFile);
          
          // Trying to play the audio clip
          audioClip.play().catch(error => {
            // Log a friendly error message if playback fails
            console.error("Sorry, we couldn't play that sound:", error);
          });
        } else {
          // Log a warning if no audio file is found
          console.warn("Oops! No audio file specified for this button.");
        }
      });
    });
  });