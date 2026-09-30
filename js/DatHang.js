//==== LẤY DỮ LIỆU GIỎ HÀNG ====
const danhSachGioHang = JSON.parse(localStorage.getItem("gioHang")) || [];

const confirmOrder = document.querySelector(".confirm-order");
if (danhSachGioHang.length === 0) {
    confirmOrder.disabled = true;
    confirmOrder.innerHTML = "GIỎ HÀNG TRỐNG";
}

const orderTotal = document.querySelector(".order-total");
const orderProducts = document.querySelector(".order-products");

//==== HIỂN THỊ SẢN PHẨM ====

danhSachGioHang.forEach(function(sanpham) {
    orderProducts.innerHTML += `
        <div class="order-product">
            <span>${sanpham.ten}</span>
            <span>x${sanpham.soLuong}</span>
        </div>`;
});


//==== TÍNH TỔNG TIỀN ====

function tinhTongTien() {
    let tongTien = 0;
    danhSachGioHang.forEach(function(sanpham) {
        const gia =
            parseInt(sanpham.gia.replace(/\D/g, ""));
        
        tongTien += gia * sanpham.soLuong;
    });
    return tongTien;
}
//==== HIỂN THỊ TỔNG TIỀN ====
const tongTien = tinhTongTien();
orderTotal.innerHTML = tongTien.toLocaleString("vi-VN") + "đ";
//==== POPUP THANH TOÁN ====
const paymentOverlay = document.querySelector(".payment-overlay");
const paymentBox = document.querySelector(".payment-box");
//==== NỘI DUNG THANH TOÁN ====
const codContent = document.querySelector(".cod-content");
const bankBackContent = document.querySelector(".bank-back-content");
const bankChoice = document.querySelector(".bank-choice");
const qrContent = document.querySelector(".qr-content");
//==== NÚT THANH TOÁN ====
const bankButton = document.querySelector(".bank-button");
const backCod = document.querySelector(".back-cod");
const confirmCod = document.querySelector(".confirm-cod");
const confirmBank = document.querySelector(".confirm-bank");


//==== KIỂM TRA THÔNG TIN ====

function kiemTraThongTin() {

    const hoTen = document.querySelector("#hoTen").value.trim();
    const soDienThoai = document.querySelector("#soDienThoai").value.trim();
    const diaChi = document.querySelector("#diaChi").value.trim();

    if (hoTen === "" || soDienThoai === "" || diaChi === "") {
        alert("Vui lòng nhập đầy đủ thông tin nhận hàng!");
        return false;
    }

    return true;
}


//==== MỞ POPUP ====

confirmOrder.addEventListener("click", function() {

    if (!kiemTraThongTin()) {
        return;
    }

    paymentOverlay.style.display = "flex";

});


//==== CHUYỂN SANG THANH TOÁN NGÂN HÀNG ====
bankButton.addEventListener("click", function() {
    codContent.style.display = "none";
    bankBackContent.style.display = "flex";
    bankChoice.style.display = "none";
    qrContent.style.display = "block";
    paymentBox.classList.add("bank-mode");

});

//==== QUAY LẠI THANH TOÁN COD ====
backCod.addEventListener("click", function() {
    codContent.style.display = "flex";
    bankBackContent.style.display = "none";
    bankChoice.style.display = "flex";
    qrContent.style.display = "none";
    paymentBox.classList.remove("bank-mode");
});
//==== ĐẶT HÀNG THÀNH CÔNG ====

function datHangThanhCong(phuongThucThanhToan) {
    let soDon = Number(localStorage.getItem("soDon")) || 22129;
    soDon++;
    localStorage.setItem("soDon", soDon);

    // thông tin người mua đơn đó:
    const hoTen = document.querySelector("#hoTen").value;
    const soDienThoai = document.querySelector("#soDienThoai").value;
    const diaChi = document.querySelector("#diaChi").value;
    const ghiChu = document.querySelector("#ghiChu").value;
    
    // Tạo mã đơn, trạng thái:
    const donHang = {
        maDon: "DH" + soDon,
        sanPham: danhSachGioHang,
        tongTien: tinhTongTien(),
        trangThai: "da_dat",
        ngayDat: new Date().toLocaleString("vi-VN"),

        phuongThucThanhToan: phuongThucThanhToan,
        trangThaiThanhToan: phuongThucThanhToan === "cod"
            ? "chua_thanh_toan"
            : "da_thanh_toan",

        thongTinKhachHang: {
            hoTen: hoTen,
            soDienThoai: soDienThoai,
            diaChi: diaChi,
            ghiChu: ghiChu
        }
    };
    // Danh sách mã đơn:
    let danhSachDonHang = JSON.parse(localStorage.getItem("danhSachDonHang")) || [];
    danhSachDonHang.push(donHang);
    localStorage.setItem("danhSachDonHang", JSON.stringify(danhSachDonHang));

    //================================================
    paymentOverlay.style.display = "none";
    localStorage.removeItem("gioHang");
    localStorage.setItem("soLuongGio", 0);

    alert("Đặt hàng thành công!\n\n" +
        "Lưu ý: Quay video khi bóc hộp sản phẩm!! " +
        "Nếu lỗi sẽ được hoàn 100% tiền hoặc đổi sản phẩm mới ở store."
    );
    window.location.href = "GioHang.html"; //reload =)))
}


//==== XÁC NHẬN COD ====

confirmCod.addEventListener("click", function() {
    datHangThanhCong("cod");
});


//==== XÁC NHẬN NGÂN HÀNG ====

confirmBank.addEventListener("click", function() {
    datHangThanhCong("chuyen_khoan");
});