const helloWorld = document.querySelector('.hello-world');

helloWorld.addEventListener('click', () => {
  // Play a sound effect when clicked
  const audio = new Audio('path/to/spaceship-sound.mp3'); // Replace with your sound path
  audio.play();
});
