import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { SERVICES } from '../constants';
import { Phone, Mail, MapPin, CheckCircle2, Send, Clock, Calendar as CalendarIcon } from 'lucide-react';

interface BookingForm {
  name: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  message: string;
}

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<BookingForm>();

  const onSubmit = async (data: BookingForm) => {
    // Simulate API call
    console.log('Form Data:', data);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-6 py-12 space-y-16"
    >
      <div className="text-center space-y-4">
        <h1 className="text-5xl md:text-6xl font-serif text-zinc-900">Liên Hệ & Đặt Lịch</h1>
        <p className="text-zinc-500 max-w-xl mx-auto">
          Hãy để lại thông tin, chúng mình sẽ liên hệ xác nhận lịch hẹn với bạn trong vòng 30 phút.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-12">
          <div className="space-y-8">
            <h2 className="text-2xl font-serif italic text-zinc-800">Thông tin liên hệ</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-nude-100 flex items-center justify-center text-nude-600 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-800">Địa chỉ</h4>
                  <p className="text-sm text-zinc-500">123 Đường Nude Pink, Quận 1, TP. Hồ Chí Minh</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-nude-100 flex items-center justify-center text-nude-600 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-800">Điện thoại</h4>
                  <p className="text-sm text-zinc-500">090 123 4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-nude-100 flex items-center justify-center text-nude-600 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-800">Email</h4>
                  <p className="text-sm text-zinc-500">hello@nailartistry.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-nude-50 p-8 rounded-[32px] space-y-4">
            <h3 className="font-bold text-zinc-800">Lưu ý khi đặt lịch:</h3>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-nude-400" />
                Vui lòng đến đúng giờ hẹn.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-nude-400" />
                Hủy lịch vui lòng báo trước 2 tiếng.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-nude-400" />
                Ưu đãi 10% khi đặt lịch qua website.
              </li>
            </ul>
          </div>
        </div>

        {/* Booking Form */}
        <div className="lg:col-span-3 bg-white border border-nude-100 rounded-[40px] p-8 md:p-12 shadow-sm">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">Họ và Tên</label>
                  <input
                    {...register('name', { required: 'Vui lòng nhập họ tên' })}
                    placeholder="Nguyễn Văn A"
                    className="w-full px-6 py-4 rounded-2xl bg-nude-50 border-none focus:ring-2 focus:ring-nude-300 transition-all outline-none"
                  />
                  {errors.name && <p className="text-xs text-red-400 ml-1">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">Số Điện Thoại</label>
                  <input
                    {...register('phone', { required: 'Vui lòng nhập số điện thoại' })}
                    placeholder="0901234567"
                    className="w-full px-6 py-4 rounded-2xl bg-nude-50 border-none focus:ring-2 focus:ring-nude-300 transition-all outline-none"
                  />
                  {errors.phone && <p className="text-xs text-red-400 ml-1">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">Ngày Hẹn</label>
                  <div className="relative">
                    <input
                      type="date"
                      {...register('date', { required: 'Chọn ngày hẹn' })}
                      className="w-full px-6 py-4 rounded-2xl bg-nude-50 border-none focus:ring-2 focus:ring-nude-300 transition-all outline-none appearance-none"
                    />
                    <CalendarIcon size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
                  </div>
                  {errors.date && <p className="text-xs text-red-400 ml-1">{errors.date.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">Giờ Hẹn</label>
                  <div className="relative">
                    <input
                      type="time"
                      {...register('time', { required: 'Chọn giờ hẹn' })}
                      className="w-full px-6 py-4 rounded-2xl bg-nude-50 border-none focus:ring-2 focus:ring-nude-300 transition-all outline-none appearance-none"
                    />
                    <Clock size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
                  </div>
                  {errors.time && <p className="text-xs text-red-400 ml-1">{errors.time.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">Dịch Vụ</label>
                <select
                  {...register('service', { required: 'Chọn dịch vụ' })}
                  className="w-full px-6 py-4 rounded-2xl bg-nude-50 border-none focus:ring-2 focus:ring-nude-300 transition-all outline-none appearance-none"
                >
                  <option value="">Chọn dịch vụ...</option>
                  {SERVICES.map(s => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                </select>
                {errors.service && <p className="text-xs text-red-400 ml-1">{errors.service.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">Ghi Chú (Tùy chọn)</label>
                <textarea
                  {...register('message')}
                  rows={4}
                  placeholder="Yêu cầu thêm của bạn..."
                  className="w-full px-6 py-4 rounded-2xl bg-nude-50 border-none focus:ring-2 focus:ring-nude-300 transition-all outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-nude-400 text-white py-5 rounded-2xl font-bold hover:bg-nude-500 transition-all shadow-lg shadow-nude-100 flex items-center justify-center space-x-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>Gửi Yêu Cầu Đặt Lịch</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-12 space-y-6"
            >
              <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-3xl font-serif text-zinc-800">Đặt lịch thành công!</h3>
              <p className="text-zinc-500">
                Cảm ơn bạn đã tin tưởng Nail Artistry. Chúng mình sẽ liên hệ xác nhận sớm nhất có thể.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-nude-500 font-bold uppercase tracking-widest text-xs hover:underline"
              >
                Đặt thêm lịch khác
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
