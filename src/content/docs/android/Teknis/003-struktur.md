---
title: Struktur
description: Dokumentasi Interaktif Bisatopup
---
# **Struktur Proyek Bisatopup Android**
```txt
com.amanahcorp.bisatopup
├── core
│   ├── compose
│   ├── injection
│   ├── interactor
│   │   ├── BaseInteractor
│   │   └── BaseInteractorImpl
│   ├── presenter
│   │   ├── BasePresenter
│   │   └── BasePresenterImpl
│   ├── AppBisatopup
│   ├── BaseActivity
│   ├── BaseFragment
│   ├── BaseView
├── helper
│   ├── adapter                      <-- RecycleView Adapter
│   ├── biometric
│   ├── components
│   ├── event
│   ├── googlelib
│   ├── printer
│   ├── provider
│   ├── services
│   ├── typeconverter
│   ├── AppSignatureHelper
│   ├── AspectRatioFragment
│   ├── AvatarGenerator
│   ├── Constant
│   ├── CustomTabHelper
│   ├── FingerprintHandler
│   ├── FocusControl
│   ├── GeneratePictureStyleNotification
│   ├── GPSTracker
│   ├── Json
│   ├── MoneyTextWatcher
│   ├── MyAxisValueFormatter
│   ├── MyValueFormatter
│   ├── PaginationAdapterCallback
│   ├── PaginationScrollListener
│   ├── PaymentsUtil
│   ├── ProgressHelper
│   ├── User
│   └── Utils
├── loader
│   ├── PresenterFactory
│   └── PresenterLoader
├── repository
│   ├── boundarycallback
│   ├── cacherepository
│   ├── database
│   ├── model
│   ├── pref
│   │   ├── EndPointService
│   │   ├── ErrorHandler
│   │   ├── Networking
│   │   ├── NetworkProgressListener
│   │   ├── RemoteRepository
│   │   └── UserAgentInterceptor
├── view
│   ├── about
│   ├── address
│   │   ├── input
│   │   │   ├── AddressesActivity
│   │   │   ├── AddressesInteractor
│   │   │   ├── AddressesInteractorImpl
│   │   │   ├── AddressesPresenter
│   │   │   ├── AddressesPresenterImpl
│   │   │   ├── AddressesView
│   │   │   ├── AddressesViewComponent
│   │   │   └── AddressesViewModule
│   ├── affiliasi
│   ├── alquran
│   ├── auth
│   ├── balancetransfer
│   ├── bantuan
│   ├── belivoucher
│   ├── bisabelajar
│   ├── bulk
│   ├── camera
│   ├── cart
│   ├── catatanhutang
│   ├── cekvoucher
│   ├── checkout
│   ├── detailprayer
│   ├── doazikir
│   ├── donasi
│   ├── favorite
│   ├── flashsale
│   ├── main
│   ├── muslimproduct
│   ├── note
│   ├── notification
│   ├── paymentlink
│   ├── point
│   ├── pos
│   ├── printersettings
│   ├── produk
│   ├── qris
│   ├── qurban
│   ├── reminder
│   ├── security
│   ├── splash
│   ├── tagihan
│   ├── term
│   ├── ticketing
│   ├── topup
│   ├── transaction
│   ├── upgrade
│   ├── verifyphone
│   ├── wallethistory
│   └── webview
```

Berikut adalah versi **markdown** dari overview struktur proyek **Bisatopup**, dilengkapi dengan penjelasan terkait komponen di dalam setiap anggota `view`:

---

## **Overview Struktur Proyek Bisatopup**

### **1. Core**
Berisi komponen inti aplikasi, mencakup:
- **Compose**: Pengaturan tema atau elemen berbasis Jetpack Compose.
- **Injection**: Konfigurasi dependency injection.
- **Interactor**: Pengelolaan business logic aplikasi.
- **Presenter**: Kelas dasar untuk aktivitas, fragment, dan view seperti:
  - `BaseActivity`
  - `BaseFragment`
  - `BaseView`

---

### **2. Helper**
Kumpulan utility dan komponen pendukung aplikasi:
- **Kategori Helper**:
  - `adapter`, `biometric`, `googlelib`, `focuscontrol`, dll.
