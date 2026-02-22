// Warm Background Toggle with smooth animation

function changeBackground() {

    document.body.classList.toggle("warm");

}



// API Integration

async function loadUsers() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const data = await response.json();

        const list = document.getElementById("userList");

        list.innerHTML = "";

        data.forEach(function (user) {

            const li = document.createElement("li");

            li.textContent =
                user.name + " (" + user.email + ")";

            list.appendChild(li);

        });

    }

    catch (error) {

        document.getElementer("userList").innerHTML =
            "<li>Failed to load users.</li>";

    }

}



// Form Validation + Refresh

function validateForm() {

    var name =
        document.getElementById("name").value.trim();

    var email =
        document.getElementById("email").value.trim();

    var message =
        document.getElementById("message");

    if (name === "" || email === "") {

        message.style.color = "red";

        message.textContent =
            "Please fill all fields.";

        return false;

    }

    message.style.color = "green";

    message.textContent =
        "Form submitted successfully! Refreshing...";

    setTimeout(function () {

        location.reload();

    }, 1500);

    return false;

}