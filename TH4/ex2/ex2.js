const buoc1 = document.getElementById('buoc1');
const buoc2 = document.getElementById('buoc2');
const buoc3 = document.getElementById('buoc3');

const btnTiepTheo = document.getElementById('btnTiepTheo');
const btnQuayLai = document.getElementById('btnQuayLai');
const tieuDeBuoc = document.getElementById('tieuDeBuoc');

let buocHienTai = 1;

btnTiepTheo.addEventListener('click', function() {
    if (buocHienTai === 1) {
        let hopLe = true;

        const hoTen = document.getElementById('hoTen').value;
        const ngaySinh = document.getElementById('ngaySinh').value;
        const gioiTinh = document.getElementById('gioiTinh').value;

        if (hoTen === '') {
            document.getElementById('loiHoTen').innerText = 'Vui lòng nhập họ tên';
            hopLe = false;
        } else {
            document.getElementById('loiHoTen').innerText = '';
        }

        if (ngaySinh === '') {
            document.getElementById('loiNgaySinh').innerText = 'Vui lòng chọn ngày sinh';
            hopLe = false;
        } else {
            document.getElementById('loiNgaySinh').innerText = '';
        }

        if (gioiTinh === '') {
            document.getElementById('loiGioiTinh').innerText = 'Vui lòng chọn giới tính';
            hopLe = false;
        } else {
            document.getElementById('loiGioiTinh').innerText = '';
        }

        if (hopLe === true) {
            buocHienTai = 2;
            buoc1.style.display = 'none';
            buoc2.style.display = 'block';
            btnQuayLai.style.display = 'inline-block';
            tieuDeBuoc.innerText = 'Bước 2 / 3';
        }
    }

    else if (buocHienTai === 2) {
        let hopLe = true;

        const email = document.getElementById('email').value;
        const matKhau = document.getElementById('matKhau').value;
        const nhapLai = document.getElementById('nhapLaiMatKhau').value;

        if (email === '') {
            document.getElementById('loiEmail').innerText = 'Vui lòng nhập email';
            hopLe = false;
        } else {
            document.getElementById('loiEmail').innerText = '';
        }

        if (matKhau.length < 6) {
            document.getElementById('loiMatKhau').innerText = 'Mật khẩu phải từ 6 ký tự';
            hopLe = false;
        } else {
            document.getElementById('loiMatKhau').innerText = '';
        }

        if (nhapLai === '' || nhapLai !== matKhau) {
            document.getElementById('loiNhapLai').innerText = 'Mật khẩu không khớp';
            hopLe = false;
        } else {
            document.getElementById('loiNhapLai').innerText = '';
        }

        if (hopLe === true) {
            buocHienTai = 3;
            buoc2.style.display = 'none';
            buoc3.style.display = 'block';
            tieuDeBuoc.innerText = 'Bước 3 / 3';
            btnTiepTheo.innerText = 'Hoàn tất';
            
            document.getElementById('xacNhanHoTen').innerText = document.getElementById('hoTen').value;
            document.getElementById('xacNhanNgaySinh').innerText = document.getElementById('ngaySinh').value;
            document.getElementById('xacNhanGioiTinh').innerText = document.getElementById('gioiTinh').value;
            document.getElementById('xacNhanEmail').innerText = document.getElementById('email').value;
        }
    }

    else if (buocHienTai === 3) {
        alert('Đăng ký thành công!');
    }
});

btnQuayLai.addEventListener('click', function() {
    if (buocHienTai === 2) {
        buocHienTai = 1;
        buoc2.style.display = 'none';
        buoc1.style.display = 'block';
        btnQuayLai.style.display = 'none';
        tieuDeBuoc.innerText = 'Bước 1 / 3';
    } 
    else if (buocHienTai === 3) {
        buocHienTai = 2;
        buoc3.style.display = 'none';
        buoc2.style.display = 'block';
        btnTiepTheo.innerText = 'Tiếp theo';
        tieuDeBuoc.innerText = 'Bước 2 / 3';
    }
});