- **Fungsi Utama**:
  - **`AppSignatureHelper`**: Membantu menghasilkan signature aplikasi.
  - **`Utils`**: Kumpulan fungsi utility umum.
  - **Formatter**: Seperti `MyAxisValueFormatter` untuk format angka.
  - **Pagination Helpers**: Membantu implementasi pagination.
  - **`PaymentsUtil`**: Utilitas untuk pembayaran.

---

### **3. Loader**
Fungsi untuk mempermudah loading presenter, seperti:
- **`PresenterFactory`**
- **`PresenterLoader`**

---

### **4. Repository**
Layer data untuk mengelola sumber data lokal maupun remote, mencakup:
- **`CacheRepository`**: Penyimpanan sementara (cache).
- **`Database`**: Pengelolaan database lokal.
- **`RemoteRepository`**: Akses data dari API atau sumber remote.
- **`EndPointService`**: Daftar endpoint API.

---

### **5. View**
Modul antarmuka pengguna, dengan struktur modular berdasarkan fitur, misalnya:
- **`about`**: Halaman informasi aplikasi.
- **`auth`**: Modul autentikasi.
- **`alquran`**: Fitur terkait Al-Qur'an.
- **`donasi`**: Fitur donasi.
- **`produk`**: Manajemen produk.
- **`flashsale`**: Promosi diskon.
- **`transaction`**: Pengelolaan transaksi.
- **`tagihan`**: Pembayaran tagihan.
- **`topup`**: Pengisian saldo.
- **`notification`**: Modul notifikasi.
- **`webview`**: Tampilan konten berbasis web.

### **Penjelasan Komponen di Setiap Modul View**
Setiap subdirektori dalam folder `view` (misalnya `auth`, `alquran`, `donasi`, dll.) biasanya memiliki komponen berikut:

#### **Activity**
Merupakan entry point untuk modul tersebut. Biasanya digunakan untuk mengelola UI utama modul dan interaksi pengguna.

#### **Interactor**
Berisi **abstraksi** dari logika bisnis atau fungsionalitas utama modul, seperti pengolahan data atau komunikasi dengan repository. 

#### **InteractorImpl**
Implementasi konkrit dari **Interactor**. Berfungsi untuk menjalankan logika bisnis yang didefinisikan di dalam interfacenya.

#### **Presenter**
Berisi **abstraksi** untuk mengelola aliran data antara **Interactor** dan **View**. Presenter bertanggung jawab memastikan data ditampilkan dengan benar di UI.

#### **PresenterImpl**
Implementasi dari **Presenter**, berisi logika untuk menghubungkan data dari **Interactor** ke UI (Activity atau Fragment).

#### **Component**
Berisi konfigurasi untuk dependency injection menggunakan **Dagger/Hilt**, menghubungkan modul dengan dependensinya.

#### **ViewModule**
Berisi definisi atau penyediaan dependensi untuk kelas-kelas yang diperlukan dalam modul tersebut, seperti Presenter atau Interactor.

---

## **Kenapa Struktur Ini Digunakan?**

1. **Modularitas**: Setiap fitur atau modul (`auth`, `alquran`, dll.) memiliki struktur yang sama, membuatnya mudah untuk diimplementasikan, diperbarui, atau diperbaiki secara terpisah.
   
2. **Clean Architecture**: Pemisahan logika bisnis (**Interactor**) dan logika presentasi (**Presenter**) memastikan kode lebih terorganisir dan mengikuti prinsip **Separation of Concerns**.

3. **Scalability**: Dengan struktur seperti ini, pengembang dapat dengan mudah menambahkan fitur baru tanpa mengganggu modul lain.

4. **Testability**: Pemisahan kelas ke dalam `Interactor`, `Presenter`, dan implementasi masing-masing memungkinkan pengujian unit untuk setiap lapisan secara independen.

5. **Dependency Injection**: Penggunaan `Component` dan `ViewModule` mempermudah manajemen dependensi, membuat kode lebih efisien dan konsisten.

---

Dengan pendekatan ini, proyek **Bisatopup** memiliki arsitektur yang bersih, modular, dan skalabel, yang sangat cocok untuk aplikasi besar dengan banyak fitur.

<!-- ## Module

## Pattern -->