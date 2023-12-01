# Rakamin x Qwords

## Langkah-langkah Penggunaan

Berikut adalah langkah-langkah untuk mengkloning dan menjalankan proyek ini secara lokal.

1. **Persiapkan Lingkungan:**
   - Pastikan PHP, Composer, Node.js, dan npm sudah terinstal di komputer Anda.

2. **Clone Proyek dari GitHub:**
   ```bash
   https://github.com/Kyudyoz/Qwords.git)https://github.com/Kyudyoz/Qwords.git
3. **Masuk ke direktori project**
4. **Instal Dependensi Composer**
    ```bash
    composer install
5. **Instal Dependensi Npm**
    ```bash
    npm install

- atau jika menggunakan yarn
    ```
    yarn install
6. **Buat salinan .env** 
   - Duplikat file .env.example dan ubah namanya menjadi .env
   - Kemudian, konfigurasi file .env sesuai dengan pengaturan lingkungan Anda, seperti konfigurasi database.
7. **Generate Kunci Aplikasi**
    ```bash
    php artisan key:generate
8. **Jalankan Migrasi Database**
    ```bash
    php artisan migrate
9. **Jalankan Server Lokal**
   Buka 2 terminal
- terminal 1 jalankan :
  ```
  npm run dev --watch
- terminal 2 jalankan :
  ```
  php artisan serve
