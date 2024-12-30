---
title: Data Flow
description: A guide in my new Starlight docs site.
---
Berikut adalah penjelasan tentang **data flow** dari struktur proyek Bisatopup berdasarkan arsitektur yang digunakan:

### **1. Permintaan dari View (Activity/Fragment)**
- Ketika pengguna melakukan suatu aksi (misalnya menekan tombol), **Activity** atau **Fragment** mengirimkan permintaan ke **Presenter**.
- **Activity** berfungsi sebagai entry point dan hanya menangani interaksi pengguna, lalu menyerahkan logika lebih lanjut kepada **Presenter**.

---

### **2. Presenter**
- **Presenter** bertindak sebagai **mediator** antara **View** dan **Interactor**.
- Ketika menerima permintaan dari **View**, **Presenter**:
  1. Memproses logika ringan jika perlu.
  2. Mengirimkan permintaan ke **Interactor** untuk mengambil data atau menjalankan logika bisnis.

---

### **3. Interactor**
- **Interactor** adalah lapisan yang bertanggung jawab untuk menangani logika bisnis.
- Setelah menerima permintaan dari **Presenter**, **Interactor**:
  1. Berkomunikasi dengan **Repository** untuk mengambil data dari database lokal atau remote API.
  2. Melakukan pengolahan data (jika diperlukan).
  3. Mengembalikan hasil data yang sudah diolah ke **Presenter**.

- Interactor memiliki **InteractorImpl**, yaitu implementasi konkrit dari abstraksi **Interactor**, sehingga logika bisnis yang kompleks didefinisikan dan dijalankan di sini.

---

### **4. Repository**
- **Repository** bertindak sebagai sumber data utama aplikasi.
- Repository menerima permintaan data dari **Interactor** dan mengambil data dari salah satu sumber berikut:
  1. **Database lokal**: Jika data sudah tersedia di cache lokal atau database seperti Room.
  2. **Remote API**: Jika data tidak tersedia secara lokal, Repository akan meminta data dari remote API melalui **EndPointService**.

- Repository memiliki struktur modular, mencakup:
  - **CacheRepository** untuk penyimpanan sementara.
  - **RemoteRepository** untuk komunikasi dengan API.
  - **Database** untuk pengelolaan data lokal.
  - **EndPointService** sebagai abstraksi untuk endpoint API.

---

### **5. Kembali ke Presenter**
- Setelah **Interactor** menerima data dari **Repository**, data tersebut diteruskan kembali ke **Presenter**.
- **Presenter** mengolah data ini jika diperlukan, seperti:
  - Format ulang data agar cocok untuk UI.
  - Menentukan bagaimana data akan ditampilkan (e.g., urutan, pengelompokan, dll.).
- Setelah pengolahan selesai, Presenter mengirimkan data ke **View**.

---

### **6. Menampilkan di View**
- **View (Activity/Fragment)** menerima data dari **Presenter** dan bertugas:
  1. Memperbarui UI sesuai dengan data yang diterima.
  2. Menampilkan notifikasi atau dialog (jika diperlukan).
  3. Menggunakan elemen-elemen UI (misalnya Jetpack Compose) untuk memastikan data terlihat sesuai kebutuhan.

---
```txt
View (Activity/Fragment)
    |
    |---> Presenter
           |
           |---> Interactor
                  |
                  |---> Repository
                         |  
                         |---> Cache (Local Database)
                         |
                         |---> Remote API (EndPointService)
                         |
                         |<--- Data dikembalikan ke Repository
                  |
                  |<--- Data dikembalikan ke Interactor
           |
           |<--- Data dikembalikan ke Presenter
    |
    |<--- Data dikembalikan ke View
```