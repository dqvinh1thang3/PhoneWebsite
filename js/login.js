const loginContainer = document.querySelector(".login-container");
const showRegister = document.querySelector("#show-register");
const showLogin = document.querySelector("#show-login");

showRegister.addEventListener("click", function() {
    loginContainer.classList.add("register-mode");
});

showLogin.addEventListener("click", function() {
    loginContainer.classList.remove("register-mode");
});

/* ================ login - register ==================*/
const registerUsername = document.querySelector("#register-username");
const loginUsername = document.querySelector("#login-username");
const loginPassword = document.querySelector("#login-password");

const registerButton = document.querySelector("#register-button");
const loginButton = document.querySelector(".login-form button");

const registerFullname = document.querySelector("#register-fullname");
const registerEmail = document.querySelector("#register-email");
const registerPassword = document.querySelector("#register-password");
const registerConfirmPassword = document.querySelector("#register-confirm-password");

const registerMessage = document.querySelector(".register-message");
const loginMessage = document.querySelector(".login-message");

// loginUsername.value: tk đang được nhập nhập
// username: tk trong storage
//password: mk trong storage

registerButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    if (registerUsername.value === "") {
        registerMessage.textContent = "Vui lòng nhập tài khoản!";
        registerMessage.classList.remove("correct");
        registerMessage.classList.add("error");
        return;
    }

    if (registerEmail.value === "") {
        registerMessage.textContent = "Vui lòng nhập email!";
        registerMessage.classList.remove("correct");
        registerMessage.classList.add("error");
        return;
    }
    const checkgmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!checkgmail.test(registerEmail.value)) {
        registerMessage.textContent = "Email không hợp lệ!";
        registerMessage.classList.remove("correct");
        registerMessage.classList.add("error");
        return;
    }

    if (registerPassword.value === "") {
        registerMessage.textContent = "Vui lòng nhập mật khẩu!";
        registerMessage.classList.remove("correct");
        registerMessage.classList.add("error");
        return;
    }
    if (registerConfirmPassword.value === "") {
        registerMessage.textContent = "Vui lòng xác nhận mật khẩu!";
        registerMessage.classList.remove("correct");
        registerMessage.classList.add("error");
        return;
    }

    const username = localStorage.getItem("username");

    if (registerUsername.value === username) {
        registerMessage.textContent = "Tài khoản đã tồn tại!";
    } else {
        if (registerPassword.value === registerConfirmPassword.value) {
            registerMessage.textContent = "Đăng ký thành công";
            registerMessage.classList.remove("error");
            registerMessage.classList.add("correct");
            localStorage.setItem("username", registerUsername.value);
            localStorage.setItem("password", registerPassword.value);
            localStorage.setItem("fullname", registerFullname.value);
            localStorage.setItem("email", registerEmail.value);

            registerFullname.value = "";            
            registerUsername.value = "";
            registerEmail.value = "";
            registerPassword.value = "";
            registerConfirmPassword.value = "";
        } else {
            registerMessage.textContent = "Mật khẩu không khớp!";
            registerMessage.classList.remove("correct");
            registerMessage.classList.add("error");
        }
    }
});

loginButton.addEventListener("click", function(event) {

    event.preventDefault();

    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    // Đăng nhập Admin
    if (loginUsername.value === "admin" && loginPassword.value === "123456") {

        loginMessage.textContent = "Đăng nhập Admin thành công";
        loginMessage.classList.remove("error");
        loginMessage.classList.add("correct");

        localStorage.setItem("isLogin", "true");
        localStorage.setItem("isAdmin", "true");

        setTimeout(function() {
            window.location.href = "admin.html";
        }, 1000);

    // Đăng nhập tài khoản khách hàng
    } else if (loginUsername.value === username && loginPassword.value === password) {

        loginMessage.textContent = "Đăng nhập thành công";
        loginMessage.classList.remove("error");
        loginMessage.classList.add("correct");

        localStorage.setItem("isLogin", "true");
        localStorage.setItem("isAdmin", "false");

        setTimeout(function() {
            window.location.href = "card.html";
        }, 1000);

    // Sai tài khoản hoặc mật khẩu
    } else {

        loginMessage.textContent = "Tài khoản hoặc mật khẩu không đúng";
        loginMessage.classList.add("error");
        loginMessage.classList.remove("correct");

    }

});



