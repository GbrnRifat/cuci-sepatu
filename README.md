# Cuci Sepatu

## Deskripsi Umum Proyek
API sederhana untuk layanan daftar barang cuci sepatu. Mengelola data sepatu yang sedang dicuci dengan operasi CRUD dan filter berdasarkan status yang terjadi. API ini menggunakan express.js dan node.js. 

Tujuan pembuatan API ini untuk mempermudah layanan cuci sepatu

## Tujuan dan Fitur Utama
- *Tujuan*: Memfasilitasi pengelolaan daftar sepatu di layanan cuci sepatu.
- *Fitur Utama*:
  - Tambah sepatu baru (Create).
  - Lihat daftar sepatu (Read), dengan filter status.
  - Update informasi sepatu.
  - Hapus sepatu (Delete).

## Struktur Data
Setiap item sepatu memiliki:
    {
        "id": "d8ae60c1-2b17-47eb-9718-c28c382e3ba4",
        "nama": "Converse",
        "status": "Sedang Dicuci",
        "tanggalMasuk": "2025-10-08",
        "tanggalSelesai": "-",
        "created_at": "2025-10-23T16:00:37.353282"
    },

## Alur Kerja API
1. Client mengirim request ke endpoint (e.g., POST /items).
2. Server memproses request, berinteraksi dengan Supabase.
3. Response dikirim kembali dalam format JSON.

## Teknologi yang Digunakan
- *Backend*: Node.js + Express.js.
- *Database*: Supabase (PostgreSQL).
- *Deployment*: Vercel.
- *Lainnya*: CORS, dotenv.

## Hasil Akhir
API yang dapat diakses publik via Vercel, dengan endpoint CRUD dan filter sehingga mempermudah akses untuk layanan.

## Contoh Request dan Response
- *POST /items* (Create):
  - Request: {"nama_pemilik": "Gibran Alex", "jenis_sepatu": "Converse"}
  - Response: {"id": "created_at", "nama_pemilik": "Gibran Alex", ...}
- *GET /items?status=Selesai* (Read with filter):
  - Response: Array of items with status "Selesai".
- *PUT /items/:id* (Update):
  - Request: {"status": "Selesai", tanggalSelesai: 2025-10-07}
  - Response: Status sepatu berhasil diperbarui.
- *DELETE /items/:id* (Delete):
  - Response: {"message": "Data sepatu berhasil dihapus"}

## Langkah Instalasi dan Cara Menjalankan API
1. Clone repo: git clone <repo-url>.
2. Install dependencies: npm install.
3. Setup .env dengan SUPABASE_URL dan SUPABASE_ANON_KEY.
4. Jalankan lokal: npm run dev.
5. Deploy ke Vercel: vercel --prod.

## Link Deploy (Vercel)
https://cuci-sepatu-red.vercel.app/
