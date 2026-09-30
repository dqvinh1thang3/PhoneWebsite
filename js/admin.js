
const isAdmin = localStorage.getItem("isAdmin");
if (isAdmin !== "true") {
    window.location.href = "login.html";
}

/* ========================================================
======================= CHUYỂN MỤC ====================== */
const menuItems = document.querySelectorAll(".menu-item");
const pages = document.querySelectorAll(".page");
menuItems.forEach(function(menuItem) {

    menuItem.addEventListener("click", function() {
        const pageCanMo = menuItem.dataset.page;

        menuItems.forEach(function(item) {
            item.classList.remove("active");
        });

        pages.forEach(function(page) {
            page.classList.remove("active");
        });

        menuItem.classList.add("active");
        document.querySelector("#" + pageCanMo).classList.add("active");
    });

});

/* ========================================================
======================= ĐƠN HÀNG ====================== */
const orderList = document.querySelector(".order-list");
const danhSachDonHang = JSON.parse(localStorage.getItem("danhSachDonHang")) || [];

// === HÀM TRỪ KHO ===
function truKho(donHang) {

    const danhSachSanPhamKho = JSON.parse(localStorage.getItem("danhSachSanPham")) || [];
    donHang.sanPham.forEach(function(sanPhamDon) {
        const sanPhamKho = danhSachSanPhamKho.find(function(sanPham) {
            return sanPham.ten === sanPhamDon.ten &&
                   sanPham.bonho === sanPhamDon.bonho;
        });

        if (sanPhamKho) {
            sanPhamKho.tonKho -= sanPhamDon.soLuong;
        }

    });

    localStorage.setItem("danhSachSanPham", JSON.stringify(danhSachSanPhamKho));
    donHang.daTruKho = true;
}
// hàm hoàn lại nếu hủy đơn:
function hoanKho(donHang) {
    const danhSachSanPhamKho = JSON.parse(localStorage.getItem("danhSachSanPham")) || [];

    donHang.sanPham.forEach(function(sanPhamDon) {
        const sanPhamKho = danhSachSanPhamKho.find(function(sanPham) {
            return sanPham.ten === sanPhamDon.ten &&
                   sanPham.bonho === sanPhamDon.bonho;
        });

        if (sanPhamKho) {
            sanPhamKho.tonKho += sanPhamDon.soLuong;
        }
    });

    localStorage.setItem("danhSachSanPham",JSON.stringify(danhSachSanPhamKho));
    donHang.daTruKho = false;
}
//=============================
// TỔNG QUAN:
const tongDonHang = danhSachDonHang.length;
let donDangGiao = 0;
let donDaGiao = 0;
let donDaHuy = 0;
let tongDoanhThu = 0;

danhSachDonHang.forEach(function(donHang) {
    if (donHang.trangThai === "dang_van_chuyen") {
        donDangGiao++;
    }

    if (donHang.trangThai === "giao_thanh_cong") {
        donDaGiao++;
        tongDoanhThu += donHang.tongTien;
    }

    if (donHang.trangThai === "da_huy") {
        donDaHuy++;
    }
});

document.querySelector("#tong-don-hang").innerHTML = tongDonHang;
document.querySelector("#don-dang-giao").innerHTML = donDangGiao;
document.querySelector("#don-da-giao").innerHTML = donDaGiao;
document.querySelector("#don-da-huy").innerHTML = donDaHuy;
document.querySelector("#tong-doanh-thu").innerHTML = tongDoanhThu.toLocaleString("vi-VN") + "đ";

