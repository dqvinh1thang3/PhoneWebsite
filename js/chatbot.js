// ================= CHATBOT =================

const chatButton = document.querySelector(".chat-button");
const chatBox = document.querySelector(".chat-box");
const chatClose = document.querySelector(".chat-close");
const searchInput = document.querySelector(".search-input");
const chatInput = document.querySelector(".chat-input textarea");
const chatForm = document.querySelector(".chat-input");
const chatContent = document.querySelector(".chat-content");

let count = 0;


// ============================================================
// NGỮ CẢNH
// ============================================================

let sanPhamDangHoi = "";
let dungLuongDangHoi = "";
let yDinhDangHoi = "";


// ============================================================
// MỞ / ĐÓNG CHAT
// ============================================================

chatButton.addEventListener("click", function() {

    count++;

    if (count % 2 === 1) {
        chatBox.style.display = "block";
    } else {
        chatBox.style.display = "none";
    }

});


chatClose.addEventListener("click", function() {

    chatBox.style.display = "none";

    count = 0;

});


// ============================================================
// THANH TÌM KIẾM -> BOT
// ============================================================

searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        const cauHoi = searchInput.value.trim();
        if (cauHoi === "") {
            return;
        }
        chatBox.style.display = "block";
        count = 1;
        guiTinNhan(cauHoi);
        searchInput.value = "";
    }
});

