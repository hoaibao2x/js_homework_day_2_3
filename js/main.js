/**
 * Tính tiền lương
 * 
 * Khối 1: Input
 *          soNgayLam
 * 
 * Khói 2: Các bước xử lý
 *          tinhTienLuong = soNgayLam * 100000
 * 
 * Khối 3: Output
 *          tongTienLuong
 * 
 **/

function tinhLuong() {

    // Input
    var soNgayLam = document.getElementById('soNgayLam').value;

    // Process
    var tinhTienLuong = Number(soNgayLam) * 100000;

    // Output
    document.getElementById('tongTienLuong').innerHTML = 'Tổng tiền lương: ' + tinhTienLuong.toLocaleString();

}

document.getElementById('btnTinhToan1').onclick = tinhLuong;



/**
 * Tính giá trị trung bình 5 số thực
 * 
 * Khối 1: Input
 *          soThucMot, soThucHai, soThucBa, soThucBon, soThucNam
 * 
 * Khói 2: Các bước xử lý
 *          tbNamSo = (soThucMot + soThucHai + soThucBa + soThucBon +          soThucNam)
 * 
 * Khối 3: Output
 *          tbNamSo
 **/

function tinhTB() {

    // Input
    var soThucMot = document.getElementById('soThucMot').value;
    var soThucHai = document.getElementById('soThucHai').value;
    var soThucBa = document.getElementById('soThucBa').value;
    var soThucBon = document.getElementById('soThucBon').value;
    var soThucNam = document.getElementById('soThucNam').value;

    // Process
    var tbNamSo = (Number(soThucMot) + Number(soThucHai) + Number(soThucBa) + Number(soThucBon) + Number(soThucNam)) / 5;

    // Output
    document.getElementById('tbNamSo').innerHTML = 'Giá trị trung bình của 5 số thực là : ' + tbNamSo.toFixed(2);

}

document.getElementById('btnTinhToan2').onclick = tinhTB;



/**
 * Quy đổi USD sang VNĐ
 * 
 * Khối 1: Input
 *          tongUSD
 * 
 * Khói 2: Các bước xử lý
 *          tinhVND = tongUSD * 23500
 * 
 * Khối 3: Output
 *          tongVND
 * 
 **/

function doiTien() {
    
    // Input
    var tongUSD = document.getElementById('tongUSD').value;

    // Process
    var tinhVND = Number(tongUSD) * 23500;

    // Output
    document.getElementById('tongVND').innerHTML = 'Sau khi đổi ra VNĐ bạn sẽ có: ' + tinhVND.toLocaleString() + ' VNĐ';

}

document.getElementById('btnTinhToan3').onclick = doiTien;



/**
 * Tính chu vi và diện tích của hình chữ nhật
 * 
 * Khối 1: Input
 *          chieuDaiHCN, chieuRongHCN
 * 
 * Khói 2: Các bước xử lý
 *          chuViHCN = (chieuDaiHCN + chieuRongHCN) * 2
 *          dienTichHCN = chieuDaiHCN * chieuRongHCN
 * 
 * Khối 3: Output
 *          chuViHCN, dienTichHCN
 * 
 **/

function tinhtoanHCN() {
    
    // Input
    var chieuDaiHCN = document.getElementById('chieuDaiHCN').value;
    var chieuRongHCN = document.getElementById('chieuRongHCN').value;

    // Process
    var chuViHCN = (Number(chieuDaiHCN) + Number(chieuRongHCN)) * 2;
    var dienTichHCN = Number(chieuDaiHCN) * Number(chieuRongHCN);

    // Output
    document.getElementById('chuViHCN').innerHTML = 'Chu vi hình chữ nhật: ' + chuViHCN.toFixed(2) + ' cm';
    document.getElementById('dienTichHCN').innerHTML = 'Diện tích hình chữ nhật: ' + dienTichHCN.toFixed(2) + ' cm²';

}

document.getElementById('btnTinhToan4').onclick = tinhtoanHCN;



/**
 * Tính tổng 2 ký số
 * 
 * Khối 1: Input
 *          nhapSo
 * 
 * Khói 2: Các bước xử lý
 *          soHangChuc = Math.floor(nhapSo / 10)
 *          soDonVi = nhapSo % 10
 *          tongKySo = soHangChuc + soDonVi
 * 
 * Khối 3: Output
 *          tongKySo
 * 
 **/

function tong2KS() {
    
    // Input
    var nhapSo = Number(document.getElementById('nhapSo').value);

    // Process
    var soHangChuc = Math.floor(nhapSo / 10);
    var soDonVi = nhapSo % 10;
    var tongKySo = soHangChuc + soDonVi;

    // Output
    document.getElementById('tongKySo').innerHTML = 'Tổng 2 ký số: ' + tongKySo;

}

document.getElementById('btnTinhToan5').onclick = tong2KS;