import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_ITEMS } from '../constants';
import { ChevronLeft, ChevronRight, Star, Clock, CheckCircle2, ArrowRight, Calendar, User } from 'lucide-react';
import { cn } from '../utils';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('description');
  const [selectedImage, setSelectedImage] = useState(0);

  const product = PORTFOLIO_ITEMS.find(item => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
        <h2 className="text-2xl font-serif">Mẫu nail không tồn tại</h2>
        <Link to="/portfolio" className="text-nude-500 hover:underline">Quay lại Portfolio</Link>
      </div>
    );
  }

  const relatedProducts = PORTFOLIO_ITEMS
    .filter(item => item.category === product.category && item.id !== product.id)
    .slice(0, 3);

  const tabs = [
    { id: 'description', label: 'Mô tả chi tiết' },
    { id: 'process', label: 'Quy trình thực hiện' },
    { id: 'care', label: 'Cách chăm sóc' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-6 py-12 space-y-24"
    >
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-zinc-400">
        <Link to="/" className="hover:text-nude-500">Trang chủ</Link>
        <ChevronRight size={12} />
        <Link to="/portfolio" className="hover:text-nude-500">Portfolio</Link>
        <ChevronRight size={12} />
        <span className="text-nude-600">{product.title}</span>
      </nav>

      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Gallery */}
        <div className="space-y-6">
          <motion.div 
            layoutId={`image-${product.id}`}
            className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl bg-nude-50"
          >
            <img
              src={product.gallery[selectedImage]}
              alt={product.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="grid grid-cols-4 gap-4">
            {product.gallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={cn(
                  "aspect-square rounded-2xl overflow-hidden border-2 transition-all",
                  selectedImage === idx ? "border-nude-400 scale-95" : "border-transparent opacity-60 hover:opacity-100"
                )}
              >
                <img src={img} alt={`Angle ${idx + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="space-y-10 py-4">
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-nude-100 text-nude-600 text-[10px] font-bold uppercase tracking-widest">
              {product.category}
            </span>
            <h1 className="text-5xl md:text-6xl font-serif text-zinc-900 leading-tight">
              {product.title}
            </h1>
            <div className="flex items-center space-x-4">
              <div className="flex text-nude-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <span className="text-sm text-zinc-400">({product.reviews.length} đánh giá)</span>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-zinc-400 uppercase tracking-widest font-bold">Giá tham khảo</p>
            <p className="text-4xl font-serif text-nude-600">{product.price}</p>
          </div>

          <p className="text-zinc-500 leading-relaxed">
            {product.description.substring(0, 200)}...
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              to="/contact"
              className="flex-grow bg-nude-400 text-white px-10 py-5 rounded-2xl font-bold hover:bg-nude-500 transition-all shadow-lg shadow-nude-100 flex items-center justify-center space-x-2"
            >
              <span>Đặt Lịch Ngay</span>
              <ArrowRight size={20} />
            </Link>
            <button className="px-10 py-5 rounded-2xl border border-nude-200 font-bold text-zinc-800 hover:bg-nude-50 transition-all">
              Tư vấn qua Zalo
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-8 border-t border-nude-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-nude-50 flex items-center justify-center text-nude-500">
                <Clock size={18} />
              </div>
              <div className="text-xs">
                <p className="font-bold text-zinc-800">Thời gian</p>
                <p className="text-zinc-400">60 - 90 phút</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-nude-50 flex items-center justify-center text-nude-500">
                <CheckCircle2 size={18} />
              </div>
              <div className="text-xs">
                <p className="font-bold text-zinc-800">Độ bền</p>
                <p className="text-zinc-400">3 - 4 tuần</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Content Tabs */}
      <section className="space-y-12">
        <div className="flex border-b border-nude-100 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all relative whitespace-nowrap",
                activeTab === tab.id ? "text-nude-600" : "text-zinc-400 hover:text-zinc-600"
              )}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-nude-400"
                />
              )}
            </button>
          ))}
        </div>

        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            {activeTab === 'description' && (
              <motion.div
                key="desc"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-serif text-zinc-900">Chi tiết mẫu thiết kế</h2>
                <div className="prose prose-zinc max-w-none text-zinc-500 leading-relaxed space-y-4">
                  <p>{product.description}</p>
                  <p>Mẫu thiết kế này được lấy cảm hứng từ sự giao thoa giữa nghệ thuật hiện đại và vẻ đẹp cổ điển. Từng chi tiết nhỏ nhất đều được chăm chút tỉ mỉ để đảm bảo sự hoàn hảo tuyệt đối. Chúng tôi sử dụng các dòng sơn gel cao cấp nhất, đảm bảo không chỉ đẹp mà còn cực kỳ an toàn cho móng thật của bạn.</p>
                </div>
              </motion.div>
            )}

            {activeTab === 'process' && (
              <motion.div
                key="proc"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-8"
              >
                <h2 className="text-3xl font-serif text-zinc-900">Quy trình thực hiện chuẩn 5 bước</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {product.process.map((step, idx) => (
                    <div key={idx} className="flex items-start space-x-6 p-6 rounded-3xl bg-nude-50 border border-nude-100">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-nude-600 font-serif italic text-xl shrink-0 shadow-sm">
                        {idx + 1}
                      </div>
                      <p className="text-zinc-600 leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'care' && (
              <motion.div
                key="care"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-8"
              >
                <h2 className="text-3xl font-serif text-zinc-900">Bí quyết giữ móng bền đẹp</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-zinc-800">Nên làm:</h3>
                    <ul className="space-y-4">
                      {product.careTips.map((tip, idx) => (
                        <li key={idx} className="flex items-center space-x-3 text-zinc-500">
                          <CheckCircle2 size={18} className="text-green-400 shrink-0" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-nude-50 p-8 rounded-[40px] space-y-4">
                    <h3 className="text-xl font-bold text-zinc-800">Lưu ý quan trọng:</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      Để bộ móng luôn trong tình trạng tốt nhất, hãy tránh ngâm tay trong nước nóng quá lâu hoặc tiếp xúc với các loại tinh dầu có thể làm mềm lớp gel. Nếu có bất kỳ dấu hiệu bong tróc nào, đừng tự ý cạy móng mà hãy liên hệ ngay với chúng mình để được hỗ trợ bảo hành miễn phí trong vòng 3 ngày đầu nhé!
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Reviews */}
      <section className="space-y-12">
        <div className="flex justify-between items-end">
          <div className="space-y-2">
            <h2 className="text-3xl font-serif text-zinc-900">Đánh giá từ khách hàng</h2>
            <p className="text-zinc-500 text-sm">Những chia sẻ thật từ những người đã trải nghiệm dịch vụ.</p>
          </div>
          <button className="text-nude-500 font-bold text-xs uppercase tracking-widest hover:underline">Viết đánh giá</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {product.reviews.map((review) => (
            <div key={review.id} className="p-8 rounded-[32px] border border-nude-100 space-y-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-nude-100 flex items-center justify-center text-nude-600">
                    <User size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-zinc-800">{review.user}</p>
                    <p className="text-[10px] text-zinc-400 uppercase tracking-widest">{new Date(review.date).toLocaleDateString('vi-VN')}</p>
                  </div>
                </div>
                <div className="flex text-nude-400">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                </div>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed italic">"{review.comment}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-serif text-zinc-900">Mẫu nail liên quan</h2>
            <p className="text-zinc-500 text-sm">Có thể bạn cũng sẽ yêu thích những phong cách này.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((item) => (
              <Link
                key={item.id}
                to={`/portfolio/${item.id}`}
                className="group space-y-4"
              >
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-sm group-hover:shadow-xl transition-all">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-nude-500 font-bold uppercase tracking-widest">{item.category}</p>
                  <h4 className="font-serif text-lg text-zinc-800 group-hover:text-nude-500 transition-colors">{item.title}</h4>
                  <p className="text-nude-600 font-bold">{item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </motion.div>
  );
};

export default ProductDetail;
