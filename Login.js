
document.addEventListener("DOMContentLoaded", function () {
    // Xử lý khi trang đã được tải hoàn toàn
    // Mã JavaScript sẽ được thực hiện sau khi trang đã được tải xong. 
    // Lắng nghe sự kiện nút đăng nhập
    document.querySelector(".btn").addEventListener("click", function () {
        // Lấy thông tin từ localStorage
        var storedUser = JSON.parse(localStorage.getItem("user"));

        // Kiểm tra xem có thông tin người dùng được lưu trong localStorage không
        if (storedUser) {
            // Lấy giá trị từ các trường nhập liệu
            var enteredUsername = document.querySelector("input[type='text']").value;
            var enteredPassword = document.querySelector("input[type='password']").value;

            // Kiểm tra xem thông tin nhập vào có khớp với thông tin từ localStorage không
            if (enteredUsername === storedUser.username && enteredPassword === storedUser.password) {
                // Đăng nhập thành công, bạn có thể thực hiện hành động mong muốn ở đây
                alert("Đăng nhập thành công!");
                // Chuyển hướng đến trang chủ
                window.location.href = "Trangchu.html";
            } else {
                // Đăng nhập không thành công, bạn có thể thực hiện hành động mong muốn ở đây
                alert("Đăng nhập không thành công. Vui lòng kiểm tra lại tên đăng nhập và mật khẩu.");
            }
        } else {
            // Nếu không có thông tin người dùng trong localStorage
            alert("Không có thông tin người dùng. Vui lòng đăng ký trước.");
        }
    });
});