// ĐƠN HÀNG:
danhSachDonHang.forEach(function(donHang) {
    const order = document.createElement("div");
    order.classList.add("order");
    let tenPhuongThucThanhToan = "Chưa có";

    if (donHang.phuongThucThanhToan === "cod") {
        tenPhuongThucThanhToan = "Trực tiếp";
    }
    if (donHang.phuongThucThanhToan === "chuyen_khoan") {
        tenPhuongThucThanhToan = "Chuyển khoản";
    }

    order.innerHTML = `
        <div class="order-top">
            <h3>${donHang.maDon}</h3>
            <select class="order-status">
                <option value="da_dat">CHUẨN BỊ HÀNG</option>
                <option value="dang_van_chuyen">ĐANG VẬN CHUYỂN</option>
                <option value="giao_thanh_cong">GIAO THÀNH CÔNG</option>
                <option value="da_huy">ĐÃ HỦY</option>
            </select>
        </div>


        <div class="order-info">
            <p>Khách hàng: ${donHang.thongTinKhachHang.hoTen}</p>
            <p>Số điện thoại: ${donHang.thongTinKhachHang.soDienThoai}</p>
            <p>Địa chỉ: ${donHang.thongTinKhachHang.diaChi}</p>
            <p>Thời gian: ${donHang.ngayDat}</p>
        </div>


        <div class="payment-info">
            <p>Phương thức thanh toán: ${tenPhuongThucThanhToan}</p>
            <p> | </p>
            <p>Trạng thái thanh toán:
                <span class="payment-status ${
                    donHang.trangThaiThanhToan === "da_thanh_toan"
                    ? "da-thanh-toan"
                    : "chua-thanh-toan"
                }">
                    ${
                        donHang.trangThaiThanhToan === "da_thanh_toan"
                        ? "Đã thanh toán"
                        : "Chưa thanh toán"
                    }
                </span>
            </p>
        </div>


        <div class="order-products">
            <p>Sản phẩm:</p>
            ${donHang.sanPham.map(function(sanpham) {
                return `
                    <div class="order-product">
                        <span>${sanpham.ten} (${sanpham.bonho})</span>
                        <span>Đơn giá: ${sanpham.gia.toLocaleString("vi-VN")}</span>
                        <span>x${sanpham.soLuong}</span>
                    </div>
                `;
            }).join("")}
        </div>


        <div class="order-price">
            <span>
                Tổng tiền:
                ${donHang.tongTien.toLocaleString("vi-VN")}đ
            </span>

            <button class="save-status">
                LƯU
            </button>
        </div>`;

    orderList.appendChild(order);
    const orderStatus = order.querySelector(".order-status");
    const saveStatus = order.querySelector(".save-status");

    orderStatus.value = donHang.trangThai;
    let trangThaiBanDau = donHang.trangThai;

    function doiMauTrangThai() {
        orderStatus.classList.remove(
            "status-chuan-bi",
            "status-van-chuyen",
            "status-thanh-cong",
            "status-huy"
        );
        if (orderStatus.value === "da_dat") {
            orderStatus.classList.add("status-chuan-bi");
        }
        if (orderStatus.value === "dang_van_chuyen") {
            orderStatus.classList.add("status-van-chuyen");
        }
        if (orderStatus.value === "giao_thanh_cong") {
            orderStatus.classList.add("status-thanh-cong");
        }
        if (orderStatus.value === "da_huy") {
            orderStatus.classList.add("status-huy");
        }
    }
    doiMauTrangThai();

    orderStatus.addEventListener("change", function() {

        if (orderStatus.value !== trangThaiBanDau) {
            saveStatus.classList.add("changed");
        } else {
            saveStatus.classList.remove("changed");
        }

        doiMauTrangThai();

    });

    saveStatus.addEventListener("click", function() {
        if (orderStatus.value === trangThaiBanDau) {
            return;
        }
        if (orderStatus.value === "dang_van_chuyen" && !donHang.daTruKho) {
            truKho(donHang);
        }
        if (orderStatus.value === "da_huy" && donHang.daTruKho) {
            hoanKho(donHang);
        }

        donHang.trangThai = orderStatus.value;
        if (orderStatus.value === "giao_thanh_cong") {
            donHang.trangThaiThanhToan = "da_thanh_toan";
        }

        localStorage.setItem("danhSachDonHang", JSON.stringify(danhSachDonHang));
        trangThaiBanDau = orderStatus.value;
        saveStatus.classList.remove("changed");
    });
    
});

/* ================= TỒN KHO ================= */

const inventoryList = document.querySelector(".inventory-list");
const danhSachSanPhamMacDinh = [
    {
        ten: "iPhone Xs",
        bonho: "64",
        tonKho: 3
    },
    {
        ten: "iPhone 12",
        bonho: "64",
        tonKho: 5
    },
    {
        ten: "iPhone 13",
        bonho: "128",
        tonKho: 6
    },
    {
        ten: "iPhone 13",
        bonho: "256",
        tonKho: 4
    },
    {
        ten: "iPhone 15",
        bonho: "256",
        tonKho: 5
    },
    {
        ten: "iPhone 15 Pro",
        bonho: "256",
        tonKho: 4
    },
    {
        ten: "iPhone 15 Pro Max",
        bonho: "1TB",
        tonKho: 3
    },
    {
        ten: "iPhone 17 Pro Max",
        bonho: "512",
        tonKho: 2
    }
];
let danhSachSanPham =
    JSON.parse(localStorage.getItem("danhSachSanPham")) || [];

