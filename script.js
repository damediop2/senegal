const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');
const videoPlayer = document.getElementById('video-player');

loginForm.addEventListener('submit', e => {
  e.preventDefault();
  const password = loginForm.elements.password.value;
  if (password === 'moitiere') {
    errorMessage.textContent = '';
    videoPlayer.innerHTML = `
      <iframe src="https://drive.google.com/file/d/1kM9d94CGFfFEVkyuD8j-9O9X8HtZ7xAK/preview" width="640" height="480" allow="autoplay"></iframe>
      <iframe src="https://drive.google.com/file/d/12QNr5vQcl9SHcWfmiz0OfGfDl1XN6HlU/preview" width="640" height="480" allow="autoplay"></iframe>
    `;
  } else {
    errorMessage.textContent = 'Incorrect password';
  }
});
