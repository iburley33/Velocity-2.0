const signupFormHandler = async (event) => {
        event.preventDefault();
      
        const name = document.querySelector('.new-name-input').value.trim();
        const username = document.querySelector('.new-username-input').value.trim();
        const pass = document.querySelector('.new-password-input').value.trim();
      
        if (name && username && password) {
          const response = await fetch('/api/users', {  //Ask roman about this fetch route
            method: 'POST',
            body: JSON.stringify({ name, username, pass }),
            headers: { 'Content-Type': 'application/json' }, // This line
          });
      
          if (response.ok) {
            document.location.replace('/'); // db query?
          } else {
            alert(response.statusText);
          }
        }
    };

  document
  .querySelector('.new-user-div')
  .addEventListener('submit', signupFormHandler);
