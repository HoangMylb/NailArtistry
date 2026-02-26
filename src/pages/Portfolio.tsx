import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_ITEMS } from '../constants';
import { Search, Filter, Calendar, Tag, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(PORTFOLIO_ITEMS.map(item => item.category))];

  const filteredItems = filter === 'All' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === filter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-6 py-12 space-y-16"
    >
      <div className="space-y-4 text-center">
        <h1 className="text-5xl md:text-6xl font-serif text-zinc-900">Portfolio & Blog</h1>
        <p className="text-zinc-500 max-w-2xl mx-auto">
          Khám phá những mẫu nail xu hướng nhất năm 2026. Từ phong cách tối giản đến những thiết kế đính đá cầu kỳ, chúng tôi luôn có lựa chọn hoàn hảo cho bạn.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              filter === cat 
                ? 'bg-nude-400 text-white shadow-md' 
                : 'bg-nude-50 text-zinc-600 hover:bg-nude-100'
            }`}
          >
            {cat === 'All' ? 'Tất Cả' : cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.article
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group bg-white rounded-[32px] overflow-hidden border border-nude-100 shadow-sm hover:shadow-xl transition-all flex flex-col"
            >
              <Link to={`/portfolio/${item.id}`} className="aspect-[4/5] overflow-hidden relative block">
                <motion.img
                  layoutId={`image-${item.id}`}
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-nude-600">
                    {item.category}
                  </span>
                </div>
              </Link>
              
              <div className="p-8 space-y-4 flex-grow flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-[10px] text-zinc-400 uppercase tracking-widest font-bold">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(item.date).toLocaleDateString('vi-VN')}
                    </span>
                  </div>
                  <span className="text-nude-600 font-bold text-sm">{item.price}</span>
                </div>
                
                <Link to={`/portfolio/${item.id}`}>
                  <h2 className="text-2xl font-serif text-zinc-800 group-hover:text-nude-500 transition-colors">
                    {item.title}
                  </h2>
                </Link>
                
                <p className="text-sm text-zinc-500 leading-relaxed line-clamp-4 flex-grow">
                  {item.description}
                </p>

                <div className="pt-4 border-t border-nude-50 flex justify-between items-center">
                  <Link to={`/portfolio/${item.id}`} className="text-xs font-bold text-nude-400 uppercase tracking-widest hover:text-nude-600">
                    Xem chi tiết
                  </Link>
                  <Link to={`/portfolio/${item.id}`} className="w-8 h-8 rounded-full bg-nude-50 flex items-center justify-center text-nude-400 group-hover:bg-nude-400 group-hover:text-white transition-all">
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {/* SEO Content Footer */}
      <div className="bg-nude-50 p-12 rounded-[40px] space-y-6">
        <h3 className="text-2xl font-serif italic text-zinc-800">Xu hướng Nail 2026</h3>
        <p className="text-sm text-zinc-500 leading-relaxed">
          Năm 2026 chứng kiến sự lên ngôi của các mẫu nail mang tính cá nhân hóa cao. Các từ khóa như <strong>Nail Box thiết kế sang chảnh</strong>, <strong>Mẫu Nail Chrome 2026</strong>, và <strong>Nail vẽ nghệ thuật</strong> đang dẫn đầu xu hướng tìm kiếm. Khách hàng ngày càng ưa chuộng những sản phẩm không chỉ đẹp mà còn phải an toàn cho sức khỏe móng. Tại Nail Artistry, chúng tôi cam kết sử dụng 100% sơn gel hữu cơ, không chứa hóa chất độc hại, đảm bảo bộ móng của bạn luôn chắc khỏe và rạng rỡ. Hãy cùng chúng tôi cập nhật những bộ sưu tập mới nhất hàng tháng để không bỏ lỡ bất kỳ xu hướng nào!
        </p>
      </div>
    </motion.div>
  );
};

export default Portfolio;
