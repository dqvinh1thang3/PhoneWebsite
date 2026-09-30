//nối html:
const cartList = document.querySelector('.danhsach');
const danhSachGioHang = JSON.parse(localStorage.getItem("gioHang")) || [];
const totalPrice = document.querySelector('.total-price');

function kiemTraGioHang() {
    if (danhSachGioHang.length === 0) {
        cartList.innerHTML = `
            <div class="empty-cart">
                <h2>GIỎ HÀNG ĐANG TRỐNG</h2>
                <p>Bấm " Tiếp tục mua sắm " để chọn sản phẩm.</p>
            </div>`;
    }
}
kiemTraGioHang()

function capNhatGioHang() {
    let tongSoLuong = 0;

    danhSachGioHang.forEach(function(sanpham) {
        tongSoLuong += sanpham.soLuong;
    });

    localStorage.setItem("soLuongGio", tongSoLuong);
}
/* ========
    ten:
    gia: 
    anh: 
    bonho: 
    capsac:
    hz: 
 ===========*/
 //==== HÀM SUM TÍNH XÈNG ===
function Sum() {
    let tongTien = 0;

    danhSachGioHang.forEach(function(sanpham) {
        const gia = parseInt(sanpham.gia.replace(/\D/g, ""));
        tongTien += gia * sanpham.soLuong;
    });

    totalPrice.innerHTML = tongTien.toLocaleString("vi-VN") + "đ";
}

//==== THÊM BỚT SP VÀ TÍNH XÈNG GIỎ HÀNG ====
danhSachGioHang.forEach(function(sanpham) {
    const sanPham = document.createElement("div");
    sanPham.classList.add("cart-product");
    
    //in
    sanPham.innerHTML = `
        <img src="${sanpham.anh}" alt="${sanpham.ten}">
        <h3>${sanpham.ten}</h3>
        <p>${sanpham.gia}</p>

        <div class="soluong">
            <button class="tru">−</button>
            <span>${sanpham.soLuong}</span>
            <button class="cong">+</button>
        </div>

        <button class="delete-button">XÓA</button>
    `;
    
    const nutXoa = sanPham.querySelector('.delete-button');
    const nutTru = sanPham.querySelector('.tru');
    const nutCong = sanPham.querySelector('.cong');
    const hienSoLuong = sanPham.querySelector('.soluong span');
    
    nutCong.addEventListener('click', function() {
        sanpham.soLuong++;
        hienSoLuong.innerHTML = sanpham.soLuong;

        localStorage.setItem("gioHang", JSON.stringify(danhSachGioHang));
        Sum();
        kiemTraGioHang();
    });

    nutTru.addEventListener('click', function() {
        sanpham.soLuong--;
        if (sanpham.soLuong == 0) {
            const viTri = danhSachGioHang.indexOf(sanpham);

            danhSachGioHang.splice(viTri, 1);
            sanPham.remove();
            kiemTraGioHang();
        } else {
            hienSoLuong.innerHTML = sanpham.soLuong;
        }

        localStorage.setItem("gioHang", JSON.stringify(danhSachGioHang)); // lưu
        capNhatGioHang();
        Sum();
        kiemTraGioHang();
    });

    nutXoa.addEventListener('click', function() {
        const viTri = danhSachGioHang.indexOf(sanpham);
        danhSachGioHang.splice(viTri, 1); //xóa
        localStorage.setItem("gioHang", JSON.stringify(danhSachGioHang));
        sanPham.remove();
        capNhatGioHang();
        Sum();
        kiemTraGioHang();
    });

    cartList.appendChild(sanPham); //đưa sp vào
});
Sum();

// Back về shop
const backShop = document.querySelector('.back-shop');

backShop.addEventListener('click', function() {
    window.location.href = "card.html";
});