// ============================================================
// GỬI TIN NHẮN
// ============================================================
function guiTinNhan(cauHoi) {
    const tinNhan = document.createElement("div");
    tinNhan.classList.add("user-message");
    tinNhan.innerHTML = cauHoi;
    chatContent.appendChild(tinNhan);
    chatInput.value = "";

    // TỰ CUỘN XUỐNG CUỐI CHAT
    chatContent.scrollTop = chatContent.scrollHeight;
    const cauHoiNho = cauHoi.toLowerCase();

    let coDongMay = false;

    // --------------------------------------------------------
    // IPHONE 15 PRO MAX
    // --------------------------------------------------------

    if (
        cauHoiNho.includes("iphone 15 pro max") ||
        cauHoiNho.includes("iphone 15promax") ||
        cauHoiNho.includes("ip 15 pro max") ||
        cauHoiNho.includes("ip 15promax") ||
        cauHoiNho.includes("15 pro max") ||
        cauHoiNho.includes("15promax")
    ) {

        if (sanPhamDangHoi !== "iphone 15 pro max") {
            dungLuongDangHoi = "";
            yDinhDangHoi = "";
        }

        sanPhamDangHoi = "iphone 15 pro max";
        coDongMay = true;
    }


    // --------------------------------------------------------
    // IPHONE 15 PRO
    // --------------------------------------------------------

    else if (
        cauHoiNho.includes("iphone 15 pro") ||
        cauHoiNho.includes("ip 15 pro") ||
        cauHoiNho.includes("15 pro")
    ) {

        if (sanPhamDangHoi !== "iphone 15 pro") {
            dungLuongDangHoi = "";
            yDinhDangHoi = "";
        }

        sanPhamDangHoi = "iphone 15 pro";
        coDongMay = true;
    }

    // --------------------------------------------------------
    // IPHONE 17 PRO MAX
    // --------------------------------------------------------

    else if (
        cauHoiNho.includes("iphone 17 pro max") ||
        cauHoiNho.includes("iphone 17promax") ||
        cauHoiNho.includes("ip 17 pro max") ||
        cauHoiNho.includes("ip 17promax") ||
        cauHoiNho.includes("17 pro max") ||
        cauHoiNho.includes("17promax")
    ) {

        if (sanPhamDangHoi !== "iphone 17 pro max") {
            dungLuongDangHoi = "";
            yDinhDangHoi = "";
        }

        sanPhamDangHoi = "iphone 17 pro max";
        coDongMay = true;
    }


    // --------------------------------------------------------
    // IPHONE 15
    // --------------------------------------------------------

    else if (
        cauHoiNho.includes("iphone 15") ||
        cauHoiNho.includes("ip 15")
    ) {

        if (sanPhamDangHoi !== "iphone 15") {
            dungLuongDangHoi = "";
            yDinhDangHoi = "";
        }

        sanPhamDangHoi = "iphone 15";
        coDongMay = true;
    }

    // --------------------------------------------------------
    // IPHONE 13
    // --------------------------------------------------------

    else if (
        cauHoiNho.includes("iphone 13") ||
        cauHoiNho.includes("ip 13")
    ) {

        if (sanPhamDangHoi !== "iphone 13") {
            dungLuongDangHoi = "";
            yDinhDangHoi = "";
        }

        sanPhamDangHoi = "iphone 13";
        coDongMay = true;
    }

    // --------------------------------------------------------
    // IPHONE 12 PRO - KHÔNG CÓ
    // --------------------------------------------------------

    else if (
        cauHoiNho.includes("iphone 12 pro") ||
        cauHoiNho.includes("ip 12 pro") ||
        cauHoiNho.includes("12 pro")
    ) {

        sanPhamDangHoi = "khong co";
        dungLuongDangHoi = "";
        yDinhDangHoi = "";
        coDongMay = true;
    }


    // --------------------------------------------------------
    // IPHONE 12
    // --------------------------------------------------------

    else if (
        cauHoiNho.includes("iphone 12") ||
        cauHoiNho.includes("ip 12") ||
        cauHoiNho.includes("12 thường") ||
        cauHoiNho.includes("12 thuong")
    ) {

        if (sanPhamDangHoi !== "iphone 12") {
            dungLuongDangHoi = "";
            yDinhDangHoi = "";
        }

        sanPhamDangHoi = "iphone 12";
        coDongMay = true;
    }


    // --------------------------------------------------------
    // IPHONE 11 PRO - KHÔNG CÓ
    // --------------------------------------------------------

    else if (
        cauHoiNho.includes("iphone 11 pro") ||
        cauHoiNho.includes("ip 11 pro") ||
        cauHoiNho.includes("11 pro")
    ) {

        sanPhamDangHoi = "khong co";
        dungLuongDangHoi = "";
        yDinhDangHoi = "";
        coDongMay = true;
    }

    // --------------------------------------------------------
    // IPHONE 11 - KHÔNG CÓ
    // --------------------------------------------------------

    else if (
        cauHoiNho.includes("iphone 11") ||
        cauHoiNho.includes("ip 11") ||
        cauHoiNho.includes("11 thường") ||
        cauHoiNho.includes("11 thuong")
    ) {

        sanPhamDangHoi = "khong co";
        dungLuongDangHoi = "";
        yDinhDangHoi = "";
        coDongMay = true;
    }

    // --------------------------------------------------------
    // IPHONE XS
    // --------------------------------------------------------

    else if (
        cauHoiNho.includes("iphone xs") ||
        cauHoiNho.includes("ip xs") ||
        cauHoiNho.includes("xs")
    ) {

        if (sanPhamDangHoi !== "iphone xs") {
            dungLuongDangHoi = "";
            yDinhDangHoi = "";
        }

        sanPhamDangHoi = "iphone xs";
        coDongMay = true;
    }

    // ========================================================
    // IPHONE KHÔNG CÓ
    // ========================================================

    if (
        (
            cauHoiNho.includes("iphone") ||
            cauHoiNho.includes("ip ")
        ) &&
        coDongMay === false
    ) {

        sanPhamDangHoi = "khong co";
        dungLuongDangHoi = "";
        yDinhDangHoi = "";
    }
    // ========================================================
    // HÃNG KHÁC
    // ========================================================

    if (
        cauHoiNho.includes("android") ||
        cauHoiNho.includes("samsung") ||
        cauHoiNho.includes("xiaomi") ||
        cauHoiNho.includes("oppo") ||
        cauHoiNho.includes("vivo") ||
        cauHoiNho.includes("realme")
    ) {

        sanPhamDangHoi = "khong co";
        dungLuongDangHoi = "";
        yDinhDangHoi = "";
    }
    // ========================================================
    // DUNG LƯỢNG
    // ========================================================

    if (
        cauHoiNho.includes("1tb") ||
        cauHoiNho.includes("1 tb")
    ) {
        dungLuongDangHoi = "1TB";
    }

    else if (
        cauHoiNho.includes("512gb") ||
        cauHoiNho.includes("512 gb") ||
        cauHoiNho.includes("512")
    ) {
        dungLuongDangHoi = "512";
    }

    else if (
        cauHoiNho.includes("256gb") ||
        cauHoiNho.includes("256 gb") ||
        cauHoiNho.includes("256")
    ) {
        dungLuongDangHoi = "256";
    }

    else if (
        cauHoiNho.includes("128gb") ||
        cauHoiNho.includes("128 gb") ||
        cauHoiNho.includes("128")
    ) {
        dungLuongDangHoi = "128";
    }

    else if (
        cauHoiNho.includes("64gb") ||
        cauHoiNho.includes("64 gb") ||
        cauHoiNho.includes("64")
    ) {
        dungLuongDangHoi = "64";
    }


    // ========================================================
    // KhÁC
    // ========================================================

    if (
        cauHoiNho.includes("bảo hành") ||
        cauHoiNho.includes("bao hanh") ||
        cauHoiNho.includes("bh")
    ) {
        yDinhDangHoi = "baohanh";
    }

    else if (
        cauHoiNho.includes("zalo") ||
        cauHoiNho.includes("zl") ||
        cauHoiNho.includes("liên hệ") ||
        cauHoiNho.includes("lien he") ||
        cauHoiNho.includes("số điện thoại") ||
        cauHoiNho.includes("so dien thoai")
    ) {
        yDinhDangHoi = "lienhe";
    }

    else if (
        cauHoiNho.includes("giá") ||
        cauHoiNho.includes("gia") ||
        cauHoiNho.includes("bao nhiêu") ||
        cauHoiNho.includes("bao nhieu") ||
        cauHoiNho.includes("nhiêu tiền") ||
        cauHoiNho.includes("nhieu tien")
    ) {
        yDinhDangHoi = "gia";
    }

    else if (
        cauHoiNho.includes("còn") ||
        cauHoiNho.includes("con") ||
        cauHoiNho.includes("còn hàng") ||
        cauHoiNho.includes("con hang") ||
        cauHoiNho.includes("tồn kho") ||
        cauHoiNho.includes("ton kho")
    ) {
        yDinhDangHoi = "tonkho";
    }


    // ========================================================
    // TRẢ LỜI
    // ========================================================

    const traLoi = traLoiBot(cauHoiNho);
    const botMessage = document.createElement("div");

    botMessage.classList.add("bot-message");
    botMessage.innerHTML = traLoi;
    chatContent.appendChild(botMessage);

    // TỰ CUỘN XUỐNG CUỐI CHAT
    chatContent.scrollTop = chatContent.scrollHeight;
}

