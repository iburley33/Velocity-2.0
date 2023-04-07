const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector(".username-input").value.trim();
  const password = document.querySelector(".password-input").value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/");
    } else {
      alert("Your credentials were not accepted. Please try again.");
    }
  }
};

const redirectCreate = (event) => {
  event.preventDefault();
  console.log("clicked")
  document.location.replace("/newuser");
  console.log("got here")
}

document
  .getElementById("login-submit-btn")
  .addEventListener("click", loginFormHandler);

document
  .getElementById("create-account-btn")
  .addEventListener("click", redirectCreate);
