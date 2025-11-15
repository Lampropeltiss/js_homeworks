const formObj = document.querySelector("#signin");
const form = formObj.querySelector("#signin__form");

const login = form.querySelector(`input[name="login"]`);
login.focus();

function showWelcome(userId) {
    const welcome = document.getElementById("welcome");
    const userIdObj = welcome.querySelector("#user_id");
    userIdObj.innerText = userId;
    formObj.classList.remove("signin_active");
    welcome.classList.add("welcome_active");
}

// localStorage.removeItem("auth_task_user_id")

const xhr = new XMLHttpRequest;
xhr.responseType = "json";

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");

    xhr.onload = () => {
        const response = xhr.response;
        if (response["success"]) {
            const localId = localStorage.getItem("auth_task_user_id");
            if (!localId) { 
                showWelcome(response["user_id"]);
                localStorage.setItem("auth_task_user_id", response["user_id"]);
            } else {
                showWelcome(localId);
            }
            
        } else {
            alert("Неверный логин/пароль");
        }
    }

    xhr.send(formData);
})