// ============================================================
// BOT TRẢ LỜI
// ============================================================

function traLoiBot(cauHoi) {

    // ========================================================
    // CHÀO HỎI
    // ========================================================

    if (
        cauHoi.includes("xin chào") ||
        cauHoi.includes("xin chao") ||
        cauHoi === "chào" ||
        cauHoi === "chao" ||
        cauHoi.includes("hello") ||
        cauHoi.includes("helo") ||
        cauHoi.includes("alo") ||
        cauHoi === "hi"
    ) {
        return "Dạ em có thể giúp gì ạ";
    }

    // ========================================================
    // CẢM ƠN
    // ========================================================

    if (
        cauHoi === "ok" ||
        cauHoi === "oke" ||
        cauHoi.includes("ok em") ||
        cauHoi.includes("cảm ơn") ||
        cauHoi.includes("cam on") ||
        cauHoi.includes("thanks")
    ) {
        return "Dạ không có gì ạ";
    }

    // ========================================================
    // BÁN IPHONE
    // ========================================================

    if (
        cauHoi.includes("bán iphone") ||
        cauHoi.includes("ban iphone") ||
        cauHoi.includes("bên em bán iphone") ||
        cauHoi.includes("ben em ban iphone") ||
        cauHoi.includes("có bán iphone") ||
        cauHoi.includes("co ban iphone")
    ) {
        return "Dạ bên em chuyên bán iPhone ạ";
    }


    // ========================================================
    // SHOP CÓ NHỮNG MÁY GÌ
    // ========================================================

    if (
        cauHoi.includes("em có iphone gì") ||
        cauHoi.includes("em co iphone gi") ||
        cauHoi.includes("có iphone gì") ||
        cauHoi.includes("co iphone gi") ||
        cauHoi.includes("có những iphone") ||
        cauHoi.includes("co nhung iphone") ||
        cauHoi.includes("shop có iphone gì") ||
        cauHoi.includes("shop co iphone gi") ||
        cauHoi.includes("em có máy gì") ||
        cauHoi.includes("em co may gi") ||
        cauHoi.includes("có máy gì") ||
        cauHoi.includes("co may gi") ||
        cauHoi.includes("shop có máy gì") ||
        cauHoi.includes("shop co may gi") ||
        cauHoi.includes("có những máy") ||
        cauHoi.includes("co nhung may")
    ) {
        sanPhamDangHoi = "";
        dungLuongDangHoi = "";
        yDinhDangHoi = "";
        return "Dạ bên em hiện có iPhone Xs, iPhone 12, iPhone 13, iPhone 15, iPhone 15 Pro, iPhone 15 Pro Max và iPhone 17 Pro Max ạ";
    }


    // ========================================================
    // ANDROID / HÃNG KHÁC
    // ========================================================

    if (
        cauHoi.includes("android") ||
        cauHoi.includes("samsung") ||
        cauHoi.includes("xiaomi") ||
        cauHoi.includes("oppo") ||
        cauHoi.includes("vivo") ||
        cauHoi.includes("realme")
    ) {
        return "bên em không còn máy này, anh chị có thể liên hệ zl: 0123456789 để tìm máy hợp lí với giá tiền ạ";
    }


    // ========================================================
    // BẢO HÀNH
    // ========================================================
    if (yDinhDangHoi === "baohanh") {
        return "Dạ tất cả sản phẩm bên em đều bảo hành 1 đổi 1 trong 12 tháng ạ";
    }

    // ========================================================
    // LIÊN HỆ
    // ========================================================
    if (yDinhDangHoi === "lienhe") {
        return "Dạ anh chị có thể liên hệ ZL: 0123456789 để được tư vấn ạ";
    }


    // ========================================================
    // GIAO HÀNG / KIỂM TRA HÀNG
    // ========================================================

    if (
        cauHoi.includes("kiểm tra hàng") ||
        cauHoi.includes("kiem tra hang") ||
        cauHoi.includes("kiểm tra máy") ||
        cauHoi.includes("kiem tra may") ||
        cauHoi.includes("bóc hộp") ||
        cauHoi.includes("boc hop") ||
        cauHoi.includes("quay clip") ||
        cauHoi.includes("quay video") ||
        cauHoi.includes("giao hàng") ||
        cauHoi.includes("giao hang") ||
        cauHoi.includes("ship") ||
        cauHoi.includes("nhận hàng") ||
        cauHoi.includes("nhan hang")
    ) {
        return "Dạ khi nhận máy anh chị được kiểm tra hàng ạ. Anh chị nhớ quay clip quá trình bóc hộp, nếu máy có lỗi bên em sẽ hỗ trợ đổi máy ạ";
    }

    // ========================================================
    // NGÂN SÁCH
    // ========================================================

    if (
        cauHoi.includes("tài chính") ||
        cauHoi.includes("tai chinh") ||
        cauHoi.includes("tài chỉnh") ||
        cauHoi.includes("tai chỉnh") ||
        cauHoi.includes("ngân sách") ||
        cauHoi.includes("ngan sach") ||
        cauHoi.includes("khoảng") ||
        cauHoi.includes("khoang") ||
        cauHoi.includes("tầm") ||
        cauHoi.includes("tam") ||
        cauHoi.includes("dưới") ||
        cauHoi.includes("duoi") ||
        cauHoi.includes("triệu") ||
        cauHoi.includes("trieu") ||
        /\b\d+\s*-\s*\d+\s*(m|triệu|trieu|củ|đồng|khoai|lúa|tr|mét)\b/.test(cauHoi) ||
        /\b\d+\s*(m|triệu|trieu|củ|đồng|khoai|lúa|tr|mét)\b/.test(cauHoi)
    ) {
        return traLoiTheoNganSach(cauHoi);
    }

    // ========================================================
    // DÒNG MÁY KHÔNG CÓ
    // ========================================================

    if (sanPhamDangHoi === "khong co") {
        return "bên em không còn máy này, anh chị có thể liên hệ zl: 0123456789 để tìm máy hợp lí với giá tiền ạ";
    }

    // ========================================================
    // HỎI GIÁ
    // ========================================================

    if (yDinhDangHoi === "gia") {

        if (
            sanPhamDangHoi !== "" &&
            sanPhamDangHoi !== "khong co"
        ) {
            return traLoiGia();
        }
        return "Dạ anh muốn hỏi giá iPhone nào ạ";
    }


    // ========================================================
    // CÓ DUNG LƯỢNG + DÒNG MÁY
    // ========================================================

    if (
        sanPhamDangHoi !== "" &&
        sanPhamDangHoi !== "khong co" &&
        dungLuongDangHoi !== ""
    ) {
        return traLoiTheoSanPham();
    }


    // ========================================================
    // HỎI DUNG LƯỢNG
    // ========================================================

    if (
        cauHoi.includes("dung lượng") ||
        cauHoi.includes("dung luong") ||
        cauHoi.includes("bản nào") ||
        cauHoi.includes("ban nao")
    ) {

        if (
            sanPhamDangHoi !== "" &&
            sanPhamDangHoi !== "khong co"
        ) {
            return traLoiDungLuong();
        }
        return "Dạ anh đang hỏi dung lượng của iPhone nào ạ";
    }


    // ========================================================
    // CHỈ NHẬP DUNG LƯỢNG
    // ========================================================

    if (dungLuongDangHoi !== "") {

        if (
            sanPhamDangHoi !== "" &&
            sanPhamDangHoi !== "khong co"
        ) {
            return traLoiTheoSanPham();
        }
        return "Dạ anh đang hỏi dung lượng của iPhone nào ạ";
    }
    return "Dạ em có thể giúp gì ạ";
}


