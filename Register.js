function register() {
    event.preventDefault();
    // Lấy giá trị từ các trường nhập liệu
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Lưu thông tin vào localStorage
    var user = {
        username: username,
        password: password
    };
var json = JSON.stringify(user);
    // Chuyển đối tượng thành chuỗi JSON và lưu vào localStorage
    localStorage.setItem("username",json);

    // Thông báo thành công (bạn có thể thay thế bằng hành động khác)
    alert("Đăng ký thành công!");
    window.location.href = "Login.html";
}
