// ========================Khai Báo=============================
const sanphams = document.querySelectorAll('.product');
const BoLocGia = document.querySelectorAll('input[name="gia"]');

let checkAll = ["", "", "", "",];
/*==================
checkAll[0] = nutgia.value
checkAll[1] = []rom.value
checkAll[2] = nutsac.value
checkAll[3] = nuthz.value  
===============================================================*/
//======================= LỌC GIÁ ==============================
console.log(BoLocGia);
BoLocGia.forEach(function(nutgia) {
    nutgia.addEventListener('change', function() {
        checkAll[0] = nutgia.value;
        loctong();
    });

});
//======================= SẮP XẾP ==============================
const sapxep = document.querySelectorAll('input[name="az"]');
const row = document.querySelector('.row');
sapxep.forEach(function(nut) {
    nut.addEventListener('change', function() {

        const mangsanpham = Array.from(sanphams);

        mangsanpham.sort(function(a, b) {

            const giaA = Number(a.dataset.price);
            const giaB = Number(b.dataset.price);

            if (nut.value == 'az') {
                return giaA - giaB;
            } else {
                return giaB - giaA;
            }

        });

        mangsanpham.forEach(function(sanpham) {
            row.appendChild(sanpham);
        });

    });
});
//======================= ROM ==================================
const bolocrom = document.querySelectorAll('input[name="rom"]');
bolocrom.forEach(function(nutrom) {
    nutrom.addEventListener('change', function() {
        checkAll[1] = [];
        const nutdangchon = document.querySelectorAll('input[name="rom"]:checked');

        nutdangchon.forEach(function(rom) {
            checkAll[1].push(rom.value);
        });
       
        loctong();

    });
});
//======================== Cáp Sạc ============================
const bolocsac = document.querySelectorAll('input[name=charge]');
bolocsac.forEach(function(nutsac) {
    nutsac.addEventListener('change', function() {
        checkAll[2] = nutsac.value
        const capsac = nutsac.value;

        console.log(nutsac.value);
        
        loctong();

    })
});
//==============================================================
//======================= TẦN SỐ QUÉT ==========================
const bolocHz = document.querySelectorAll('input[name=hz]');
bolocHz.forEach(function(nuthz) {
    nuthz.addEventListener('change', function() {
        checkAll[3] = nuthz.value
        const tanso = nuthz.value;

        loctong();

    });
});
//========================== BỘ LỌC TỔNG ===========================
function loctong() {
    let count = 0;
    sanphams.forEach(function(sanpham){
        const gia = Number(sanpham.dataset.price);
        const rom = sanpham.dataset.storage;
        const sac = sanpham.dataset.charge.toLowerCase().replace("-", "");
        const hz = sanpham.dataset.hz;

        let checkGia = false;
        let checkRom = false;
        let checkSac = false;
        let checkHz = false;

// MỨC GIÁ:
        const mucgia = checkAll[0];
        if (mucgia == 'all' || mucgia == '') {
            checkGia = true;

        } else if (mucgia == 'under3') {
            if (gia < 3000) {
                checkGia = true;
            }
        } else if (mucgia == '3-6') {
            if (gia >= 3000 && gia <= 6000) {
                checkGia = true;
            }
        } else if (mucgia == '6-9') {
            if (gia >= 6000 && gia <= 9000) {
                checkGia = true;
            }
        } else if (mucgia == '9-13') {
            if (gia >= 9000 && gia <= 13000) {
                checkGia = true;
            }
        } else if (mucgia == 'over13') {

            if (gia >= 13000) {
                checkGia = true;
            }
        }

// DUNG LƯỢNG:
        const mangRom = checkAll[1];

        if (mangRom.length == 0) {
            checkRom = true;
        } else {
            mangRom.forEach(function(gb) {
                if (rom == gb) {
                    checkRom = true;
                }
            });

        }

// CÁP SẠC:
        const loaiSac = checkAll[2];
        if (loaiSac == '' || loaiSac == 'all') {
            checkSac = true;
        } else if (sac == loaiSac) {
            checkSac = true;
        }

// TẦN SỐ:
        const tanSo = checkAll[3];
        if (tanSo == '' || tanSo == 'all') {
            checkHz = true;
        } else if (hz == tanSo) {
            checkHz = true;
        }

//===== HIỂN THỊ =====
        if (checkGia && checkRom && checkSac && checkHz) {
            sanpham.style.display = "";
            count++;
        } else {
            sanpham.style.display = "none";
        }
    });

    const thongbao = document.querySelector('.no-product');

    if (count == 0) {
        thongbao.innerHTML = "Không có sản phẩm nào như yêu cầu.";
    } else {
        thongbao.innerHTML = "";
    }
}
//===========================================================
//====================== HEADER ==============================
let viTriCu = 0;
window.addEventListener('scroll', function() {
    let viTriHienTai = window.scrollY;

    if (viTriHienTai > viTriCu) {
        document.querySelector('header').classList.add('hide');
    } else {
        document.querySelector('header').classList.remove('hide');
    }
    viTriCu = viTriHienTai;
});
//========================= MODAL ========================

const nutXemThem = document.querySelectorAll('.but-xemthem');
const modal = document.querySelector('.modal');
const nutclose = document.querySelector('.close');
const modalImg = document.querySelector('.modal-img');
const modalName = document.querySelector('.modal-name');
const modalPrice = document.querySelector('.modal-price');
const modalStorage = document.querySelector('.modal-storage');
const modalSac = document.querySelector('.modal-charge');
const modalHz = document.querySelector('.modal-hz');