// ============================================================
// TRẢ LỜI THEO NGÂN SÁCH
// ============================================================

function traLoiTheoNganSach(cauHoi) {

    // ========================================================
    // 2 - 4 TRIỆU
    // ========================================================

    if (
        cauHoi.includes("2-4m") ||
        cauHoi.includes("2 - 4m") ||
        cauHoi.includes("2 đến 4m") ||
        cauHoi.includes("2 den 4m") ||
        cauHoi.includes("2-4 triệu") ||
        cauHoi.includes("2 - 4 triệu") ||
        cauHoi.includes("2 đến 4 triệu") ||
        cauHoi.includes("2 den 4 trieu")
    ) {
        sanPhamDangHoi = "iphone xs";
        dungLuongDangHoi = "64";
        yDinhDangHoi = "";
        return "Dạ tầm 2 - 4 triệu bên em có iPhone Xs 64GB, giá gần 3 triệu ạ";
    }


    // ========================================================
    // 2 - 5 TRIỆU
    // ========================================================

    if (
        cauHoi.includes("2-5m") ||
        cauHoi.includes("2 - 5m") ||
        cauHoi.includes("2 đến 5m") ||
        cauHoi.includes("2 den 5m") ||
        cauHoi.includes("2-5 triệu") ||
        cauHoi.includes("2 - 5 triệu") ||
        cauHoi.includes("2 đến 5 triệu") ||
        cauHoi.includes("2 den 5 trieu")
    ) {
        sanPhamDangHoi = "iphone xs";
        dungLuongDangHoi = "64";
        yDinhDangHoi = "";

        return "Dạ tầm 2 - 5 triệu bên em có iPhone Xs 64GB, giá gần 3 triệu ạ";
    }


    // ========================================================
    // 3 - 5 TRIỆU
    // ========================================================

    if (
        cauHoi.includes("3-5m") ||
        cauHoi.includes("3 - 5m") ||
        cauHoi.includes("3 đến 5m") ||
        cauHoi.includes("3 den 5m") ||
        cauHoi.includes("3-5 triệu") ||
        cauHoi.includes("3 - 5 triệu") ||
        cauHoi.includes("3 đến 5 triệu") ||
        cauHoi.includes("3 den 5 trieu")
    ) {
        sanPhamDangHoi = "iphone xs";
        dungLuongDangHoi = "64";
        yDinhDangHoi = "";

        return "Dạ tầm 3 - 5 triệu bên em có iPhone Xs 64GB, giá gần 3 triệu ạ";
    }


    // ========================================================
    // 3 - 6 TRIỆU
    // ========================================================

    if (
        cauHoi.includes("3-6m") ||
        cauHoi.includes("3 - 6m") ||
        cauHoi.includes("3 đến 6m") ||
        cauHoi.includes("3 den 6m") ||
        cauHoi.includes("3-6 triệu") ||
        cauHoi.includes("3 - 6 triệu") ||
        cauHoi.includes("3 đến 6 triệu") ||
        cauHoi.includes("3 den 6 trieu")
    ) {
        sanPhamDangHoi = "iphone xs";
        dungLuongDangHoi = "64";
        yDinhDangHoi = "";
        return "Dạ tầm 3 - 6 triệu bên em có iPhone Xs 64GB, giá gần 3 triệu ạ";
    }


    // ========================================================
    // 4 - 7 TRIỆU
    // ========================================================

    if (
        cauHoi.includes("4-7m") ||
        cauHoi.includes("4 - 7m") ||
        cauHoi.includes("4 đến 7m") ||
        cauHoi.includes("4 den 7m") ||
        cauHoi.includes("4-7 triệu") ||
        cauHoi.includes("4 - 7 triệu") ||
        cauHoi.includes("4 đến 7 triệu") ||
        cauHoi.includes("4 den 7 trieu")
    ) {
        sanPhamDangHoi = "iphone 12";
        dungLuongDangHoi = "64";
        yDinhDangHoi = "";
        return "Dạ tầm 4 - 7 triệu bên em có iPhone 12 64GB, giá khoảng 7 triệu ạ";
    }


    // ========================================================
    // 7 - 10 TRIỆU
    // ========================================================

    if (
        cauHoi.includes("7-10m") ||
        cauHoi.includes("7 - 10m") ||
        cauHoi.includes("7 đến 10m") ||
        cauHoi.includes("7 den 10m") ||
        cauHoi.includes("7-10 triệu") ||
        cauHoi.includes("7 - 10 triệu") ||
        cauHoi.includes("7 đến 10 triệu") ||
        cauHoi.includes("7 den 10 trieu")
    ) {
        sanPhamDangHoi = "iphone 13";
        dungLuongDangHoi = "128";
        yDinhDangHoi = "";

        return "Dạ tầm 7 - 10 triệu bên em có iPhone 13 128GB và 256GB, giá khoảng 8 - 9 triệu ạ";
    }


    // ========================================================
    // 10 - 13 TRIỆU
    // ========================================================

    if (
        cauHoi.includes("10-13m") ||
        cauHoi.includes("10 - 13m") ||
        cauHoi.includes("10 đến 13m") ||
        cauHoi.includes("10 den 13m") ||
        cauHoi.includes("10-13 triệu") ||
        cauHoi.includes("10 - 13 triệu") ||
        cauHoi.includes("10 đến 13 triệu") ||
        cauHoi.includes("10 den 13 trieu")
    ) {
        sanPhamDangHoi = "iphone 15";
        dungLuongDangHoi = "256";
        yDinhDangHoi = "";

        return "Dạ tầm 10 - 13 triệu bên em có iPhone 15 256GB và iPhone 15 Pro 256GB, giá khoảng 10 - 13 triệu ạ";
    }


    // ========================================================
    // 13 - 20 TRIỆU
    // ========================================================

    if (
        cauHoi.includes("13-20m") ||
        cauHoi.includes("13 - 20m") ||
        cauHoi.includes("13 đến 20m") ||
        cauHoi.includes("13 den 20m") ||
        cauHoi.includes("13-20 triệu") ||
        cauHoi.includes("13 - 20 triệu") ||
        cauHoi.includes("13 đến 20 triệu") ||
        cauHoi.includes("13 den 20 trieu")
    ) {
        sanPhamDangHoi = "iphone 15 pro max";
        dungLuongDangHoi = "1TB";
        yDinhDangHoi = "";

        return "Dạ tầm 13 - 20 triệu bên em có iPhone 15 Pro 256GB và iPhone 15 Pro Max 1TB, giá khoảng 13 - 18 triệu ạ";
    }


    // ========================================================
    // TRÊN 20 TRIỆU
    // ========================================================

    if (
        cauHoi.includes("trên 20") ||
        cauHoi.includes("tren 20") ||
        cauHoi.includes("trên 20m") ||
        cauHoi.includes("tren 20m") ||
        cauHoi.includes("trên 20 triệu") ||
        cauHoi.includes("tren 20 trieu")
    ) {
        sanPhamDangHoi = "iphone 17 pro max";
        dungLuongDangHoi = "512";
        yDinhDangHoi = "";

        return "Dạ trên 20 triệu anh có thể tham khảo iPhone 17 Pro Max 512GB, giá khoảng 30 - 31 triệu ạ";
    }


    // ========================================================
    // DƯỚI 4 TRIỆU
    // ========================================================

    if (
        cauHoi.includes("dưới 4") ||
        cauHoi.includes("duoi 4") ||
        cauHoi.includes("dưới 4m") ||
        cauHoi.includes("duoi 4m") ||
        cauHoi.includes("dưới 4 triệu") ||
        cauHoi.includes("duoi 4 trieu")
    ) {
        sanPhamDangHoi = "iphone xs";
        dungLuongDangHoi = "64";
        yDinhDangHoi = "";

        return "Dạ dưới 4 triệu bên em có iPhone Xs 64GB, giá gần 3 triệu ạ";
    }


    // ========================================================
    // SỐ khác
    // ========================================================

    if (
        cauHoi.includes("1m") ||
        cauHoi.includes("1 triệu") ||
        cauHoi.includes("1 trieu")
    ) {
        sanPhamDangHoi = "iphone xs";
        dungLuongDangHoi = "64";
        yDinhDangHoi = "";

        return "Dạ tầm 1 triệu hiện bên em chưa có máy phù hợp ạ. Anh có thể tham khảo iPhone Xs gần 3 triệu ạ";
    }


    if (
        cauHoi.includes("2m") ||
        cauHoi.includes("2 triệu") ||
        cauHoi.includes("2 trieu")
    ) {
        sanPhamDangHoi = "iphone xs";
        dungLuongDangHoi = "64";
        yDinhDangHoi = "";

        return "Dạ tầm 2 triệu anh có thể tham khảo iPhone Xs 64GB, giá gần 3 triệu ạ";
    }


    if (
        cauHoi.includes("3m") ||
        cauHoi.includes("3 triệu") ||
        cauHoi.includes("3 trieu")
    ) {
        sanPhamDangHoi = "iphone xs";
        dungLuongDangHoi = "64";
        yDinhDangHoi = "";

        return "Dạ tầm 3 triệu anh có thể tham khảo iPhone Xs 64GB ạ";
    }


    if (
        cauHoi.includes("4m") ||
        cauHoi.includes("4 triệu") ||
        cauHoi.includes("4 trieu")
    ) {
        sanPhamDangHoi = "iphone xs";
        dungLuongDangHoi = "64";
        yDinhDangHoi = "";

        return "Dạ tầm 4 triệu anh có thể tham khảo iPhone Xs 64GB, giá gần 3 triệu ạ";
    }


    if (
        cauHoi.includes("5m") ||
        cauHoi.includes("5 triệu") ||
        cauHoi.includes("5 trieu")
    ) {

        sanPhamDangHoi = "iphone 12";
        dungLuongDangHoi = "64";
        yDinhDangHoi = "";

        return "Dạ tầm 5 triệu hiện bên em có iPhone Xs gần 3 triệu, nếu anh cố thêm có thể tham khảo iPhone 12 64GB khoảng 7 triệu ạ";
    }


    if (
        cauHoi.includes("6m") ||
        cauHoi.includes("6 triệu") ||
        cauHoi.includes("6 trieu")
    ) {

        sanPhamDangHoi = "iphone 12";
        dungLuongDangHoi = "64";
        yDinhDangHoi = "";

        return "Dạ tầm 6 triệu anh có thể tham khảo iPhone 12 64GB, giá khoảng 7 triệu ạ";
    }


    if (
        cauHoi.includes("8m") ||
        cauHoi.includes("8 triệu") ||
        cauHoi.includes("8 trieu")
    ) {

        sanPhamDangHoi = "iphone 13";
        dungLuongDangHoi = "128";
        yDinhDangHoi = "";

        return "Dạ tầm 8 triệu anh có thể tham khảo iPhone 13 128GB ạ";
    }


    if (
        cauHoi.includes("9m") ||
        cauHoi.includes("9 triệu") ||
        cauHoi.includes("9 trieu")
    ) {
        sanPhamDangHoi = "iphone 13";
        dungLuongDangHoi = "128";
        yDinhDangHoi = "";

        return "Dạ tầm 9 triệu anh có thể tham khảo iPhone 13 128GB hoặc 256GB ạ";
    }


    if (
        cauHoi.includes("10m") ||
        cauHoi.includes("10 triệu") ||
        cauHoi.includes("10 trieu")
    ) {
        sanPhamDangHoi = "iphone 15";
        dungLuongDangHoi = "256";
        yDinhDangHoi = "";

        return "Dạ tầm 10 triệu anh có thể tham khảo iPhone 15 256GB ạ";
    }


    if (
        cauHoi.includes("12m") ||
        cauHoi.includes("12 triệu") ||
        cauHoi.includes("12 trieu")
    ) {

        sanPhamDangHoi = "iphone 15 pro";
        dungLuongDangHoi = "256";
        yDinhDangHoi = "";

        return "Dạ tầm 12 triệu anh có thể tham khảo iPhone 15 Pro 256GB ạ";
    }


    if (
        cauHoi.includes("15m") ||
        cauHoi.includes("15 triệu") ||
        cauHoi.includes("15 trieu")
    ) {

        sanPhamDangHoi = "iphone 15 pro max";
        dungLuongDangHoi = "1TB";
        yDinhDangHoi = "";

        return "Dạ tầm 15 triệu anh có thể tham khảo iPhone 15 Pro Max 1TB ạ";
    }


    return "Dạ anh cho em biết khoảng ngân sách cụ thể, ví dụ 2 - 5 triệu, để em tư vấn máy phù hợp ạ";
}


