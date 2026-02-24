/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { FileText, Search, BookOpen, ExternalLink, GraduationCap, Database } from "lucide-react";

export default function App() {
  const menuItems = [
    {
      title: "Buka Daftar CP MI 2025",
      icon: <FileText className="w-6 h-6" />,
      description: "Capaian Pembelajaran Madrasah Ibtidaiyah Terbaru",
      href: "#", // Placeholder for actual link
      external: true,
      color: "bg-emerald-50 text-emerald-700 border-emerald-100 hover:bg-emerald-100",
    },
    {
      title: "Buka Daftar TP Poin dari CP MI 2025",
      icon: <FileText className="w-6 h-6" />,
      description: "Tujuan Pembelajaran yang diderivasi dari CP",
      href: "#", // Placeholder for actual link
      external: true,
      color: "bg-blue-50 text-blue-700 border-blue-100 hover:bg-blue-100",
    },
    {
      title: "Analisator CP-TP Insersi KBC",
      icon: <Search className="w-6 h-6" />,
      description: "Analisis CP-TP dengan Integrasi Kurikulum Berbasis Cinta",
      href: "/analisator",
      external: false,
      color: "bg-rose-50 text-rose-700 border-rose-100 hover:bg-rose-100",
    },
    {
      title: "Generator Modul Ajar (RPP)",
      icon: <BookOpen className="w-6 h-6" />,
      description: "Pembuatan Rencana Pelaksanaan Pembelajaran Otomatis",
      href: "/generator",
      external: false,
      color: "bg-amber-50 text-amber-700 border-amber-100 hover:bg-amber-100",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* Top Header Bar */}
      <header className="bg-gradient-to-r from-[#14532D] via-[#22C55E] to-[#14532D] text-white px-6 py-4 flex items-center justify-end shadow-lg border-t-2 border-[#A3E635]/30">
        <div className="text-sm opacity-90 font-medium tracking-wide">
          Aplikasi Pemetaan Kurikulum MI 2026
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-6">
        {/* Logo and Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 max-w-2xl"
        >
          <div className="flex justify-center mb-6">
            <img 
              src="https://i.imgur.com/c2nZnUZ.png" 
              alt="Logo Kemenag" 
              className="h-24 w-auto drop-shadow-sm"
              referrerPolicy="no-referrer"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-2 tracking-tight">
            Administrasi Kurikulum MI
          </h1>
          <p className="text-lg md:text-xl text-emerald-700 font-medium">
            Otomatisasi KMA 1503/2025 — Kurikulum Berbasis Cinta
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-emerald-600 font-semibold text-sm uppercase tracking-wider">
            <GraduationCap className="w-5 h-5" />
            <span>Jenjang Madrasah Ibtidaiyah</span>
          </div>
        </motion.div>

        {/* Grid Menu Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
          {menuItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target={item.external ? "_blank" : "_self"}
              rel={item.external ? "noopener noreferrer" : ""}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`group relative flex flex-col p-6 rounded-2xl border-2 transition-all duration-300 ${item.color} shadow-sm hover:shadow-md active:scale-[0.98]`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-white/80 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                {item.external && (
                  <ExternalLink className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
                )}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm opacity-80 leading-relaxed">
                {item.description}
              </p>
            </motion.a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[#E2E8F0] py-6 flex items-center justify-center">
        <div className="text-[#88A4C1] text-sm font-medium">
          © 2026 Faisal Amin - Pamarican
        </div>
      </footer>
    </div>
  );
}
