import { LucideIcon, Heart, Sparkles, Scissors, Palette, Star, Clock } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  icon: LucideIcon;
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  gallery: string[];
  price: string;
  date: string;
  process: string[];
  careTips: string[];
  reviews: Review[];
}

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Nail Box Thiết Kế',
    description: 'Bộ nail box được đo ni đóng giày theo kích thước móng thật, thiết kế riêng biệt theo yêu cầu.',
    price: 'Từ 250.000đ',
    icon: Heart,
  },
  {
    id: '2',
    title: 'Sơn Gel Cao Cấp',
    description: 'Sử dụng các dòng sơn gel chính hãng từ Hàn Quốc và Nhật Bản, bền màu và bóng đẹp.',
    price: 'Từ 150.000đ',
    icon: Sparkles,
  },
  {
    id: '3',
    title: 'Chăm Sóc Móng (Combo)',
    description: 'Cắt da, tạo form móng và dưỡng móng chuyên sâu giúp móng chắc khỏe.',
    price: 'Từ 100.000đ',
    icon: Scissors,
  },
  {
    id: '4',
    title: 'Vẽ Nghệ Thuật',
    description: 'Vẽ tay tỉ mỉ, đính đá, ẩn xà cừ hoặc vẽ 3D theo xu hướng mới nhất.',
    price: 'Từ 50.000đ/ngón',
    icon: Palette,
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: '1',
    title: 'Mẫu Nail Chrome 2026 Sang Chảnh',
    category: 'Chrome Nails',
    price: '450.000đ',
    description: 'Xu hướng nail chrome 2026 đang làm mưa làm gió với hiệu ứng tráng gương cực kỳ thu hút. Mẫu nail này không chỉ mang lại vẻ ngoài hiện đại, cá tính mà còn cực kỳ sang trọng cho các buổi tiệc tối. Sử dụng kỹ thuật chà bột chrome cao cấp, chúng tôi tạo ra lớp phủ mịn màng, không tì vết. Đây là lựa chọn hoàn hảo cho những cô nàng yêu thích sự nổi bật nhưng vẫn giữ được nét tinh tế. Kết hợp cùng form móng thang hoặc móng nhọn để tăng thêm phần quyến rũ.',
    image: 'https://picsum.photos/seed/nail1/800/1000',
    gallery: [
      'https://picsum.photos/seed/nail1/800/1000',
      'https://picsum.photos/seed/nail1-2/800/1000',
      'https://picsum.photos/seed/nail1-3/800/1000',
      'https://picsum.photos/seed/nail1-4/800/1000',
    ],
    date: '2026-02-15',
    process: [
      'Vệ sinh móng, cắt da và tạo form móng thang chuẩn.',
      'Sơn lớp base bảo vệ móng tự nhiên.',
      'Sơn màu nền đen hoặc trắng tùy theo hiệu ứng chrome mong muốn.',
      'Chà bột chrome tráng gương cao cấp nhập khẩu.',
      'Sơn lớp top coat siêu bóng để khóa màu và bảo vệ lớp chrome.',
    ],
    careTips: [
      'Tránh tiếp xúc trực tiếp với hóa chất tẩy rửa mạnh trong 24h đầu.',
      'Sử dụng dầu dưỡng móng (cuticle oil) hàng ngày để giữ móng chắc khỏe.',
      'Không dùng móng để cạy, mở các vật cứng.',
      'Đeo găng tay khi làm việc nhà để bảo vệ lớp tráng gương.',
    ],
    reviews: [
      { id: 'r1', user: 'Minh Anh', rating: 5, comment: 'Màu chrome cực kỳ sáng và bền, mình làm 2 tuần rồi vẫn chưa bong.', date: '2026-02-20' },
      { id: 'r2', user: 'Thảo Vy', rating: 5, comment: 'Form móng rất đẹp, nhân viên làm rất kỹ.', date: '2026-02-18' },
    ]
  },
  {
    id: '2',
    title: 'Nail Box Thiết Kế Đính Đá Cầu Kỳ',
    category: 'Nail Box',
    price: '350.000đ',
    description: 'Nail box thiết kế sang chảnh là giải pháp tối ưu cho những cô nàng bận rộn nhưng vẫn muốn sở hữu bộ móng lung linh. Mỗi bộ nail box tại tiệm đều được làm thủ công 100%, đính đá Swarovski thật và sử dụng sơn gel chất lượng cao. Với mẫu thiết kế này, chúng tôi tập trung vào sự hài hòa giữa màu hồng nude chủ đạo và các chi tiết đá bắt sáng. Bạn có thể dễ dàng tự gắn tại nhà chỉ trong 5 phút, độ bền lên đến 2-3 tuần nếu chăm sóc đúng cách.',
    image: 'https://picsum.photos/seed/nail2/800/1000',
    gallery: [
      'https://picsum.photos/seed/nail2/800/1000',
      'https://picsum.photos/seed/nail2-2/800/1000',
      'https://picsum.photos/seed/nail2-3/800/1000',
    ],
    date: '2026-02-10',
    process: [
      'Đo kích thước móng thật của khách hàng.',
      'Thiết kế mẫu trên móng giả cao cấp.',
      'Đính đá Swarovski và phụ kiện thủ công.',
      'Sơn phủ bảo vệ và đóng gói kèm bộ dụng cụ dán móng.',
    ],
    careTips: [
      'Sử dụng keo dán móng chuyên dụng đi kèm.',
      'Tránh ngâm nước quá lâu ngay sau khi dán.',
      'Khi tháo nên ngâm nước ấm để bảo vệ móng thật.',
    ],
    reviews: [
      { id: 'r3', user: 'Hương Giang', rating: 5, comment: 'Tiện lợi vô cùng, đá đính rất chắc chắn.', date: '2026-02-12' },
    ]
  },
  {
    id: '3',
    title: 'Mẫu Nail Ombre Hồng Nude Tinh Tế',
    category: 'Ombre',
    price: '280.000đ',
    description: 'Kỹ thuật ombre hồng nude luôn là lựa chọn hàng đầu cho phong cách tiểu thư, nhẹ nhàng. Sự chuyển màu mượt mà từ tone nude tự nhiên sang hồng phấn tạo nên vẻ đẹp thanh thoát cho đôi bàn tay. Mẫu nail này cực kỳ tôn da và dễ dàng phối hợp với nhiều loại trang phục khác nhau, từ đồ công sở đến váy cưới. Chúng tôi sử dụng máy phun airbrush hoặc kỹ thuật dặm mút chuyên nghiệp để đảm bảo hiệu ứng chuyển màu hoàn hảo nhất, không bị lộ vân sơn.',
    image: 'https://picsum.photos/seed/nail3/800/1000',
    gallery: [
      'https://picsum.photos/seed/nail3/800/1000',
      'https://picsum.photos/seed/nail3-2/800/1000',
    ],
    date: '2026-02-05',
    process: [
      'Cắt da và tạo form móng tròn hoặc oval.',
      'Sơn lớp base và màu nền nude.',
      'Tạo hiệu ứng ombre bằng máy phun airbrush.',
      'Sơn top coat bóng mượt.',
    ],
    careTips: [
      'Dưỡng ẩm da tay thường xuyên.',
      'Hạn chế tiếp xúc với các chất tẩy rửa có màu.',
    ],
    reviews: [
      { id: 'r4', user: 'Ngọc Diệp', rating: 4, comment: 'Màu rất xinh, nhẹ nhàng đúng ý mình.', date: '2026-02-08' },
    ]
  },
  {
    id: '4',
    title: 'Nail Vẽ Hoa Nhí Phong Cách Hàn Quốc',
    category: 'Hand-painted',
    price: '320.000đ',
    description: 'Nail vẽ hoa nhí phong cách Hàn Quốc mang đến hơi thở mùa xuân dịu dàng. Từng cánh hoa được vẽ tay tỉ mỉ bằng cọ nét siêu mảnh, kết hợp cùng các tone màu pastel ngọt ngào. Đây là xu hướng nail được ưa chuộng bởi các bạn trẻ yêu thích sự trẻ trung, năng động nhưng vẫn muốn có chút điệu đà. Lớp top coat siêu bóng giúp bảo vệ họa tiết vẽ bền lâu, không bị bong tróc hay xỉn màu theo thời gian. Một mẫu nail lý tưởng cho những chuyến du lịch hay dạo phố.',
    image: 'https://picsum.photos/seed/nail4/800/1000',
    gallery: [
      'https://picsum.photos/seed/nail4/800/1000',
      'https://picsum.photos/seed/nail4-2/800/1000',
    ],
    date: '2026-01-28',
    process: [
      'Làm sạch móng và sơn base.',
      'Sơn màu nền pastel.',
      'Vẽ họa tiết hoa nhí bằng cọ nét siêu mảnh.',
      'Sơn top coat bảo vệ họa tiết.',
    ],
    careTips: [
      'Tránh va đập mạnh vào đầu móng.',
      'Sử dụng kem dưỡng da tay để làm nổi bật bộ móng.',
    ],
    reviews: [
      { id: 'r5', user: 'Bảo Trâm', rating: 5, comment: 'Nét vẽ rất mảnh và đẹp, mình rất thích.', date: '2026-01-30' },
    ]
  },
  {
    id: '5',
    title: 'Mẫu Nail Mắt Mèo Kim Cương Huyền Bí',
    category: 'Cat Eye',
    price: '380.000đ',
    description: 'Sơn gel mắt mèo kim cương tạo hiệu ứng chiều sâu 3D lấp lánh như những dải ngân hà. Dưới ánh sáng khác nhau, bộ móng sẽ thay đổi độ sáng và hướng vệt sáng, tạo nên sự thú vị và huyền bí. Chúng tôi sử dụng nam châm chuyên dụng để tạo ra các đường vân sắc nét nhất. Mẫu nail này đặc biệt phù hợp với những người có cá tính mạnh, yêu thích sự độc đáo và phá cách. Tone màu xám khói hoặc xanh đen sẽ làm tăng thêm vẻ quyền lực và sang trọng cho người sở hữu.',
    image: 'https://picsum.photos/seed/nail5/800/1000',
    gallery: [
      'https://picsum.photos/seed/nail5/800/1000',
      'https://picsum.photos/seed/nail5-2/800/1000',
    ],
    date: '2026-01-20',
    process: [
      'Chuẩn bị móng và sơn base.',
      'Sơn lớp gel mắt mèo đặc biệt.',
      'Dùng nam châm tạo vân sáng theo ý muốn.',
      'Hơ đèn LED và sơn top coat.',
    ],
    careTips: [
      'Tránh ánh nắng trực tiếp quá lâu để giữ độ bóng.',
      'Không nên tự ý cạy lớp gel.',
    ],
    reviews: [
      { id: 'r6', user: 'Khánh Linh', rating: 5, comment: 'Hiệu ứng mắt mèo rất rõ, lung linh lắm.', date: '2026-01-25' },
    ]
  },
  {
    id: '6',
    title: 'Nail Pháp (French) Cách Điệu Hiện Đại',
    category: 'French',
    price: '250.000đ',
    description: 'Vượt xa kiểu French truyền thống, mẫu nail Pháp cách điệu 2026 sử dụng các đường line thanh mảnh với màu sắc nổi bật hoặc kim tuyến. Sự kết hợp giữa nền móng trong suốt và đầu móng màu sắc tạo nên sự thanh lịch nhưng không kém phần thời thượng. Đây là mẫu nail "quốc dân" vì nó phù hợp với mọi dáng móng và độ dài móng. Kỹ thuật vẽ line chuẩn xác là yếu tố quyết định sự thành công của mẫu này, giúp đôi tay trông dài và thon gọn hơn đáng kể.',
    image: 'https://picsum.photos/seed/nail6/800/1000',
    gallery: [
      'https://picsum.photos/seed/nail6/800/1000',
      'https://picsum.photos/seed/nail6-2/800/1000',
    ],
    date: '2026-01-15',
    process: [
      'Cắt da và tạo form móng thang hoặc nhọn.',
      'Sơn lớp base trong suốt hoặc nude nhạt.',
      'Vẽ đường line French đầu móng tỉ mỉ.',
      'Sơn top coat siêu bóng.',
    ],
    careTips: [
      'Dưỡng móng hàng ngày.',
      'Đeo găng tay khi tiếp xúc với nước tẩy rửa.',
    ],
    reviews: [
      { id: 'r7', user: 'Thanh Trúc', rating: 5, comment: 'Đường vẽ rất thẳng và đều, rất ưng ý.', date: '2026-01-18' },
    ]
  },
];