// ============================================================
// TRẢ LỜI THEO SẢN PHẨM + DUNG LƯỢNG
// ============================================================

function traLoiTheoSanPham() {

    // ========================================================
    // IPHONE XS
    // ========================================================

    if (sanPhamDangHoi === "iphone xs") {
        if (dungLuongDangHoi === "64") {
            return "Dạ iPhone Xs 64GB bên em còn, giá loanh quanh 2 - 3 triệu ạ";
        }

        return "Dòng này nhà em chỉ còn bản 64GB thôi ạ, giá cũng không chênh nhiều";
    }


    // ========================================================
    // IPHONE 12
    // ========================================================

    if (sanPhamDangHoi === "iphone 12") {
        if (dungLuongDangHoi === "64") {
            return "Dạ iPhone 12 64GB bên em còn, giá loanh quanh 7 triệu ạ";
        }

        return "Dòng này nhà em chỉ còn bản 64GB thôi ạ, giá cũng không chênh nhiều";
    }


    // ========================================================
    // IPHONE 13
    // ========================================================

    if (sanPhamDangHoi === "iphone 13") {
        if (
            dungLuongDangHoi === "128" ||
            dungLuongDangHoi === "256"
        ) {
            return "Dạ iPhone 13 " + dungLuongDangHoi + "GB bên em còn, giá loanh quanh 8 - 9 triệu ạ";
        }

        return "Dòng này nhà em chỉ còn bản 128GB với 256GB thôi ạ, giá cũng không chênh nhiều";
    }


    // ========================================================
    // IPHONE 15
    // ========================================================

    if (sanPhamDangHoi === "iphone 15") {
        if (dungLuongDangHoi === "256") {
            return "Dạ iPhone 15 256GB bên em còn, giá loanh quanh 10 - 11 triệu ạ";
        }

        return "Dòng này nhà em chỉ còn bản 256GB thôi ạ, giá cũng không chênh nhiều";
    }


    // ========================================================
    // IPHONE 15 PRO
    // ========================================================

    if (sanPhamDangHoi === "iphone 15 pro") {
        if (dungLuongDangHoi === "256") {
            return "Dạ iPhone 15 Pro 256GB bên em còn, giá loanh quanh 12 - 13 triệu ạ";
        }

        return "Dòng này nhà em chỉ còn bản 256GB thôi ạ, giá cũng không chênh nhiều";
    }


    // ========================================================
    // IPHONE 15 PRO MAX
    // ========================================================

    if (sanPhamDangHoi === "iphone 15 pro max") {
        if (dungLuongDangHoi === "1TB") {
            return "Dạ iPhone 15 Pro Max 1TB bên em còn, giá loanh quanh 17 - 18 triệu ạ";
        }

        return "Dòng này nhà em chỉ còn bản 1TB thôi ạ, giá cũng không chênh nhiều";
    }


    // ========================================================
    // IPHONE 17 PRO MAX
    // ========================================================

    if (sanPhamDangHoi === "iphone 17 pro max") {
        if (dungLuongDangHoi === "512") {
            return "Dạ iPhone 17 Pro Max 512GB bên em còn, giá loanh quanh 30 - 31 triệu ạ";
        }

        return "Dòng này nhà em chỉ còn bản 512GB thôi ạ, giá cũng không chênh nhiều";
    }

    return "Dạ em chưa tìm thấy sản phẩm này ạ";
}


