// document.addEventListener("DOMContentLoaded", function () {
//     const modal = document.getElementById("destinationModal");
//     const span = document.getElementsByClassName("close")[0];
//     var savedUsername = "";
//     var savedPassword = "";

//     span.onclick = function () {
//         modal.style.display = "none";
//     };

//     window.onclick = function (event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }
//     };

//     document.querySelectorAll(".view-button").forEach((button) => {
//         button.addEventListener("click", function () {
//             const destinationId = this.getAttribute("data-id");
//             const destination = destinationsData.find((d) => d.id === destinationId);
//             if (destination) {
//                 document.getElementById("profile-pic").src = destination.images[0];
//                 document.getElementById("destination-name").textContent = destination.name;
//                 document.getElementById("tour-plan-amount").textContent = `Tour Plan Amount: ₹${destination.amount}`;
//                 document.getElementById("spot1-name").textContent = destination.spot1;
//                 document.getElementById("spot1-description").textContent = destination.description1;
//                 document.getElementById("spot1-images").innerHTML = createImageRows(destination.images1);
//                 document.getElementById("spot2-name").textContent = destination.spot2;
//                 document.getElementById("spot2-description").textContent = destination.description2;
//                 document.getElementById("spot2-images").innerHTML = createImageRows(destination.images2);
//                 modal.style.display = "block";
//             } else {
//                 console.error("Destination not found");
//             }
//         });
//     });

//     const destinationDropdown = document.getElementById("destination");
//     const destinationDetailsContainer = document.getElementById("destinationDetails");

//     destinationsData.forEach((destination) => {
//         const option = document.createElement("option");
//         option.value = destination.id;
//         option.textContent = destination.name;
//         destinationDropdown.appendChild(option);
//     });

//     destinationDropdown.addEventListener("change", function () {
//         const selectedDestinationId = this.value;
//         const selectedDestination = destinationsData.find(d => d.id === selectedDestinationId);

//         if (selectedDestination) {
//             const destinationDetailsHTML = `
//                 <h2>${selectedDestination.name}</h2>
//                 <div id="destinationDetails" class="details-container">
//                     <div id="spot1Details" class="spot-details">
//                         <h3>${selectedDestination.spot1}</h3>
//                         <div id="spot1Images"></div>
//                     </div>
//                     <div id="spot2Details" class="spot-details">
//                         <h3>${selectedDestination.spot2}</h3>
//                         <div id="spot2Images"></div>
//                     </div>
//                 </div>
//             `;

//             destinationDetailsContainer.innerHTML = destinationDetailsHTML;

//             // Populate images for spot1
//             const spot1ImagesContainer = document.getElementById('spot1Images');
//             if (selectedDestination.images1.length > 0) {
//                 const spot1Image = document.createElement('img');
//                 spot1Image.src = selectedDestination.images1[0]; // Select the first image
//                 spot1Image.classList.add('destination-image'); // Add a class to control image size
//                 spot1ImagesContainer.appendChild(spot1Image);
//             }

//             // Populate images for spot2
//             const spot2ImagesContainer = document.getElementById('spot2Images');
//             if (selectedDestination.images2.length > 0) {
//                 const spot2Image = document.createElement('img');
//                 spot2Image.src = selectedDestination.images2[0]; // Select the first image
//                 spot2Image.classList.add('destination-image'); // Add a class to control image size
//                 spot2ImagesContainer.appendChild(spot2Image);
//             }
//         }
//         else {
//             destinationDetailsContainer.innerHTML = "<p>Select a destination from the dropdown to view details.</p>";
//         }
//     });

//     // Function to open the login popup
//     function openPopup() {
//         document.getElementById("loginPopup").style.display = "block";
//     }

//     // Function to open the signup popup
//     function openSignUpPopup() {
//         document.getElementById("signupPopup").style.display = "block";
//     }

//     // Function to close the login/signup popup
//     function closePopup() {
//         const loginPopup = document.getElementById("loginPopup");
//         const signupPopup = document.getElementById("signupPopup");
//         loginPopup.style.display = "none";
//         signupPopup.style.display = "none";
//     }

//     // Event listener for the login button
//     document.getElementById("loginButton").addEventListener("click", function () {
//         openPopup();
//     });

//     // Event listener for the close button in the login popup
//     document.querySelector("#loginPopup .close").addEventListener("click", function () {
//         closePopup();
//     });

//     // Event listener for the "Create new account" link
//     document.querySelector("#loginForm a").addEventListener("click", function (event) {
//         event.preventDefault();
//         openSignUpPopup();
//     });

