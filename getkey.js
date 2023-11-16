const listDiv = document.getElementsByClassName('__question__ office-form-question');
let listkey = [];
for (let i = 0; i < 120; i++) {
    const inputs = listDiv[i].querySelectorAll('input');

    for (let k = 0; k < inputs.length; k++) {
        if (listDiv[i].querySelectorAll('input')[k].checked) {
            listkey.push({ key: listDiv[i].querySelector('.text-format-content').textContent, value: inputs[k].value });
        }
    }
}

keys = [
    {
        key: '1.Luật Parkinson của GS. Cyril Northcote Parkinson cho rằng mối quan hệ giữa sự nỗ lực và thời gian làm việc có mối quan hệ như thế nào?Một lựa chọn. ',
        value: 'Thời gian càng dài, sự nỗ lực càng giảm',
    },
    {
        key: '2.Điểm mốc lịch sử quan trọng năm 2023 là?Một lựa chọn. ',
        value: 'Trường Đại học Bách Khoa Hà Nội chuyển thành Đại học Bách Khoa Hà Nội',
    },
    {
        key: '3.Sinh viên nạp tiền thẻ gửi xe đạp/ xe máy ở đâuMột lựa chọn. ',
        value: 'Trung tâm Dịch vụ và Hỗ trợ Bách Khoa',
    },
    {
        key: '4.Các dịch vụ của Thư viện Tạ Quang BửuMột lựa chọn. ',
        value: 'Tất cả các phương án trên',
    },
    {
        key: '5.Theo khung đánh giá kết quả rèn luyện sinh viên năm 2023-2024, tiêu chí có các thành tích trong học tập, NCKH và rèn luyện được cộng tối đaMột lựa chọn. ',
        value: '3 điểm',
    },
    {
        key: '6.Bạn đọc tìm hiểu các nội quy và quy trình hướng dẫn sử dụng dịch vụ thư viện ở đâuMột lựa chọn. ',
        value: 'Trên cổng thông tin Thư viện : http://library.hust.edu.vn và tại các phòng phục vụ',
    },
    {
        key: '7.Mục chấm điểm rèn luyện có 2 cột điểm SV chấm và điểm GV chấm, vậy điểm chốt tính theo điểm nào?Một lựa chọn. ',
        value: 'Cột điểm GV chấm.',
    },
    {
        key: '8.Bạn hãy cho biết để đạt được Danh hiệu Sinh viên 5 tốt, bạn cần đáp ứng đủ những tiêu chí nào sau đây?Một lựa chọn. ',
        value: 'Đạo đức tốt, Học tập tốt, Tình nguyện tốt, Thể lực tốt, Hội nhập tốt',
    },
    {
        key: '9.Điểm rèn luyện được xếp loại theo cách nào dưới đâyMột lựa chọn. ',
        value: 'Xuất sắc, Tốt, Khá, Trung bình, Yếu, Kém',
    },
    {
        key: '10.Sinh viên cần tư vấn học tập liên hệ vớiMột lựa chọn. ',
        value: 'Cả 3 phương án A,B, C đều đúng',
    },
    {
        key: '11.Khoảng thời gian sinh viên sẽ đăng ký học tập cho học kỳ tới?Một lựa chọn. ',
        value: 'Tuần 5-6 của kỳ đang học',
    },
    {
        key: '12.Địa chỉ email của Hội sinh viênMột lựa chọn. ',
        value: 'hsv@hust.edu.vn',
    },
    {
        key: '13.Có mấy mức cảnh báo học tập đối với sinh viênMột lựa chọn. ',
        value: 'Có ba mức: mức 1, mức 2, mức 3',
    },
    {
        key: '14.Như thế nào là được coi là điểm liệt (điểm học phần là F) ?Một lựa chọn. ',
        value: 'Điểm giữa kỳ bé hơn 3 hoặc điểm cuối kỳ bé hơn 3',
    },
    {
        key: '15.Khi mất thẻ sinh viên bạn phải làm gìMột lựa chọn. ',
        value: 'Báo cho Ban Công tác sinh viên và đăng ký làm lại thẻ mới',
    },
    {
        key: '16.Mức học bổng khuyến khích học tập loại giỏi (loại B)Một lựa chọn. ',
        value: 'Tương đương với 1,2 lần mức học phí sinh viên phải đóng của tất cả các học phần tính điểm trung bình học kỳ (GPA)',
    },
    {
        key: '17.Khi cần khôi phục tài khoản Email sinh viên liên hệ vớiMột lựa chọn. ',
        value: 'Ban Công tác sinh viên',
    },
    {
        key: '18.Sinh viên có thể xem tổng số tiền học phí phải đóng trong một học kỳ ở đâuMột lựa chọn. ',
        value: 'Trang ctt-daotao.hust.edu.vn rồi vào tài khoản cá nhân để xem',
    },
    {
        key: '19.Khi lập được một Kế hoạch học tập tốt và tuân thủ theo kế hoạch đề ra thì kết quả đạt được làMột lựa chọn. ',
        value: 'Kết quả học tập tốt, rút ngắn được thời gian hoàn thành CTĐT',
    },
    {
        key: '20.Thời gian nghỉ ốm dài hạn có phép không tính vào thời gian chậm tiến độ nếu tổng cộng không vượt quáMột lựa chọn. ',
        value: 'Không quá 2 năm',
    },
    {
        key: '21.Quy tắc văn hóa giao tiếp trong Nhà trường và môi trường mạng của Nhà trường liên quan đến những nhóm đối tượng nào?Một lựa chọn. ',
        value: 'Cán bộ, viên chức, giảng viên, sinh viên, học viên, nghiên cứu sinh',
    },
    {
        key: '22.Trong bộ quy tắc văn hóa giao tiếp trong Nhà trường và môi trường mạng đối với sinh viên, học viên và nghiên cứu sinh, quy tắc số 4 liên quan đếnMột lựa chọn. ',
        value: 'Trang phục phù hợp với môi trường sư phạm; đeo thẻ sinh viên/học viên khi đến trường.',
    },
    {
        key: '23.Trong cơ cấu tổ chức của Đại học Bách khoa Hà Nội hiện có bao nhiêu Trường?Một lựa chọn. ',
        value: '5 Trường',
    },
    {
        key: '24.Theo bộ khung tiêu chí của năm học 2023-2024, đâu là mục có điểm rèn luyện cao nhấtMột lựa chọn. ',
        value: 'Điểm học tập',
    },
    {
        key: '25.Muốn thắc mắc, phúc tra điểm thì sinh viên cần liên hệ với ai?Một lựa chọn. ',
        value: 'Liên hệ với Giảng viên môn học đó',
    },
    {
        key: '26.Mục tiêu học tập phải đảm bảo những thuộc tính nàoMột lựa chọn. ',
        value: 'Tính rõ ràng; Tính cụ thể',
    },
    {
        key: '27.Fanpage của Trường làMột lựa chọn. ',
        value: 'https://www.facebook.com/dhbkhanoi/',
    },
    {
        key: '28.Một môn học có thể có các điều kiện học phần nàoMột lựa chọn. ',
        value: 'Học phần song hành',
    },
    {
        key: '29.Sinh viên được phép hoàn thành chương trình (Chương trình đào tạo từ 4 đến 5 năm) và tốt nghiệp sớm hơn hoặc chậm hơn so với kế hoạch bao lâuMột lựa chọn. ',
        value: 'Không quá 5 học kỳ',
    },
    {
        key: '30.Cho mã học phần IT4xxx, học phần này thuộc nhóm?Một lựa chọn. ',
        value: 'Chuyên ngành (theo module)',
    },
    {
        key: '31.Theo khung đánh giá kết quả rèn luyện sinh viên năm 2023-2024, sinh viên bị trừ điểm nếu vi phạm các quy định nàoMột lựa chọn. ',
        value: 'Cả 3 phương án trên',
    },
    {
        key: '32.Muốn mở thêm lớp trong học kỳ thì sinh viên phải đến đâuMột lựa chọn. ',
        value: 'Viện/Trường quản lý học phần',
    },
    {
        key: '33.Quy định về việc đánh giá điểm rèn luyện sinh viên xem tạiMột lựa chọn. ',
        value: 'Cả hai đáp án trên đều đúng',
    },
    {
        key: '34.Sinh viên bị nâng một mức cảnh cáo trong trường hợp nàoMột lựa chọn. ',
        value: 'Sinh viên có số tín chỉ không đạt trong học kỳ lớn hơn 8 tín chỉ',
    },
    {
        key: '35.Khi nào sinh viên được chuyển ngành họcMột lựa chọn. ',
        value: 'Cả ba nội dung trên',
    },
    {
        key: '36.Phòng tiếp nhận, hỗ trợ, tư vấn về học tập và tâm lý cho sinh viên gặp khó khăn làMột lựa chọn. ',
        value: 'C1 - 101',
    },
    {
        key: '37.Thời gian xin rút một học phần là bao giờMột lựa chọn. ',
        value: 'Trước 1/2 thời gian của học phần đó',
    },
    {
        key: '38.Sinh viên được xếp hạng trình độ năm thứ hai căn cứ số tín chỉ tích lũy như thế nàoMột lựa chọn. ',
        value: 'Trình độ năm thứ hai nếu số tín chỉ tích lũy từ 32-63',
    },
    {
        key: '39.Sinh viên làm lại thẻ bảo hiểm y tế ở đâuMột lựa chọn. ',
        value: 'Ban Công tác Sinh viên',
    },
    {
        key: '40.Trong trường hợp lớp bị hủy thì sinh viên phải làm gìMột lựa chọn. ',
        value: 'Chủ động đăng ký vào lớp khác thay cho lớp đã bị hủy trong thời gian đăng ký quy định.',
    },
    {
        key: '41.Nếu học phần bị điểm F phải học lại thì học lại tại thời điểm nàoMột lựa chọn. ',
        value: 'Sớm nhất khi môn học có mở lớp ở kỳ tới hay kỳ tiếp theo',
    },
    {
        key: '42.Sinh viên được hạ một mức cảnh cáo trong trường hợp nàoMột lựa chọn. ',
        value: 'Sinh viên có số tín chỉ không đạt trong học kỳ <= 4 tín chỉ',
    },
    {
        key: '43.Làm thế nào để học đúng tiến độMột lựa chọn. ',
        value: 'Học theo học kỳ chuẩn của Chương trình đào tạo',
    },
    {
        key: '44.Xin cấp giấy chứng nhận sinh viên ở đâuMột lựa chọn. ',
        value: 'Ban Công tác Sinh viên hoặc Văn phòng Khoa/Viện/Trường chuyên nghành',
    },
    {
        key: '45.Địa chỉ Ban Đào tạoMột lựa chọn. ',
        value: 'Phòng 201-202 nhà C1',
    },
    {
        key: '46.Theo quy chế, sinh viên bị xếp loại rèn luyện yếu, kém hai học kỳ liên tiếp sẽ bị xử lý như thế nàoMột lựa chọn. ',
        value: 'Kỷ luật cảnh cáo',
    },
    {
        key: '47.Sau thời gian điều chỉnh đăng ký, sinh viên có thể làm đơn xin rút học phần để không tính kết quả học tập khôngMột lựa chọn. ',
        value: 'Được làm đơn xin rút và được xem xét để không phải đóng học phí của học phần xin rút',
    },
    {
        key: '48.Sinh viên muốn tra cứu về đăng ký học tập của cá nhân thì xem ở trang nàoMột lựa chọn. ',
        value: 'http://sis.hust.edu.vn',
    },
    {
        key: '49.GPA và CPA có nghĩa là gì ?Một lựa chọn. ',
        value: 'GPA là điểm trung bình môn trong 1 học kỳ, CPA là điểm trung bình môn từ năm học thứ nhất',
    },
    {
        key: '50.Để kiểm tra thông tin về hoạt động mượn trả tài liệu của tài khoản Thư viện, bạn đọc phải truy cập vào địa chỉ nàoMột lựa chọn. ',
        value: 'Trang Tra cứu http://libopac.hust.edu.vn/',
    },
    {
        key: '51.Điều kiện để được xét học bổng khuyến khích học tập loại giỏi?Một lựa chọn. ',
        value: 'GPA >= 3,6; ĐRL >= 90',
    },
    {
        key: '52.Khi nào sinh viên phải hoàn toàn tự đăng ký lớp?Một lựa chọn. ',
        value: 'Bắt đầu từ kỳ 3',
    },
    {
        key: '53.Xử lý học tập trong một học kỳ của sinh viên dựa vào những yếu tố nàoMột lựa chọn. ',
        value: 'Điểm trung bình học kỳ',
    },
    {
        key: '54.Ban Chấp hành Đoàn Đại học gồm có bao nhiêu ban Chuyên môn?Một lựa chọn. ',
        value: '07',
    },
    {
        key: '55.Sinh viên khi đăng ký học phần thì được gìMột lựa chọn. ',
        value: 'Được đăng ký trong cả hai đợt: chính thức và điều chỉnh',
    },
    {
        key: '56.Giả sử kỳ 2023.1, một sinh viên chỉ đăng ký học tập hai môn MI1010 3(3-2-0-6) và MI1110 4(3-2-0-8) với số điểm lần lượt là B+ và D. Hỏi GPA của sinh viên này trong kỳ 2023.1 là bao nhiêu? Một lựa chọn. ',
        value: '2.07',
    },
    {
        key: '57.Sinh viên bị cảnh cáo học tập mức 1 thì được đăng ký tối đa và tối thiểu bao nhiêu tín chỉ trong một học kỳ chínhMột lựa chọn. ',
        value: 'Tối đa 18 tín chỉ và tối thiểu 10 tín chỉ cho một học kỳ chính',
    },
    {
        key: '58.Quy trình đăng ký học tập trên hệ thống thông tin sinh viên theo các giai đoạn chuẩn như thế nàoMột lựa chọn. ',
        value: 'Đăng ký học phần - Đăng ký lớp chính thức - Điều chỉnh đăng ký',
    },
    {
        key: '59.Một môn học có thời lượng 3(3-1-0-6) thì có giờ Thí nghiệm/Thực hành sẽ làMột lựa chọn. ',
        value: '0 giờ Thí nghiệm/Thực hành',
    },
    {
        key: '60.Xin giấy chứng nhận làm vé tháng xe buýt ở đâuMột lựa chọn. ',
        value: 'Ban Công tác Sinh viên',
    },
    {
        key: '61.Học bổng Trần Đại Nghĩa có mấy mức học bổng?Một lựa chọn. ',
        value: '2 mức: 50% học phí, 100% học phí',
    },
    {
        key: '62.Đại học Bách khoa Hà Nội được phong tặng danh hiệu Anh hùng lực lượng vũ trang nhân dân năm nàoMột lựa chọn. ',
        value: 'Năm 2006',
    },
    {
        key: '63.Sinh viên thuộc chương trình ELITECH được đăng ký tối đa bao nhiêu tín chỉ trong một học kỳ nếu bị cảnh cáo học tập mức 2Một lựa chọn. ',
        value: '18 tín chỉ',
    },
    {
        key: '64.Một môn học có trọng số KT(0.3)-T(0.7) nghĩa là môn học đó cóMột lựa chọn. ',
        value: 'Trọng số giữa kỳ là 0.3 và Cuối kỳ là 0.7',
    },
    {
        key: '65.Trang web của Đoàn thanh niênMột lựa chọn. ',
        value: 'svbk.hust.edu.vn',
    },
    {
        key: '66.Trong học kỳ hè sinh viên có thể học tối đa bao nhiêu tín chỉMột lựa chọn. ',
        value: 'Tối đa 8 tín chỉ',
    },
    {
        key: '67.Một môn học có thời lượng 3(4-1-0-6) thì có số tín chỉ học tập sẽ làMột lựa chọn. ',
        value: '3 tín chỉ học tập',
    },
    {
        key: '68.Đại học Bách khoa Hà Nội được thành lập vào năm nào?Một lựa chọn. ',
        value: '1956',
    },
    {
        key: '69.Địa chỉ Ban Công tác Sinh viênMột lựa chọn. ',
        value: 'Phòng 101-102-103-104-105 nhà C1',
    },
    {
        key: '70.Theo khung đánh giá kết quả rèn luyện sinh viên năm 2023-2024, tiêu chí điểm học tập cộng tối đaMột lựa chọn. ',
        value: '30 điểm',
    },
    {
        key: '71.Trong những ngày dưới đây, Bác Hồ đã về thăm trường ta vào các ngày nào?Một lựa chọn. ',
        value: 'Ngày Mùng 1 Tết Mậu Tuát 1958',
    },
    {
        key: '72.Theo thông báo số 1096/TB-ĐHBK-CTSV, nếu sinh viên không mang thẻ SV sẽMột lựa chọn. ',
        value: 'Có thể bị từ chối vào một số khu vực ở khuôn viên Đại học BKHN',
    },
    {
        key: '73.Địa chỉ email của Ban Đào tạoMột lựa chọn. ',
        value: 'daotao@hust.edu.vn',
    },
    {
        key: '74.Một môn học có điểm chữ là B thì quy đổi sang thang 4 sẽ làMột lựa chọn. ',
        value: '3 điểm',
    },
    {
        key: '75.Quy định, quy chế về học tập thì sinh viên xem ở trang nàoMột lựa chọn. ',
        value: 'https://ctt-daotao.hust.edu.vn/',
    },
    {
        key: '76.Quy định về việc xét cấp học bổng cho sinh viên xem tạiMột lựa chọn. ',
        value: 'Cả 2 đáp án trên đều đúng',
    },
    {
        key: '77.Sinh viên được xếp loại học lực trung bình nếu điểm CPA như sauMột lựa chọn. ',
        value: 'CPA từ 2.0-2.49',
    },
    {
        key: '78.Yêu cầu chuẩn tiếng Anh theo số tín chỉ tích lũy từ 0-63 tín chỉ thì điểm TOEIC tối thiểu sẽ là (áp dụng cho Chương trình đào tạo chuẩn)Một lựa chọn. ',
        value: 'Đạt hai học phần Tiếng Anh cơ sở (FL1129; FL1130)',
    },
    {
        key: '79.Thủ tục hoãn thi do bị đau, ốm cần cóMột lựa chọn. ',
        value: 'Giấy xác nhận của Trung tâm Y tế',
    },
    {
        key: '80.Sinh viên bị ốm, tai nạn hoặc vì một lý do đặc biệt nào đó thì phải nộp đơn và các minh chứng giấy tờ về đâuMột lựa chọn. ',
        value: 'Ban Đào tạo',
    },
    {
        key: '81.Yêu cầu bắt buộc đối với sinh viên khi gửi email thắc mắc vấn đề như đăng ký học tập, chuyển điểm tương đương/thay thế, học phí... là?Một lựa chọn. ',
        value: 'Sử dụng email do Trường cấp',
    },
    {
        key: '82.Tài liệu Phòng mượn giáo trình được dán nhãn màu gì ?Một lựa chọn. ',
        value: 'Màu xanh',
    },
    {
        key: '83.Ai là người chịu trách nhiệm giám sát hoạt động học tập của sinh viên?Một lựa chọn. ',
        value: 'Bản thân sinh viên',
    },
    {
        key: '84.Địa chỉ email của Đoàn Thanh niênMột lựa chọn. ',
        value: 'dtn@hust.edu.vn',
    },
    {
        key: '85.Sinh viên đăng ký nội trú KTX ở đâuMột lựa chọn. ',
        value: 'Trung tâm Dịch vụ và Hỗ trợ Bách Khoa',
    },
    {
        key: '86.Theo quy định của Luật Bảo hiểm y tế (BHYT) thìMột lựa chọn. ',
        value: 'Mọi sinh viên bắt buộc phải có BHYT',
    },
    {
        key: '87.Các bước xin cấp giấy chứng nhận sinh viên bao gồm?Một lựa chọn. ',
        value: 'Bước 1 đăng ký trên app iCTSV, bước 2 check mail hẹn lịch, bước 3 đến Ban Công tác Sinh viên để nhận giấy',
    },
    {
        key: '88.Điểm rèn luyện được đánh giá khi nàoMột lựa chọn. ',
        value: 'Cuối học kỳ',
    },
    {
        key: '89.Các tiêu chí hoạt động liên quan đến GPA, Đạt trình độ ngoại ngữ sẽ doMột lựa chọn. ',
        value: 'Cả 3 đáp án kia đều sai.',
    },
    {
        key: '90.Những trường hợp nào sau đây không phải mua BHYTMột lựa chọn. ',
        value: 'Cả 3 đáp án trên đều đúng',
    },
];
let listQues = document.querySelectorAll('[data-automation-id="questionItem"]');
listQues.forEach((ques) => {
    let value = ques.querySelector('.lrp-choice-selected[data-automation-id="choiceItem"]').textContent;
    let key = ques.querySelector('[data-automation-id="questionTitle"]').textContent;
    keys.push({ key, value });
});