// ============================================================
// TRẢ LỜI GIÁ
// ============================================================

function traLoiGia() {

    // IPHONE XS

    if (sanPhamDangHoi === "iphone xs") {

        if (
            dungLuongDangHoi === "" ||
            dungLuongDangHoi === "64"
        ) {
            return "Dạ iPhone Xs 64GB giá loanh quanh 2 - 3 triệu ạ";
        }

        return "Dạ iPhone Xs bên em chỉ có bản 64GB, giá gần 3 triệu ạ";
    }


    // IPHONE 12

    if (sanPhamDangHoi === "iphone 12") {

        if (
            dungLuongDangHoi === "" ||
            dungLuongDangHoi === "64"
        ) {
            return "Dạ iPhone 12 64GB giá loanh quanh 7 triệu ạ";
        }

        return "Dạ iPhone 12 bên em chỉ có bản 64GB, giá khoảng 7 triệu ạ";
    }


    // IPHONE 13

    if (sanPhamDangHoi === "iphone 13") {

        if (
            dungLuongDangHoi === "128" ||
            dungLuongDangHoi === "256"
        ) {
            return "Dạ iPhone 13 " + dungLuongDangHoi + "GB giá loanh quanh 8 - 9 triệu ạ";
        }

        if (dungLuongDangHoi === "") {
            return "Dạ iPhone 13 bên em có bản 128GB và 256GB, giá loanh quanh 8 - 9 triệu ạ";
        }

        return "Dạ iPhone 13 bên em có bản 128GB và 256GB, giá loanh quanh 8 - 9 triệu ạ";
    }


    // IPHONE 15

    if (sanPhamDangHoi === "iphone 15") {
        if (
            dungLuongDangHoi === "" ||
            dungLuongDangHoi === "256"
        ) {
            return "Dạ iPhone 15 256GB giá loanh quanh 10 - 11 triệu ạ";
        }

        return "Dạ iPhone 15 bên em chỉ có bản 256GB, giá khoảng 10 - 11 triệu ạ";
    }


    // IPHONE 15 PRO

    if (sanPhamDangHoi === "iphone 15 pro") {
        if (
            dungLuongDangHoi === "" ||
            dungLuongDangHoi === "256"
        ) {
            return "Dạ iPhone 15 Pro 256GB giá loanh quanh 12 - 13 triệu ạ";
        }

        return "Dạ iPhone 15 Pro bên em chỉ có bản 256GB, giá khoảng 12 - 13 triệu ạ";
    }


    // IPHONE 15 PRO MAX

    if (sanPhamDangHoi === "iphone 15 pro max") {
        if (
            dungLuongDangHoi === "" ||
            dungLuongDangHoi === "1TB"
        ) {
            return "Dạ iPhone 15 Pro Max 1TB giá loanh quanh 17 - 18 triệu ạ";
        }

        return "Dạ iPhone 15 Pro Max bên em chỉ có bản 1TB, giá khoảng 17 - 18 triệu ạ";
    }


    // IPHONE 17 PRO MAX

    if (sanPhamDangHoi === "iphone 17 pro max") {
        if (
            dungLuongDangHoi === "" ||
            dungLuongDangHoi === "512"
        ) {
            return "Dạ iPhone 17 Pro Max 512GB giá loanh quanh 30 - 31 triệu ạ";
        }

        return "Dạ iPhone 17 Pro Max bên em chỉ có bản 512GB, giá khoảng 30 - 31 triệu ạ";
    }


    return "Dạ anh muốn hỏi giá iPhone nào ạ";
}


