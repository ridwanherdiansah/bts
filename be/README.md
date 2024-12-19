# Proyek Express.js Saya

Ini adalah proyek Node.js yang dibangun dengan Express.js, TypeScript, dan Mysql.

## Daftar Isi

- [Memulai](#memulai)
- [Prasyarat](#prasyarat)
- [Instalasi](#instalasi)
- [Menjalankan Proyek](#menjalankan-proyek)
- [API Endpoints](#api-endpoints)
- [Struktur Proyek](#struktur-proyek)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Lisensi](#lisensi)

## Memulai

Instruksi ini akan membantu Anda mengatur dan menjalankan proyek di mesin lokal Anda untuk keperluan pengembangan dan pengujian.

## Prasyarat

- Node.js
- npm
- Mysql

## Postman Dokumentasi
https://documenter.getpostman.com/view/14486784/2sA3e4A92d

## Instalasi

1. Clone repositori ini ke mesin lokal Anda:
    ```sh
    git clone https://github.com/ridwanherdiansah/bts
    ```
2. Masuk ke direktori proyek:
    ```sh
    cd be
    ```
3. Instal dependensi proyek:
    ```sh
    npm install
    ```

## Menjalankan Proyek

1. Buat file `.env` di direktori root proyek dan tambahkan konfigurasi berikut:
    ```env
    APP_NAME="BE"
    APP_PORT="3000"
    BASEURL="localhost"
    APP_MODE="development"

    DB_HOST="localhost"
    DB_PORT="3306"
    DB_USERNAME="root"
    DB_PASSWORD=""
    DB_NAME="db"

    JWT_KEY="adhivasindo"
    ```
2. Transpilasi kode TypeScript ke JavaScript:
    ```sh
    npm run build
    ```
3. Jalankan server:
    ```sh
    npm start
    ```
    Server akan berjalan di `http://localhost:3000`.

## API Endpoints

Berikut adalah beberapa endpoint utama dalam API ini:

- `POST /auth/registrasi` - Registrasi users
- `POST /auth/login` - login users untuk mendapatkan token JWT

- `GET /checklist/` - Mengambil daftar semua checklist dengan di beri authentikasi token JWT
- `POST /checklist/` - Menambahkan checklist baru dengan di beri authentikasi token JWT
- `PATCH /checklist/:id` - meng update data checklist sesuai id yang di kirimkan dengan di beri authentikasi token JWT
- `DELETE /checklist/:id` - meng delete data checklist sesuai id yang di kirimkan dengan di beri authentikasi token JWT
BEGIN
digunakan saat data akan diproses.
COMMIT
digunakan jika semua kasus pada alur proses berhasil. Bila demikian, fungsi commit harus diterapkan agar tersimpan di database.
ROLLBACK
digunakan jika terdapat kasus ada kegagalan (kesalahan/error) di salah satu proses itu. Maka, semua proses input akan dibatalkan (rollback) dan tidak akan disimpan ke dalam database.


