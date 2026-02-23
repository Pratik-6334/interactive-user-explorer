// Warm Background Toggle with smooth animation

function changeBackground() {

    document.body.classList.toggle("warm");

}



// API Integration

async function loadUsers() {

    const list = document.getElementById("userList");

    list.innerHTML = "<li>Loading users...</li>";

    try {

        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("API response failed");
        }

        const data = await response.json();

        list.innerHTML = "";

        data.forEach(user => {

            const li = document.createElement("li");

            li.textContent = `${user.name} (${user.email})`;

            list.appendChild(li);

        });

    }

    catch (error) {

        list.innerHTML = "<li style='color:red;'>Failed to load users. Check Live Server.</li>";

        console.error(error);

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