// ============================================================
// TRẢ LỜI DUNG LƯỢNG
// ============================================================

function traLoiDungLuong() {
    if (sanPhamDangHoi === "iphone xs") {
        return "Dạ iPhone Xs bên em chỉ còn bản 64GB thôi ạ";
    }


    if (sanPhamDangHoi === "iphone 12") {
        return "Dạ iPhone 12 bên em chỉ còn bản 64GB thôi ạ";
    }


    if (sanPhamDangHoi === "iphone 13") {
        return "Dạ iPhone 13 bên em còn bản 128GB với 256GB ạ";
    }


    if (sanPhamDangHoi === "iphone 15") {
        return "Dạ iPhone 15 bên em chỉ còn bản 256GB thôi ạ";
    }


    if (sanPhamDangHoi === "iphone 15 pro") {
        return "Dạ iPhone 15 Pro bên em chỉ còn bản 256GB thôi ạ";
    }

    if (sanPhamDangHoi === "iphone 15 pro max") {
        return "Dạ iPhone 15 Pro Max bên em chỉ còn bản 1TB thôi ạ";
    }


    if (sanPhamDangHoi === "iphone 17 pro max") {
        return "Dạ iPhone 17 Pro Max bên em chỉ còn bản 512GB thôi ạ";
    }

    return "Dạ anh đang hỏi dung lượng của iPhone nào ạ";
}


// ============================================================
// FORM CHAT
// ============================================================

chatForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const cauHoi = chatInput.value.trim();
    if (cauHoi === "") {
        return;
    }

    guiTinNhan(cauHoi);
});


chatInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        chatForm.dispatchEvent(new Event("submit"));
    }
});