//     const signupForm = document.getElementById("signupForm");
//     signupForm.addEventListener("submit", function (event) {
//         event.preventDefault();

//         // Fetch form inputs
//         const newUsername = document.getElementById("newUsername").value;
//         const mobileNumber = document.getElementById("mobileNumber").value;
//         const newPassword = document.getElementById("newPassword").value;
//         const confirmPassword = document.getElementById("confirmPassword").value;

//         // Validation logic for mobile number
//         const mobileNumberPattern = /^\d{10}$/;
//         if (!mobileNumberPattern.test(mobileNumber)) {
//             alert("Mobile number must be 10 digits.");
//             return;
//         }

//         // Ensure all fields are filled
//         if (newUsername && mobileNumber && newPassword) {
//             if (newPassword != confirmPassword) {
//                 alert("Password don't match");
//             } else {
//                 // Save the username and password
//                 savedUsername = newUsername;
//                 savedPassword = newPassword;

//                 // Close signup popup
//                 closePopup();

//                 // Optionally, you can automatically fill login fields with new user data and focus
//                 document.getElementById("username").value = savedUsername;
//                 document.getElementById("password").value = savedPassword;
//             }

//         } else {
//             alert("Please fill out all fields.");
//         }
//     });

//     // Login button click event
//     // Login button click event
//     document.getElementById("loginButton1").addEventListener("click", function (event) {
//         event.preventDefault(); // Prevent form submission
//         const username = document.getElementById("username").value;
//         const password = document.getElementById("password").value;

//         // Check if username and password match the saved credentials
//         if (username === savedUsername && password === savedPassword) {
//             console.log("Login successful!");
//             // Perform actions after successful login
//             updateNavigation(true); // Update navigation to show "Logout"
//             closePopup(); // Close the popup
//         } else {
//             alert("Invalid username or password. Please try again.");
//             // Popup will remain open if login is unsuccessful
//         }
//     });


//     function updateNavigation(isLoggedIn) {
//         const loginButton = document.getElementById("loginButton");
//         if (isLoggedIn) {
//             // If logged in, update link text to "Logout"
//             loginButton.textContent = "Logout";
//             loginButton.href = "#logout"; // Update href if necessary
//             loginButton.removeEventListener("click", openPopup); // Remove login popup function
//             loginButton.addEventListener("click", logout); // Add logout function
//         } else {
//             // If logged out, revert link text to "Login"
//             loginButton.textContent = "Login";
//             loginButton.href = "#login"; // Update href if necessary
//             loginButton.removeEventListener("click", logout); // Remove logout function
//             loginButton.addEventListener("click", openPopup); // Add login popup function
//         }
//     }

//     // Function to perform logout
//     function logout(event) {
//         event.preventDefault(); // Prevent default link behavior (if it's an anchor tag)

//         // Clear saved credentials
//         savedUsername = "";
//         savedPassword = "";

//         // Update navigation to show "Login"
//         updateNavigation(false);

//         // Alert message instead of opening the popup
//         alert("You have been logged out.");
//     }

//     function isLoggedIn() {
//         return savedUsername !== "" && savedPassword !== "";
//     }

//     var today = new Date().toISOString().split('T')[0];

//     var startDateInput = document.getElementById('start-date');
//     var endDateInput = document.getElementById('end-date');

//     startDateInput.value = today;
//     startDateInput.min = today;

//     //endDateInput.value = today;
//     endDateInput.min = today;

//     startDateInput.addEventListener('change', function () {
//         var startDate = startDateInput.value;
//         endDateInput.min = startDate;
//         if (endDateInput.value < startDate) {
//             endDateInput.value = startDate;
//         }
//     });


//     const bookingForm = document.getElementById("bookingForm");
//     bookingForm.addEventListener("submit", function (event) {
//         event.preventDefault();

//         if (!isLoggedIn()) {
//             alert("Please log in before booking.");
//             return; // Prevent booking if not logged in
//         } else {
//             const name = document.getElementById("name").value;
//             const email = document.getElementById("email").value;
//             const destination = document.getElementById("destination").value;
//             const destinationId = document.getElementById("destination").value;
//             const dates = document.getElementById("start-date").value;
//             const count = parseInt(document.getElementById("count").value, 10);

//             if (!name || !email || !destination || !dates) {
//                 alert("Please fill out all fields.");
//                 return;
//             }

//             const selectedDestination = destinationsData.find(dest => dest.id === destinationId);

//             const totalAmount = selectedDestination.amount * count;

