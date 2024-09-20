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
### working directory (file màu đỏ)
=>lúc này file chưa sẵn sàng để đưa lên repo remote
### staging (file màu xanh)
=> lúc này file sẵn sàng để đưa lên repo remote

## git add . 
=> dùng để thêm tất cả các file ở trong thư mực hiện tại vào trong staging

## git add -A 
=> dùng để thêm tất cả các file ở trong dự án vào trong staging

## git add <đường dẫn file> 
=> Chỉ thêm file cụ thể vào trong staging

<!-- Trước khi chạy lệnh commit thì chạy 2 lệnh này -->
## git config --global user.name "name"
## git config --global user.email "email đăng ký Git"
=> config git (chỉ chạy duy nhất 1 lần)

## git commit -m "message"
=> dùng để gắn message vào trong những file đang ở staging được phép đưa lên repo remote
=> mỗi commit có một mã sha (id)

## git log
=> Kiểm tra lịch sử commit

## git push -u origin <tên nhánh>
=> đưa sourcecode lên repo remote
=> từ lần push code thứ 2 : git push

## Đưa file từ staging về lại working
## git reset 
=> Đưa tất cả file từ staging về lại working 

## git restore -S . 
=> Đưa tất cả file từ staging về lại working 

## git restore -S <url file> 
=> Chỉ đưa duy nhất file về working

<!-- CHECK OUT -->
## git checkout <url file>
=> 1. Đưa 1 file đang đc chỉnh sửa về trạng thái trc đó

## git checkout -b <tên nhánh> 
=> tương đương với 2 lệnh git branch + git switch

## git checkout <tên nhánh> 
=> Chuyển qua nhánh <tên nhánh>

<!-- BRANCH -->
// dev => Kiểm thử QA và Dev (dev)
// staging => QA Kiểm thử 1 lần (staging)
// production => end user (main/release)

## git branch <tên nhánh> 
=> tạo ra 1 nhánh mới
=> nhánh mới sẽ chứa toàn bộ code của nhánh đang đứng

## git branch -a hoặc git branch 
=> Liệt kê tất cả các branch đang có trong repo

## git switch <tên nhánh>
=> Chuyển qua nhánh <tên nhánh>

<!-- Sau khi merge code các branch -->
## git pull
=>lấy toàn bộ sourcecode thay đổi ở repo remote về repo local 
=> git pull --no-ff

## git clone <url reporemote>
=> Dùng để clone source code của 1 repo bất kỳ
=> Mở terminal git bash here 












<!-- Lưu ý -->
### Ko đưa thư mực node_modules lên repo remote
=> Node_modueles chiếm dung lượng rất lớn
=> Node_modules có thể cài lại thông qua câu lệnh : npm i

### file .gitignore quy định những thư mục hay file ko đc phép đẩy lên repo remote
=> .gitignore nằm ở thư mục root