let anhDangChon; // làm giỏ hàng
let sanPhamDangChon; // lưu thông tin sp giỏ hàng

nutXemThem.forEach(function(nut) {
    nut.addEventListener('click', function() {

        const sanpham = nut.parentElement;

        const ten = sanpham.querySelector('.name').innerHTML;
        const gia = sanpham.querySelector('.price').innerHTML;
        const anh = sanpham.querySelector('img').src;
        const anhSanPham = sanpham.querySelector('img'); // làm giỏ hàng

        const bonho = sanpham.dataset.storage;
        const capsac = sanpham.dataset.charge;
        const hz = sanpham.dataset.hz;

        anhDangChon = anhSanPham;

        sanPhamDangChon = {
            ten: ten,
            gia: gia,
            anh: anh,
            bonho: bonho,
            capsac: capsac,
            hz: hz,
            soLuong: 1
        };

        modalName.innerHTML = ten;
        modalPrice.innerHTML = gia;
        modalImg.src = anh;
        modalStorage.innerHTML = bonho + ' GB';
        modalSac.innerHTML = capsac;
        modalHz.innerHTML = hz + ' hz';

        console.log("Đã bấm XEM THÊM");
        modal.style.display = 'flex';
    });
});

nutclose.addEventListener('click', function() {
    modal.style.display = 'none';
});
//====================== GIỎ HÀNG ==============================

const nutThemGio = document.querySelector('.but-cart');
const nutMuaNgay = document.querySelector('.but-buy');
const cartCount = document.querySelector('.cart-count');
const gioHang = document.querySelector('.cart-float');

let danhSachGioHang = JSON.parse(localStorage.getItem("gioHang")) || [];
let soLuongGio = 0;

danhSachGioHang.forEach(function(sanpham) {
    soLuongGio += sanpham.soLuong;
});

cartCount.innerHTML = soLuongGio;

gioHang.addEventListener('click', function() {
    const isLogin = localStorage.getItem("isLogin");

    if (isLogin !== "true") {
        alert("Vui lòng đăng nhập để xem giỏ hàng!");
        window.location.href = "login.html";
    } else {
        window.open("GioHang.html", "_blank");
    }
});

nutThemGio.addEventListener('click', function() {

    const viTriAnh = anhDangChon.getBoundingClientRect();
    const viTriGio = gioHang.getBoundingClientRect();

    const anhBay = anhDangChon.cloneNode(true);
    document.body.appendChild(anhBay);

    anhBay.style.position = 'fixed';
    anhBay.style.width = '80px';
    anhBay.style.height = '100px';
    anhBay.style.left = viTriAnh.left + 'px';
    anhBay.style.top = viTriAnh.top + 'px';
    anhBay.style.transition = 'all 0.8s ease';

    setTimeout(function() {
        anhBay.style.left = viTriGio.left + 'px';
        anhBay.style.top = viTriGio.top + 'px';

        setTimeout(function() {
            anhBay.remove();
        }, 650);
    }, 50);

    const sanPhamCoSan = danhSachGioHang.find(function(sanpham) {
        return sanpham.ten == sanPhamDangChon.ten;
    });

    if (sanPhamCoSan) {
        sanPhamCoSan.soLuong++;
    } else {
        danhSachGioHang.push(sanPhamDangChon);
    }

    soLuongGio = 0;

    danhSachGioHang.forEach(function(sanpham) {
        soLuongGio += sanpham.soLuong;
    });
    cartCount.innerHTML = soLuongGio;
    localStorage.setItem("gioHang", JSON.stringify(danhSachGioHang));
    modal.style.display = 'none';
});
//====================== MUA NGAY ==============================

nutMuaNgay.addEventListener('click', function() {

    const isLogin = localStorage.getItem("isLogin");

    if (isLogin !== "true") {
        alert("Vui lòng đăng nhập để mua hàng!");
        window.location.href = "login.html";
        return;
    }

    localStorage.setItem("sanPhamMuaNgay",JSON.stringify([sanPhamDangChon]));
    window.location.href = "DatHang.html";
});
//================= MENU TÀI KHOẢN =================

const user = document.querySelector(".user");
const userMenu = document.querySelector(".user-menu");
const userFullname = document.querySelector(".user-fullname");
const userUsername = document.querySelector(".user-username");
const loginAccount = document.querySelector(".login-account");
const logoutAccount = document.querySelector(".logout-account");

user.addEventListener("click", function(event) {

    event.stopPropagation();
    userMenu.style.display = "block";
    const isLogin = localStorage.getItem("isLogin");
    
    if (isLogin === "true") {
        const fullname = localStorage.getItem("fullname");
        const username = localStorage.getItem("username");
        userFullname.innerHTML = fullname;
        userUsername.innerHTML = "TK: " + username;
        loginAccount.style.display = "none";
        logoutAccount.style.display = "block";

    } else {
        userFullname.innerHTML = "Bạn chưa đăng nhập";
        userUsername.innerHTML = "";
        loginAccount.style.display = "block";
        logoutAccount.style.display = "none";
    }
});

document.addEventListener("click", function() {
    userMenu.style.display = "none";

});

loginAccount.addEventListener("click", function() {
    window.location.href = "login.html";

});

logoutAccount.addEventListener("click", function() {
    localStorage.setItem("isLogin", "false");
    localStorage.setItem("isAdmin", "false");
    userMenu.style.display = "none";
    alert("Đã đăng xuất!");

});