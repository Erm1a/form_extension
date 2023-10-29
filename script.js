const submitButton = document.getElementById("submit-button");
const successMessage = document.getElementById("successMessage");
const errorMessage = document.getElementById("errorMessage");

submitButton.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the form from submitting and the page from refreshing
  submitForm();
});

function submitForm() {
  const issue = document.getElementById("issue").value;

  // Replace 'dummy-endpoint' with your actual endpoint URL
  fetch('dummy-endpoint', {
    method: 'POST',
    body: JSON.stringify({ issue }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (response.ok) {
        displayMessage(successMessage);
      } else {
        displayMessage(errorMessage);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      displayMessage(errorMessage);
    });
}

function displayMessage(message) {
  message.style.display = 'block';

  setTimeout(() => {
    message.style.display = 'none';
  }, 3000); // Hide message after 3 seconds
}