if (danhSachSanPham.length === 0) {
    danhSachSanPham = danhSachSanPhamMacDinh;
    localStorage.setItem("danhSachSanPham", JSON.stringify(danhSachSanPham));
}

danhSachSanPham.forEach(function(sanPham) {
    const inventoryItem = document.createElement("div");
    inventoryItem.classList.add("inventory-item");
    inventoryItem.innerHTML = `

        <h3>${sanPham.ten}</h3>
        <p class="inventory-storage">
            ${sanPham.bonho}
        </p>
        <p class="inventory-stock">
            Tồn kho: <strong>${sanPham.tonKho}</strong>
        </p>


        <div class="inventory-control">
            <button class="inventory-minus">-</button>
            <span>${sanPham.tonKho}</span>
            <button class="inventory-plus">+</button>
        </div>


        <button class="inventory-save">
            LƯU
        </button>
    `;


    inventoryList.appendChild(inventoryItem);
    const minusButton = inventoryItem.querySelector(".inventory-minus");
    const plusButton = inventoryItem.querySelector(".inventory-plus");
    const stockNumber = inventoryItem.querySelector(".inventory-control span");
    const stockText = inventoryItem.querySelector(".inventory-stock strong");
    const saveButton = inventoryItem.querySelector(".inventory-save");

    let tonKhoBanDau = sanPham.tonKho;
    let tonKhoTam = sanPham.tonKho;

    function capNhatTonKho() {
        stockNumber.innerHTML = tonKhoTam;
        stockText.innerHTML = tonKhoTam;

        if (tonKhoTam !== tonKhoBanDau) {
            saveButton.classList.add("changed");
        } else {
            saveButton.classList.remove("changed");
        }
    }

    minusButton.addEventListener("click", function() {
        if (tonKhoTam > 0) {
            tonKhoTam--;
            capNhatTonKho();
        }
    });

    plusButton.addEventListener("click", function() {
        tonKhoTam++;
        capNhatTonKho();
    });

    saveButton.addEventListener("click", function() {
        if (tonKhoTam === tonKhoBanDau) {
            return;
        }

        sanPham.tonKho = tonKhoTam;
        localStorage.setItem("danhSachSanPham",JSON.stringify(danhSachSanPham));
        tonKhoBanDau = tonKhoTam;
        saveButton.classList.remove("changed");
    });
});

/* ================= KHÁCH HÀNG ================= */

const customerList = document.querySelector(".customer-list");
const danhSachKhachHang = [];
danhSachDonHang.forEach(function(donHang) {

    const thongTinKhachHang = donHang.thongTinKhachHang;
    const khachHangCoSan = danhSachKhachHang.find(function(khachHang) {
        return khachHang.soDienThoai === thongTinKhachHang.soDienThoai;
    });

    if (khachHangCoSan) {

        khachHangCoSan.soDonHang++;

    } else {

        danhSachKhachHang.push({
            hoTen: thongTinKhachHang.hoTen,
            soDienThoai: thongTinKhachHang.soDienThoai,
            diaChi: thongTinKhachHang.diaChi,
            soDonHang: 1
        });

    }

});


danhSachKhachHang.forEach(function(khachHang) {
    const customer = document.createElement("div");
    customer.classList.add("customer");

    customer.innerHTML = `
        <div class="customer-top">
            <h3>${khachHang.hoTen}</h3>
            <span>${khachHang.soDonHang} đơn hàng</span>
        </div>


        <div class="customer-info">
            <p>
                Số điện thoại:
                ${khachHang.soDienThoai}
            </p>

            <p>
                Địa chỉ:
                ${khachHang.diaChi}
            </p>
        </div>
    `;
    customerList.appendChild(customer);
});
/* ================= DOANH THU ================= */

let doanhThuDuoi6 = 0;
let doanhThu6Den9 = 0;
let doanhThu9Den13 = 0;
let doanhThuTren13 = 0;
danhSachDonHang.forEach(function(donHang) {
    if (donHang.trangThai !== "giao_thanh_cong") {
        return;
    }

    donHang.sanPham.forEach(function(sanpham) {
        const gia = parseInt(sanpham.gia.toString().replace(/\D/g, ""));

        if (gia < 6000000) {
            doanhThuDuoi6 += gia * sanpham.soLuong;
        } else if (gia <= 9000000) {
            doanhThu6Den9 += gia * sanpham.soLuong;
        } else if (gia <= 13000000) {
            doanhThu9Den13 += gia * sanpham.soLuong;
        } else {
            doanhThuTren13 += gia * sanpham.soLuong;
        }
    });
});
const cacCot = document.querySelectorAll(".cot");

