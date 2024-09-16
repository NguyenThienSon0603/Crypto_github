## Tạo repository (repo)
<!-- Lệnh gõ ở terminal -->
## git init
=>Tạo repo local với nhánh chính có tên "master"

## git init -b main
=> Tạo repo local với nhánh chính có tên "main"
=> Do repo remote mặc định có tên là "main" nên ta tạo repo local có tên "main" để tránh xung đột

## git remote add origin https://github.com/NguyenThienSon0603/Crypto_github.git
=> liên kết repo local với repo remote lại với nhau
<!-- Các lệnh trong git -->
## git status 
=> Kiểm tra sự thay đổi của các file trong dự án

## git add 
=> Thêm file vào trong staging

### git add . => dùng để thêm tất cả các file ở trong thư mực hiện tại vào trong staging

### git add -A => dùng để thêm tất cả các file ở trong dự án vào trong staging

### git add <đường dẫn file> => Chỉ thêm file cụ thể vào trong staging

<!--  -->
## Ko đưa thư mực node_modules lên repo remote
=> Node_modueles chiếm dung lượng rất lớn
=> Node_modules có thể cài lại thông qua câu lệnh : npm i

### file .gitignore quy định những thư mục hay file ko đc phép đẩy lên repo remote
=> .gitignore nằm ở thư mục root