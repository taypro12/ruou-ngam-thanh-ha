import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  Flame,
  ChevronRight,
  Award,
  Star,
  Zap,
} from "lucide-react";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [searchVal, setSearchVal] = useState("");
  const [timeLeft, setTimeLeft] = useState({ h: 12, m: 30, s: 0 });

  /* ===== Countdown ===== */
  useEffect(() => {
    const t = setInterval(() => {
      setTimeLeft((p) => {
        if (p.s > 0) return { ...p, s: p.s - 1 };
        if (p.m > 0) return { h: p.h, m: p.m - 1, s: 59 };
        if (p.h > 0) return { h: p.h - 1, m: 59, s: 59 };
        return p;
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/products");
  };

  return (
    <div className="bg-[#FAF9F6] text-[#2C241E]">

      {/* ===== HERO ===== */}
      <section className="relative min-h-[70vh] flex items-center">
        <img
          src="https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?q=80&w=2000"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Hero"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/80 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/70 border border-[#B48C48]/20 rounded-full text-[10px] font-black tracking-widest text-[#B48C48]">
            <Award size={12} /> THANH HÀ PREMIUM
          </span>

          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            Tinh Hoa <br />
            <span className="bg-gradient-to-r from-[#B48C48] to-[#8C6A3A] bg-clip-text text-transparent">
              Rượu Hạ Thổ
            </span>
          </h1>

          <p className="max-w-xl text-[#7C746E] font-medium">
            Rượu sâm – rượu dược liệu ngâm thủ công, hạ thổ đủ ngày,
            chuẩn quà biếu cao cấp.
          </p>

          <form
            onSubmit={handleSearch}
            className="flex max-w-md bg-white rounded-xl border border-[#B48C48]/20 shadow"
          >
            <div className="flex items-center gap-2 px-4 flex-grow">
              <Search size={16} className="text-[#B48C48]" />
              <input
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                placeholder="Tìm rượu sâm, ba kích..."
                className="w-full outline-none bg-transparent text-sm"
              />
            </div>
            <button className="px-6 bg-[#B48C48] text-white font-black text-xs rounded-r-xl">
              TÌM
            </button>
          </form>

          <div className="flex gap-4 pt-2">
            <Link
              to="/products"
              className="px-6 py-3 bg-[#B48C48] text-white rounded-xl text-xs font-black tracking-widest"
            >
              KHÁM PHÁ
            </Link>
            <Link
              to="/products"
              className="px-6 py-3 bg-white/70 border border-[#B48C48]/20 rounded-xl text-xs font-black tracking-widest"
            >
              XEM THÊM
            </Link>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="-mt-12 relative z-20 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 bg-white/80 backdrop-blur rounded-3xl shadow border border-[#B48C48]/10">
          {[
            { label: "Sản phẩm", val: "500+", icon: Award },
            { label: "Uy tín", val: "25 năm", icon: Star },
            { label: "Đánh giá", val: "12k+", icon: Star },
            { label: "Giao nhanh", val: "2h", icon: Zap },
          ].map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 py-4 border-r last:border-none border-[#B48C48]/10"
            >
              <div className="w-9 h-9 rounded-lg bg-[#B48C48]/10 flex items-center justify-center text-[#B48C48]">
                <s.icon size={16} />
              </div>
              <div>
                <p className="font-black">{s.val}</p>
                <p className="text-[10px] font-bold text-[#7C746E] uppercase">
                  {s.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FLASH SALE ===== */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-white rounded-3xl border border-[#B48C48]/10 shadow">
          <div className="flex flex-wrap items-center justify-between px-6 py-4 border-b border-[#B48C48]/10">
            <div className="flex items-center gap-4">
              <Flame className="text-red-500 animate-pulse" size={18} />
              <span className="text-xs font-black tracking-widest uppercase">
                Hot Deals
              </span>
              <span className="text-xs text-[#7C746E]">
                {timeLeft.h}h {timeLeft.m}m {timeLeft.s}s
              </span>
            </div>
            <Link
              to="/products"
              className="text-xs font-black text-[#B48C48] flex items-center gap-1"
            >
              XEM TẤT CẢ <ChevronRight size={12} />
            </Link>
          </div>

          <div className="p-10 text-center text-[#7C746E]">
            🔥 Danh sách sản phẩm sẽ hiển thị tại đây
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