const danhSachDoanhThu = [
    doanhThuDuoi6,
    doanhThu6Den9,
    doanhThu9Den13,
    doanhThuTren13
];

cacCot.forEach(function(cot, index) {
    const giaTri = cot.querySelector(".gia-tri");
    giaTri.innerHTML = danhSachDoanhThu[index].toLocaleString("vi-VN") + "đ";
});

const doanhThuLonNhat = Math.max(...danhSachDoanhThu);
cacCot.forEach(function(cot, index) {
    const thanhCot = cot.querySelector(".thanh-cot");
    if (doanhThuLonNhat === 0) {
        thanhCot.style.height = "0";
        return;
    }
    const chieuCao = (danhSachDoanhThu[index] / doanhThuLonNhat) * 100;
    thanhCot.style.height = chieuCao + "%";
});
/* ================= CHỌN THÁNG DOANH THU ================= */

const chonThang = document.querySelector(".chon-thang");
const ngayHienTai = new Date();
const thangHienTai = ngayHienTai.getMonth();
const namHienTai = ngayHienTai.getFullYear();

for (let i = 2; i >= 0; i--) {

    let thang = thangHienTai - i;
    let nam = namHienTai;
    if (thang < 0) {
        thang += 12;
        nam--;
    }

    const option = document.createElement("option");
    option.value = (thang+1) + "-" + nam;
    if (i === 0) {
        option.textContent = "Tháng này";
    } else {
       option.textContent = "Tháng " + (thang + 1) + "/" + nam; 
    }

    if (i === 0) {
        option.selected = true;
    }
    chonThang.appendChild(option);
}


function locDonTheoThang() {
    const giaTriThang = chonThang.value;
    const tachThangNam = giaTriThang.split("-");
    const thang = Number(tachThangNam[0]);
    const nam = Number(tachThangNam[1]);
    const donTrongThang = [];
    const donGiaoThanhCong = [];
    let tongDoanhThuThang = 0;

    danhSachDonHang.forEach(function(donHang) {
        const tachNgay = donHang.ngayDat.split(" ");
        const ngayThangNam = tachNgay[1];
        const tachNgayThangNam = ngayThangNam.split("/");
        const thangDon = Number(tachNgayThangNam[1]);
        const namDon = Number(tachNgayThangNam[2]);
       
        if (thangDon === thang && namDon === nam) {
            donTrongThang.push(donHang);

            if (donHang.trangThai === "giao_thanh_cong") {
                donGiaoThanhCong.push(donHang);
                tongDoanhThuThang += donHang.tongTien;
            }
        }
    });
    const danhSachDoanhThuThang =document.querySelector(".danh-sach-doanh-thu-thang");
    const tongDoanhThuThangHienThi = document.querySelector(".tong-doanh-thu-thang strong");
    
    tongDoanhThuThangHienThi.innerHTML = tongDoanhThuThang.toLocaleString("vi-VN") + "đ";

    console.log("Doanh thu tháng:", tongDoanhThuThang);
    console.log("Tháng đang chọn:", thang);
    console.log("Năm đang chọn:", nam);
    console.log("Các đơn trong tháng:", donTrongThang);
    
    danhSachDoanhThuThang.innerHTML = ""; // xóa cũ

    if (donGiaoThanhCong.length === 0) {
        const don = document.createElement("div");

        don.classList.add("don-doanh-thu", "trong");

        don.innerHTML = `<h3>Doanh thu trống</h3>`;
        danhSachDoanhThuThang.appendChild(don);

    } else {
        donGiaoThanhCong.forEach(function(donHang) {
            const don = document.createElement("div");

            don.classList.add("don-doanh-thu");
            don.innerHTML = `
                <h3>${donHang.maDon}</h3>
                <p>Khách hàng: ${donHang.thongTinKhachHang.hoTen}</p>
                <p>Thời gian: ${donHang.ngayDat}</p>
                <p>Tổng tiền: ${donHang.tongTien.toLocaleString("vi-VN")}đ</p>
                <p>Trạng thái: ${donHang.trangThai}</p>
            `;

            danhSachDoanhThuThang.appendChild(don);
        });

    }
}

locDonTheoThang();

chonThang.addEventListener("change", function() {
    locDonTheoThang();
});

// ĐĂNG XUẤT NÈ
const logout = document.querySelector(".logout");
logout.addEventListener("click", function() {

    localStorage.removeItem("isLogin");
    localStorage.removeItem("isAdmin");

    window.location.href = "../html/login.html";

});
