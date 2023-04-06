const listkey = [
	{
		key: 'Sự kiện 3/2/1930, Nguyễn Ái Quốc chủ trì cuộc họp hợp nhất 03 tổ chức Cộng sản tại Việt Nam để thành lập Đảng Cộng sản Việt Nam đã bầu ai là người Phụ trách Ban chấp hành Trung ương Đảng lâm thời ?',
		value: 'Trịnh Đình Cửu',
	},
	{
		key: 'Người đội viên liên lạc Kim Đồng là biểu tượng anh hùng của thế hệ thiếu niên Việt Nam dũng cảm, hy sinh vì cuộc đấu tranh giành độc lập dân tộc. Đến năm 1997, Đảng và Nhà nước đã truy tặng danh hiệu Anh hùng Lực lượng vũ trang Kim Đồng (tức Nông Văn Dền). Sự kiện anh Kim Đồng hy sinh khi đi liên lạc, bảo vệ cho cán bộ đã diễn ra khi nào ?',
		value: '15/02/1943',
	},
	{
		key: 'Tuyên ngôn Đảng Cộng sản của Karl Marx và Friederich Engels đã tạo nền tảng lý luận về việc xây dựng xã hội tiến bộ cho tương lai của nhân loại, đến nay vẫn là tác phẩm được nghiên cứu rộng rãi hàng đầu trên thế giới. Sự kiện lần đầu tiên xuất bản tác phẩm này diễn ra ở đâu, khi nào ?',
		value: 'London, tháng 2 năm 1848',
	},
	{
		key: 'Trước khi kết thúc Chiến tranh Thế giới lần thứ II, ba nước thắng trận là Mỹ - Liên Xô - Anh đã họp bàn tại Yalta (bán đảo Crime, Liên Xô) để sắp đặt lại trật tự thế giới, có tác động đến toàn bộ các dân tộc trên toàn cầu. Sự kiện Hội nghị Yalta khai mạc khi nào ?',
		value: '04/02/1945',
	},
	{
		key: 'Ngày 03/02/1994, Tổng thống Bill Clinton đã công bố sự kiện gì trong quan hệ Việt Nam - Hoa Kỳ ?',
		value: 'Hoa Kỳ dỡ bỏ hoàn toàn lệnh cấm vận thương mại đối với Việt Nam',
	},
	{
		key: 'Hình ảnh tướng Nguyễn Ngọc Loan (Tổng giám đốc Tổng nha Cảnh sát của chính quyền Sài Gòn) thản nhiên sát hại chiến sỹ biệt động trên đường phố Sài Gòn đã gây phẫn nộ dư luận trên toàn thế giới. Đó là một yếu tố thúc đẩy phong trào phản đối sự can thiệp chiến tranh của Mỹ vào Việt Nam, đồng thời tác giả bức ảnh Eddie Adams được trao giải Báo chí Pulitzer uy tín vào năm 1969. Sự kiện tàn nhẫn mà tướng Loan gây ra khi nào ?',
		value: 'Ngày 01/02/1968',
	},
	{
		key: 'Sự kiện chiến dịch bảo vệ biên giới phía Bắc năm 1979 khởi phát khi nào ?',
		value: 'Ngày 17 tháng 02',
	},
	{
		key: 'Chủ tịch Hồ Chí Minh căn dặn "Rèn luyện cả đức với tài", “Giáo dục phải kết hợp với lao động sản xuất, lý luận phải gắn với thực tiễn, học phải đi đôi với hành, nhà trường phải gắn liền với xã hội” trong sự kiện thăm Trường Đại học chuyên nghiệp Bách khoa lần thứ nhất. Sự kiện đó diễn ra khi nào ?',
		value: 'Ngày 18/02/1958',
	},
	{
		key: 'Ngày 01/02/2023, Mark Zuckerberg thông báo rằng lần đầu tiên mạng xã hội Facebook đạt ngưỡng 2 tỷ người dùng mỗi ngày. Nhìn về giai đoạn khởi nghiệp, sự kiện lần đầu mạng xã hội này hoạt động trong phạm vi nội bộ sinh viên Đại học Havard với tên gọi TheFacebook đã diễn ra khi nào ?',
		value: '04/02/2004',
	},
];
const list = document.getElementsByClassName('__question__ office-form-question');
for (let i = 0; i < 100; i++) {
	const inputs = list[i].querySelectorAll('input');
	const ans = listkey.find(item =>
		item.key.includes(list[i].querySelector('.text-format-content').textContent)
	);

	for (let k = 0; k < inputs.length; k++) {
		if (list[i].querySelectorAll('input')[k].value == ans.value) {
			list[i].querySelectorAll('input')[k].click();
		}
	}
}

setTimeout(() => {
	document.querySelector('.office-form-button-container .button-content').click();
}, 6 * 1000 * 60);
