# Administrasi Kurikulum MI - KMA 1503/2025

Otomatisasi Administrasi Kurikulum Madrasah Ibtidaiyah berbasis KMA 1503/2025 - Kurikulum Berbasis Cinta.

## Fitur
- Dashboard Administrasi Kurikulum
- Integrasi KMA 1503/2025
- Tampilan Modern & Responsif (Tailwind CSS + Framer Motion)

## Cara Deploy ke Vercel

1. **Push ke GitHub**:
   - Buat repository baru di GitHub.
   - Hubungkan folder proyek ini ke repository tersebut.
   - Push kode Anda.

2. **Hubungkan ke Vercel**:
   - Masuk ke [Vercel](https://vercel.com).
   - Klik **"Add New"** > **"Project"**.
   - Pilih repository GitHub Anda.

3. **Konfigurasi Environment Variables**:
   - Di bagian **Environment Variables**, tambahkan:
     - `GROQ_API_KEY`: (Kunci API Groq Anda)
   - Klik **Deploy**.

## Pengembangan Lokal

```bash
npm install
npm run dev
```

Aplikasi akan berjalan di `http://localhost:3000`.

## Lisensi
© 2026 Faisal Amin - Pamarican
