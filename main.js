function signup(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;
    if (password !== password2) {
        alert("Mật khẩu nhập lại không khớp với mật khẩu");
        return;
    }
    if (localStorage.getItem(username)) {
        alert("Tên đăng nhập đã tồn tại");
        return;
    }
    var user = {
        username: username,
        password: password,
    }
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    alert("Đăng ký thành công");
    window.location.href = "Login.html";
}
function login(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (!username || username === "" || !password || password === "") {
        alert("Vui lòng không để trống");
        return;
    }

    var user = localStorage.getItem(username);
    if (!user) {
        alert("Sai tên đăng nhập hoặc mật khẩu");
        return;
    }

    var data = JSON.parse(user);
    if(username === data.username && password === data.password){
        alert("Đăng nhập thành công");
        window.location.href = "Trangchu.html";
    }
    else{
        alert("Sai tên đăng nhập hoặc mật khẩu");
    }
}