//             // Display payment popup with calculated amount
//             document.getElementById("tourPaymentAmount").textContent = `Rs. ${totalAmount.toFixed(2)}`;
//             document.getElementById("paymentPopup").style.display = "block";

//             // Display payment popup
//             document.getElementById("paymentPopup").style.display = "block";

//             // Prevent the success message from showing immediately
//             return;
//         }
//     });


//     document.getElementById("paymentForm").addEventListener("submit", function (event) {
//         event.preventDefault();

//         // Here you can perform actual payment processing,
//         // for now, let's simulate a successful payment
//         simulatePaymentSuccess();
//     });


//     function simulatePaymentSuccess() {
//         // Close payment popup
//         document.getElementById("paymentPopup").style.display = "none";

//         // Show booking success message
//         alert("Your booking and payment are successful!");
//     }


//     function createImageRows(images) {
//         let rowsHTML = "";
//         for (let i = 0; i < images.length; i += 2) {
//             rowsHTML += `<div class="image-row">
//                             <img src="${images[i]}" alt="Image ${i + 1}" />
//                             ${images[i + 1] ? `<img src="${images[i + 1]}" alt="Image ${i + 2}" />` : ""}
//                          </div>`;
//         }
//         return rowsHTML;
//     }
// });


document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("destinationModal");
    const span = document.getElementsByClassName("close")[0];
    var savedUsername = "";
    var savedPassword = "";

    span.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    document.querySelectorAll(".view-button").forEach((button) => {
        button.addEventListener("click", function () {
            const destinationId = this.getAttribute("data-id");
            const destination = destinationsData.find((d) => d.id === destinationId);
            if (destination) {
                document.getElementById("profile-pic").src = destination.images[0];
                document.getElementById("destination-name").textContent = destination.name;
                document.getElementById("tour-plan-amount").textContent = `Tour Plan Amount: ₹${destination.amount}`;
                document.getElementById("spot1-name").textContent = destination.spot1;
                document.getElementById("spot1-description").textContent = destination.description1;
                document.getElementById("spot1-images").innerHTML = createImageRows(destination.images1);
                document.getElementById("spot2-name").textContent = destination.spot2;
                document.getElementById("spot2-description").textContent = destination.description2;
                document.getElementById("spot2-images").innerHTML = createImageRows(destination.images2);
                modal.style.display = "block";
            } else {
                console.error("Destination not found");
            }
        });
    });

    const destinationDropdown = document.getElementById("destination");
    const destinationDetailsContainer = document.getElementById("destinationDetails");

    destinationsData.forEach((destination) => {
        const option = document.createElement("option");
        option.value = destination.id;
        option.textContent = destination.name;
        destinationDropdown.appendChild(option);
    });

    destinationDropdown.addEventListener("change", function () {
        const selectedDestinationId = this.value;
        const selectedDestination = destinationsData.find((d) => d.id === selectedDestinationId);

        if (selectedDestination) {
            const destinationDetailsHTML = `
                <h2>${selectedDestination.name}</h2>
                <div id="destinationDetails" class="details-container">
                    <div id="spot1Details" class="spot-details">
                        <h3>${selectedDestination.spot1}</h3>
                        <div id="spot1Images"></div>
                    </div>
                    <div id="spot2Details" class="spot-details">
                        <h3>${selectedDestination.spot2}</h3>
                        <div id="spot2Images"></div>
                    </div>
                </div>
            `;

            destinationDetailsContainer.innerHTML = destinationDetailsHTML;

            // Populate images for spot1
            const spot1ImagesContainer = document.getElementById("spot1Images");
            if (selectedDestination.images1.length > 0) {
                const spot1Image = document.createElement("img");
                spot1Image.src = selectedDestination.images1[0]; // Select the first image
                spot1Image.classList.add("destination-image"); // Add a class to control image size
                spot1ImagesContainer.appendChild(spot1Image);
            }

            // Populate images for spot2
            const spot2ImagesContainer = document.getElementById("spot2Images");
            if (selectedDestination.images2.length > 0) {
                const spot2Image = document.createElement("img");
                spot2Image.src = selectedDestination.images2[0]; // Select the first image
                spot2Image.classList.add("destination-image"); // Add a class to control image size
                spot2ImagesContainer.appendChild(spot2Image);
            }
        } else {
            destinationDetailsContainer.innerHTML =
                "<p>Select a destination from the dropdown to view details.</p>";
        }
    });

    // Function to open the login popup
    function openPopup() {
        document.getElementById("loginPopup").style.display = "block";
    }

    // Function to open the signup popup
    function openSignUpPopup() {
        document.getElementById("signupPopup").style.display = "block";
    }

    // Function to close the login/signup popup
    function closePopup() {
        const loginPopup = document.getElementById("loginPopup");
        const signupPopup = document.getElementById("signupPopup");
        loginPopup.style.display = "none";
        signupPopup.style.display = "none";
    }

    // Event listener for the login button
    document.getElementById("loginButton").addEventListener("click", function () {
        openPopup();
    });

    // Event listener for the close button in the login popup
    document.querySelector("#loginPopup .close").addEventListener("click", function () {
        closePopup();
    });

    // Event listener for the "Create new account" link
    document.querySelector("#loginForm a").addEventListener("click", function (event) {
        event.preventDefault();
        openSignUpPopup();
    });

    const signupForm = document.getElementById("signupForm");
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Fetch form inputs
        const newUsername = document.getElementById("newUsername").value;
        const mobileNumber = document.getElementById("mobileNumber").value;
        const newPassword = document.getElementById("newPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        // Validation logic for mobile number
        const mobileNumberPattern = /^\d{10}$/;
        if (!mobileNumberPattern.test(mobileNumber)) {
            alert("Mobile number must be 10 digits.");
            return;
        }

        // Ensure all fields are filled
        if (newUsername && mobileNumber && newPassword) {
            if (newPassword != confirmPassword) {
                alert("Password don't match");
            } else {
                // Save the username and password
                savedUsername = newUsername;
                savedPassword = newPassword;

                // Close signup popup
                closePopup();

                // Optionally, you can automatically fill login fields with new user data and focus
                document.getElementById("username").value = savedUsername;
                document.getElementById("password").value = savedPassword;
            }
        } else {
            alert("Please fill out all fields.");
        }
    });

    // Login button click event
    // Login button click event
    document.getElementById("loginButton1").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Check if username and password are provided
        if (!username || !password) {
            alert("Please enter both username and password.");
            return;
        }

        // Check if username and password match the saved credentials
        if (username === savedUsername && password === savedPassword) {
            console.log("Login successful!");
            // Perform actions after successful login
            updateNavigation(true); // Update navigation to show "Logout"
            closePopup(); // Close the popup
        } else {
            alert("Invalid username or password. Please try again.");
            // Popup will remain open if login is unsuccessful
        }
    });


    // Function to update navigation based on login status
    function updateNavigation(isLoggedIn) {
        const loginButton = document.getElementById("loginButton1");
        if (isLoggedIn) {
            // If logged in, update link text to "Logout"
            loginButton.textContent = "Logout";
            loginButton.href = "#logout"; // Update href if necessary
            loginButton.removeEventListener("click", openPopup); // Remove login popup function
            loginButton.addEventListener("click", logout); // Add logout function
        } else {
            // If logged out, revert link text to "Login"
            loginButton.textContent = "Login";
            loginButton.href = "#login"; // Update href if necessary
            loginButton.removeEventListener("click", logout); // Remove logout function
            loginButton.addEventListener("click", openPopup); // Add login popup function
        }
    }

    // Function to perform logout
    function logout(event) {
        event.preventDefault(); // Prevent default link behavior (if it's an anchor tag)

        // Clear saved credentials
        savedUsername = "";
        savedPassword = "";

        // Update navigation to show "Login"
        updateNavigation(false);

        // Alert message instead of opening the popup
        alert("You have been logged out.");
    }

    function isLoggedIn() {
        return savedUsername !== "" && savedPassword !== "";
    }

    var today = new Date().toISOString().split("T")[0];

    var startDateInput = document.getElementById("start-date");
    var endDateInput = document.getElementById("end-date");

    startDateInput.value = today;
    startDateInput.min = today;

    //endDateInput.value = today;
    endDateInput.min = today;

    startDateInput.addEventListener("change", function () {
        var startDate = startDateInput.value;
        endDateInput.min = startDate;
        if (endDateInput.value < startDate) {
            endDateInput.value = startDate;
        }
    });

    const bookingForm = document.getElementById("bookingForm");
    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!isLoggedIn()) {
            alert("Please log in before booking.");
            return; // Prevent booking if not logged in
        } else {
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const destination = document.getElementById("destination").value;
            const destinationId = document.getElementById("destination").value;
            const dates = document.getElementById("start-date").value;
            const count = parseInt(document.getElementById("count").value, 10);

            if (!name || !email || !destination || !dates) {
                alert("Please fill out all fields.");
                return;
            }

            const selectedDestination = destinationsData.find((dest) => dest.id === destinationId);

            const totalAmount = selectedDestination.amount * count;

            // Display payment popup with calculated amount
            document.getElementById("tourPaymentAmount").textContent = `Rs. ${totalAmount.toFixed(2)}`;
            document.getElementById("paymentPopup").style.display = "block";
        }
    });

    document.getElementById("paymentForm").addEventListener("submit", function (event) {
        event.preventDefault();

        // Here you can perform actual payment processing,
        // for now, let's simulate a successful payment
        simulatePaymentSuccess();
    });

    function simulatePaymentSuccess() {
        // Close payment popup
        document.getElementById("paymentPopup").style.display = "none";

        // Show booking success message
        alert("Your booking and payment are successful!");
    }

    function createImageRows(images) {
        let rowsHTML = "";
        for (let i = 0; i < images.length; i += 2) {
            rowsHTML += `<div class="image-row">
                            <img src="${images[i]}" alt="Image ${i + 1}" />
                            ${images[i + 1] ? `<img src="${images[i + 1]}" alt="Image ${i + 2}" />` : ""}
                         </div>`;
        }
        return rowsHTML;
    }

    // Function to update navigation based on login status
    function updateNavigation(isLoggedIn) {
        const loginButton = document.getElementById("loginButton");
        if (isLoggedIn) {
            // If logged in, update link text to "Logout"
            loginButton.textContent = "Logout";
            loginButton.href = "#logout"; // Update href if necessary
            loginButton.removeEventListener("click", openPopup); // Remove login popup function
            loginButton.addEventListener("click", logout); // Add logout function
        } else {
            // If logged out, revert link text to "Login"
            loginButton.textContent = "Login";
            loginButton.href = "#login"; // Update href if necessary
            loginButton.removeEventListener("click", logout); // Remove logout function
            loginButton.addEventListener("click", openPopup); // Add login popup function
        }
    }

    // Function to perform logout
    function logout(event) {
        event.preventDefault(); // Prevent default link behavior (if it's an anchor tag)

        // Clear saved credentials
        savedUsername = "";
        savedPassword = "";

        // Update navigation to show "Login"
        updateNavigation(false);

        // Alert message instead of opening the popup
        alert("You have been logged out.");
    }

    // Check initial login status and update navigation
    updateNavigation(isLoggedIn());

    function isLoggedIn() {
        return savedUsername !== "" && savedPassword !== "";
    }

    var today = new Date().toISOString().split("T")[0];

    var startDateInput = document.getElementById("start-date");
    var endDateInput = document.getElementById("end-date");

    startDateInput.value = today;
    startDateInput.min = today;

    //endDateInput.value = today;
    endDateInput.min = today;

    startDateInput.addEventListener("change", function () {
        var startDate = startDateInput.value;
        endDateInput.min = startDate;
        if (endDateInput.value < startDate) {
            endDateInput.value = startDate;
        }
    });

    bookingForm = document.getElementById("bookingForm");
    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!isLoggedIn()) {
            alert("Please log in before booking.");
            return; // Prevent booking if not logged in
        } else {
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const destination = document.getElementById("destination").value;
            const destinationId = document.getElementById("destination").value;
            const dates = document.getElementById("start-date").value;
            const count = parseInt(document.getElementById("count").value, 10);

            if (!name || !email || !destination || !dates) {
                alert("Please fill out all fields.");
                return;
            }

            const selectedDestination = destinationsData.find((dest) => dest.id === destinationId);

            const totalAmount = selectedDestination.amount * count;

            // Display payment popup with calculated amount
            document.getElementById("tourPaymentAmount").textContent = `Rs. ${totalAmount.toFixed(2)}`;
            document.getElementById("paymentPopup").style.display = "block";
        }
    });

    document.getElementById("paymentForm").addEventListener("submit", function (event) {
        event.preventDefault();

        // Here you can perform actual payment processing,
        // for now, let's simulate a successful payment
        simulatePaymentSuccess();
    });

    function simulatePaymentSuccess() {
        // Close payment popup
        document.getElementById("paymentPopup").style.display = "none";

        // Show booking success message
        alert("Your booking and payment are successful!");
    }

    function createImageRows(images) {
        let rowsHTML = "";
        for (let i = 0; i < images.length; i += 2) {
            rowsHTML += `<div class="image-row">
                            <img src="${images[i]}" alt="Image ${i + 1}" />
                            ${images[i + 1] ? `<img src="${images[i + 1]}" alt="Image ${i + 2}" />` : ""}
                         </div>`;
        }
        return rowsHTML;
    }
});
