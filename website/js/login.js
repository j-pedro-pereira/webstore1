function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form_message");

    messageElement.textContent = message;
    messageElement.classList.remove("form_message-success", "form_message-error");
    messageElement.classList.add(`form_message-${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form_input-error");
    inputElement.parentElement.querySelector(".form_input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form_input--error");
    inputElement.parentElement.querySelector(".for__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#createLogin");
    const createAccountForm = document.querySelector("#createAccount")

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.remove("form-hidden");
    });



    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form-hidden");
        createAccountForm.classList.add("form-hidden");
    });
});


document.getElementById("createAccountButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Get the form inputs
    const username = document.getElementById("createAccountUsername").value;
    const password = document.getElementById("createAccountPassword").value;
  
    // Create the request body object
    const requestBody = {
      username: username,
      password: password
    };
  
    // Send an HTTP POST request to the register route
    fetch("/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response data or perform any necessary actions
        console.log(data);
        // Redirect to a new page or show a success message to the user
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
        // Display an error message to the user
      });
  });
  
  document.getElementById("loginButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Get the form inputs
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
  
    // Create the request body object
    const requestBody = {
      username: username,
      password: password
    };
  
    // Send an HTTP POST request to the login route
    fetch("/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    })
      .then(response => response.json())
      .then(data => {
        if (data.userExists) {
          // User exists, redirect to webstore.html
          window.location.href = "webstore.html";
        } else {
          // User does not exist, display an error message
          console.log("User does not exist!");
          // Display an error message to the user
        }
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
        // Display an error message to the user
      });
  });
  
  fetch("/api/products/allProduct")
      .then(response => response.json())
      .then(products => {
        const table1 = document.getElementById("table1");
        let productData = "";
        products.forEach(product => {
          productData += `<h2>${product.title}</h2><p>${product.description}</p>`;
        });
        table1.innerHTML = productData;
      })
      .catch(error => {
        console.error(error);
        // Handle any errors
      });