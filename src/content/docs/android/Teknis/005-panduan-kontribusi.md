---
title: Panduan Kontribusi
description: A guide in my new Starlight docs site.
---

## **Persiapan Lingkungan Pengembangan**
Sebelum mulai menulis kode, pastikan langkah-langkah berikut sudah dilakukan:

### **Clone Repository**
Clone repository Bisatopup untuk mendapatkan salinan lokal dari proyek. 
Akses Repository harus diberikan oleh atasan yang bertanggung jawab.

### **Set Up Android Studio**
Saat ini Bisatopup dalam pengembangan sebagaimana berikut.
- Versi Aplikasi : 16.13.00
- Versi Android Studio : (Ladybug) 2024.2.1 Patch 2
- Versi Gradle Plugin : 8.1.0
- Versi Kotlin : 1.9.0
- Versi JDK : 17

### **Install Dependensi**
- Di **Android Studio**, pilih **File > Sync Project with Gradle Files** untuk memastikan semua dependensi terinstal dengan benar.

## **Proses Pengembangan Fitur Baru atau Perbaikan Bug**
Setelah persiapan selesai, berikut adalah langkah-langkah yang harus diikuti ketika Anda ingin menambahkan fitur baru atau memperbaiki bug.

### **Menambahkan Fitur Baru**
1. **(Opsional) Buat Branch Baru**  
   Buat branch baru dari branch `development` (atau branch utama proyek) dengan nama yang menggambarkan fitur yang akan ditambahkan. Gunakan perintah:
   ```bash
   git checkout -b feature/nama-fitur
   ```

   Membuat branch baru dapat menjadi pertimbangan khususnya ketika membuat fitur besar baru yang dapat membawa banyak perubahan pada _sourcecode_ dan memiliki potensi resiko sehingga kode sebelumnya perlu dijaga. Namun hal ini opsional, khususnya jika berada pada pengembangan cepat dan perubahan minor.

   > Branch utama untuk pengembangan adalah : **`Development`**

2. **Implementasi Fitur Baru**  
   - **View (Activity/Fragment)**: Tentukan apakah Anda perlu menambah Activity atau Fragment. Gunakan **Jetpack Compose** untuk mendesain UI yang responsif.
   - **Presenter**: Jika fitur baru melibatkan interaksi antara **View** dan **Interactor**, buat Presenter untuk menangani komunikasi ini.
   - **Interactor**: Buat Interactor untuk menangani logika bisnis terkait fitur baru. Jangan lupa untuk menghubungkan dengan Repository jika diperlukan.
   - **Repository**: Jika Anda membutuhkan data dari **local database** atau **remote API**, pastikan Anda menambahkan kode di **Repository** dan **EndPointService** jika perlu.

3. **Pengujian**  
   - Lakukan pengujian unit dan UI untuk memastikan fitur berfungsi dengan baik.
   - Gunakan **Espresso** atau **Compose Testing** untuk pengujian UI dan pastikan tidak ada masalah.

### **Memperbaiki Bug**
Jika Anda memperbaiki bug, langkah-langkahnya serupa dengan menambahkan fitur baru:

1. **Perbaiki Bug**  
   Temukan sumber masalah dan lakukan perbaikan di bagian kode yang relevan (misalnya Presenter, Interactor, Repository, atau UI).

2. **Pengujian**  
   Setelah perbaikan, pastikan bug sudah hilang dan aplikasi berjalan dengan lancar.

## **Build APK**
Setelah menambahkan fitur baru atau memperbaiki bug, langkah selanjutnya adalah membangun APK untuk menguji aplikasi.

### **Membangun APK**
1. Di **Android Studio**, pilih **Build > Build APK** untuk memulai proses pembuatan APK.
2. APK akan dibangun dan dapat ditemukan di direktori **app/build/outputs/apk/debug** atau **release**, tergantung pada mode build yang dipilih.

### **Verifikasi APK**
Instal APK pada emulator atau perangkat fisik untuk memastikan bahwa fitur baru atau perbaikan bug berfungsi dengan baik.

## **Commit dan Push Kode**
Setelah Anda selesai mengimplementasikan fitur atau perbaikan bug, lakukan commit dan push kode Anda ke repository.

### **Periksa Status Kode**
Sebelum melakukan commit, periksa status perubahan yang telah dilakukan dengan perintah:
```bash
git status
```

### **Tambahkan Perubahan ke Staging Area**
Untuk menambahkan perubahan yang sudah dilakukan, gunakan perintah:
```bash
git add .
```
Atau, jika Anda hanya ingin menambahkan file tertentu:
```bash
git add path/to/file
```

### **4.3. Commit Perubahan**
Lakukan commit dengan pesan yang jelas dan deskriptif. Gunakan format berikut untuk pesan commit:
- **feat**: untuk menambahkan fitur baru.
- **fix**: untuk perbaikan bug.
- **refactor**: untuk perubahan kode tanpa merubah fungsionalitas.
- **docs**: untuk perubahan dokumentasi.
- **test**: untuk menambah atau memperbaiki unit test.

Contoh pesan commit:
```bash
git commit -m "feat: Menambahkan fitur login menggunakan Google"
```

### **Push Perubahan ke Repository**
Setelah commit selesai, push perubahan Anda ke repository dengan perintah:
```bash
git push origin feature/nama-fitur
```

## **Mengatasi Konflik Git**
Terkadang saat melakukan **merge** atau **pull**, Anda mungkin akan menemui konflik. Berikut adalah cara mengatasinya:

1. **Identifikasi Konflik**:
   Gunakan perintah berikut untuk melihat status konflik:
   ```bash
   git status
   ```

2. **Perbaiki Konflik**:
   Buka file yang memiliki konflik dan pilih perubahan yang sesuai.

3. **Tambahkan dan Commit Perubahan**:
   Setelah konflik diperbaiki, tambahkan file yang sudah diperbaiki dan lakukan commit ulang:
   ```bash
   git add .
   git commit -m "fix: Menyelesaikan konflik merge"
   ```

4. **Push Perubahan**:
   Setelah konflik selesai diselesaikan, lakukan push kembali:
   ```bash
   git push origin <branch>
   ```

---

Dengan mengikuti panduan ini, programmer baru dapat berkontribusi dengan baik dalam proyek Bisatopup, memastikan alur pengembangan yang terstruktur dan efisien.