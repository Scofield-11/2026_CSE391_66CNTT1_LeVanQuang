const hoTenInput = document.getElementById('hoTen');
const diemInput = document.getElementById('diem');
const btnThem = document.getElementById('btnThem');
const dsSinhVien = document.getElementById('dsSinhVien');
const tongSV = document.getElementById('tongSV');
const diemTB = document.getElementById('diemTB');

const searchName = document.getElementById('searchName');
const filterXepLoai = document.getElementById('filterXepLoai');
const colDiem = document.getElementById('colDiem');

let students = [];

// THÊM MỚI BÀI 1.2
let sortDirection = 'asc'; 

const getXepLoai = (diem) => {
    if (diem >= 8.5) return 'Giỏi';
    if (diem >= 7.0) return 'Khá';
    if (diem >= 5.0) return 'Trung bình';
    return 'Yếu';
};

// SỬA ĐỔI BÀI 1.2
const renderTable = (dataArray) => {
    dsSinhVien.innerHTML = '';
    
    // THÊM MỚI BÀI 1.2
    if (dataArray.length === 0) {
        dsSinhVien.innerHTML = '<tr><td colspan="5">Không có kết quả</td></tr>';
        tongSV.textContent = '0';
        diemTB.textContent = '0.0';
        return;
    }

    let tongDiem = 0;
    dataArray.forEach((sv, index) => {
        tongDiem += sv.diem;
        const tr = document.createElement('tr');
        if (sv.diem < 5.0) tr.classList.add('row-warning');
        
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${sv.hoTen}</td>
            <td>${sv.diem.toFixed(1)}</td>
            <td>${sv.xepLoai}</td>
            <td><button class="btnXoa" data-index="${students.indexOf(sv)}">Xóa</button></td>
        `;
        dsSinhVien.appendChild(tr);
    });

    tongSV.textContent = dataArray.length;
    diemTB.textContent = (tongDiem / dataArray.length).toFixed(1);
};

// THÊM MỚI BÀI 1.2
const applyFilters = () => {
    let filteredStudents = [...students]; 

    const keyword = searchName.value.toLowerCase().trim();
    if (keyword !== '') {
        filteredStudents = filteredStudents.filter(sv => sv.hoTen.toLowerCase().includes(keyword));
    }

    const xepLoaiValue = filterXepLoai.value;
    if (xepLoaiValue !== 'Tất cả') {
        filteredStudents = filteredStudents.filter(sv => sv.xepLoai === xepLoaiValue);
    }

    filteredStudents.sort((a, b) => {
        if (sortDirection === 'asc') return a.diem - b.diem;
        else return b.diem - a.diem;
    });

    renderTable(filteredStudents);
};

const handleAddStudent = () => {
    const hoTen = hoTenInput.value.trim();
    const diemStr = diemInput.value.trim();
    const diem = parseFloat(diemStr);

    if (!hoTen) return alert('Vui lòng nhập họ tên!');
    if (diemStr === '' || isNaN(diem) || diem < 0 || diem > 10) return alert('Điểm không hợp lệ!');

    students.push({ hoTen, diem, xepLoai: getXepLoai(diem) });

    hoTenInput.value = '';
    diemInput.value = '';
    hoTenInput.focus();

    // SỬA ĐỔI BÀI 1.2
    applyFilters(); 
};

btnThem.addEventListener('click', handleAddStudent);

diemInput.addEventListener('keyup', (e) => { 
    if (e.key === 'Enter') handleAddStudent(); 
});

dsSinhVien.addEventListener('click', (e) => {
    if (e.target.classList.contains('btnXoa')) {
        const index = e.target.getAttribute('data-index');
        students.splice(index, 1);
        
        applyFilters(); 
    }
});

// THÊM MỚI BÀI 1.2
searchName.addEventListener('input', applyFilters); 

filterXepLoai.addEventListener('change', applyFilters); 

colDiem.addEventListener('click', () => {
    sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    colDiem.textContent = sortDirection === 'asc' ? 'Điểm ▲' : 'Điểm ▼';
    applyFilters();
});