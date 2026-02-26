import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { ArrowRight, Star } from 'lucide-react';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-24 pb-24"
    >
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/nailhero/1920/1080?blur=2"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-nude-50/50 to-white"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full bg-nude-100 text-nude-600 text-xs font-bold uppercase tracking-widest">
              <Star size={12} fill="currentColor" />
              <span>Nail Artistry 2026</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] text-zinc-900">
              Vẻ Đẹp <br />
              <span className="italic text-nude-500">Trong Từng</span> <br />
              Điểm Chạm.
            </h1>
            <p className="text-lg text-zinc-500 max-w-md leading-relaxed">
              Khám phá không gian làm đẹp sang trọng, nơi mỗi bộ móng là một tác phẩm nghệ thuật được thiết kế riêng cho bạn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-nude-400 text-white px-8 py-4 rounded-full font-medium hover:bg-nude-500 transition-all shadow-lg shadow-nude-200 flex items-center justify-center space-x-2"
              >
                <span>Đặt Lịch Ngay</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/portfolio"
                className="border border-nude-200 text-zinc-800 px-8 py-4 rounded-full font-medium hover:bg-nude-50 transition-all flex items-center justify-center"
              >
                Xem Portfolio
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl rotate-3">
              <img
                src="https://picsum.photos/seed/nailart/800/1000"
                alt="Featured Nail Art"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 aspect-square w-64 rounded-[30px] overflow-hidden shadow-xl -rotate-6 border-8 border-white">
              <img
                src="https://picsum.photos/seed/nailart2/500/500"
                alt="Detail"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 relative">
          <div className="aspect-square bg-nude-100 rounded-full absolute -top-10 -left-10 w-full h-full -z-10 opacity-50"></div>
          <img
            src="https://picsum.photos/seed/artist/800/800"
            alt="About Me"
            className="rounded-3xl shadow-xl w-full aspect-square object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="order-1 md:order-2 space-y-6">
          <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-nude-500">Về Tôi</h2>
          <h3 className="text-4xl font-serif italic text-zinc-900">Người thổi hồn vào những bộ móng.</h3>
          <p className="text-zinc-500 leading-relaxed">
            Chào bạn, mình là một nghệ sĩ làm móng với hơn 5 năm kinh nghiệm trong ngành. Với mình, nail không chỉ là làm đẹp, mà là cách để mỗi người phụ nữ thể hiện cá tính và sự tự tin của bản thân.
          </p>
          <p className="text-zinc-500 leading-relaxed">
            Mình luôn cập nhật những xu hướng mới nhất từ Hàn Quốc, Nhật Bản và Châu Âu để mang đến cho khách hàng những trải nghiệm đẳng cấp nhất. Sự tỉ mỉ, an toàn và hài lòng của khách hàng luôn là ưu tiên hàng đầu của mình.
          </p>
          <div className="pt-4 grid grid-cols-2 gap-8">
            <div>
              <div className="text-3xl font-serif text-nude-600">500+</div>
              <div className="text-xs uppercase tracking-widest text-zinc-400 font-bold">Khách Hàng</div>
            </div>
            <div>
              <div className="text-3xl font-serif text-nude-600">1000+</div>
              <div className="text-xs uppercase tracking-widest text-zinc-400 font-bold">Mẫu Thiết Kế</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-nude-50 py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-nude-500">Dịch Vụ</h2>
            <h3 className="text-5xl font-serif text-zinc-900">Dịch Vụ Nổi Bật</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-all border border-nude-100 group"
              >
                <div className="w-12 h-12 bg-nude-100 rounded-2xl flex items-center justify-center text-nude-600 mb-6 group-hover:bg-nude-400 group-hover:text-white transition-colors">
                  <service.icon size={24} />
                </div>
                <h4 className="text-xl font-bold text-zinc-800 mb-3">{service.title}</h4>
                <p className="text-sm text-zinc-500 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="text-nude-600 font-bold">{service.price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="bg-nude-400 rounded-[40px] p-12 md:p-20 text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-nude-600/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
          
          <h3 className="text-4xl md:text-5xl font-serif text-white relative z-10">Sẵn sàng để tỏa sáng?</h3>
          <p className="text-nude-50 max-w-xl mx-auto relative z-10">
            Hãy để chúng mình giúp bạn sở hữu bộ móng trong mơ. Đặt lịch ngay hôm nay để nhận ưu đãi 10% cho khách hàng mới.
          </p>
          <div className="relative z-10">
            <Link
              to="/contact"
              className="bg-white text-nude-600 px-10 py-4 rounded-full font-bold hover:bg-nude-50 transition-all inline-block"
            >
              Đặt Lịch Ngay
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
