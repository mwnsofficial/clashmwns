---
title:  "Portal CoovaChilli"
published: true
permalink: portal_coovachilli.html
summary: "Saya akan bantu anda untuk install dan setting ttyd di openwrt."
tags: [openwrt]
---
 
Awalnya, pusat pengembangan captive adalah ChilliSpot, tetapi sudah lama rusak. Jadi garpu CoovaChilli telah sepenuhnya mengambil alih fungsinya. Sedemikian rupa sehingga jika Anda melihat referensi untuk "cabai" di internet, seperti dalam "kami merekomendasikan atau mencari cabai", Anda mungkin mengira itu berarti "coovachilli". Dan tentu saja, biner utama CoovaChilli adalah 'chilli' dan konfigurasinya ada di '/etc/chilli'. Jadi itu pengganti langsung untuk ChilliSpot.
 
CoovaChilli telah tersedia sebagai paket di OpenWrt selama bertahun-tahun sekarang dan jika Anda membuat skrip startup init.d secara manual dan mengedit file konfigurasi default, itu telah berfungsi dengan baik setidaknya sejak Backfire 10.03. 
 
Tapi sejak 15.05 Chaos Calmer masih terintegrasi dengan sangat baik. Tidak hanya ada skrip startup sekarang, tetapi skrip startup menerjemahkan konfigurasi versi OpenWrt di file /etc/config/chilli. Jadi itu diimplementasikan dengan baik di OpenWrt. Terima kasih banyak kepada pengembang anonim (milik saya). Namun tanpa dokumentasi, saya butuh waktu untuk memahami opsi konfigurasi baru, jadi saya menulis dokumen ini untuk membantu orang lain. Soalnya, skrip dan tata letak versi baru tidak cocok dengan yang lama. Metode 'manual' lama menggunakan chilli_opt untuk mengubah file /etc/chilli/default menjadi opsi, metode baru mengubah file /etc/config/chilli menjadi opsi. Dan opsi dan itu sangat berbeda. Juga, sistem baru tampaknya mencerminkan 1:1 ke opsi biner nyata, tetapi ada dua perbedaan halus. Jika Anda ingin menggunakan coova versi lama, hapus dan ganti skrip /etc/init.d/chilli yang disediakan oleh Chaos Calmer, dan ubah /etc/chilli/default seperti sebelumnya.
 
Jika Anda ingin menggunakan coova menggunakan versi terbaru, abaikan /etc/chilli/default, jangan ubah atau ganti skrip /etc/init.d/chilli yang disediakan oleh Chaos Calmer dan ubah hanya /etc/config/chilli 
 
CoovaChilli *bukan* solusi Hotspot lengkap 
 
Chilli adalah satu-satunya komponen jaringan HotSpot yang berfungsi penuh. Ini adalah bagian portalnya. Ini mencakup pemblokiran klien baru, penetapan alamat IP (DHCP), penetapan WISPr, penegakan bandwidth dan batas penggunaan. Tapi itu tidak memengaruhi ulasan atau pembayaran.
 
Untuk yang terakhir, Anda biasanya memerlukan server dan database Radius, serta aplikasi bisnis dan lapisan notifikasi untuk menyediakan voucher, hadiah, dan pembayaran, atau cukup akses ke tombol "terima status". Saat Anda memilih solusi berbasis OpenWrt, kami berasumsi bahwa Anda akan menjalankan pencadangan di lingkungan terpisah dan alat OpenWrt hanya mengelola segmen jaringan. Jika demikian, Chilli harus dikonfigurasi untuk terhubung ke server utama, server buatan sendiri, atau penyedia layanan profesional. Mungkin ada verifikasi 'alamat mac saja' di CoovaChilli, jadi Radius dapat dibiarkan dan hanya memiliki solusi front-end, tetapi halaman wiki ini tidak membahas opsi ini, jika opsi itu memungkinkan.
 
Saya sendiri menggunakan HotSpotSystem, jadi beberapa contoh di bawah ini memiliki nama server dan contoh mungkin bergantung pada kebutuhan mereka. Penyedia lainnya adalah Sputnik; Wi-FiDog; WorldSpot tetapi mungkin ada banyak lainnya.
 
Untuk solusi sederhana, nonkomersial, alat tunggal dengan laman landas hosting, pertimbangkan Nodogsplash atau OpenNDS sebagai gantinya. WifiDog juga tampaknya memiliki paket OpenWrt di luar kotak, tetapi saya tidak yakin apakah itu memerlukan dukungan backend.
 
Opsi konfigurasi 
Secara umum, semua opsi yang memungkinkan dapat digunakan dalam chilli binary (man chilli.conf(5)) di file /etc/config/chilli. Setiap pilihan harus diawali dengan kata kunci 'pilihan'. Jadi misalnya: 

| command line|chilli -c <file> | /etc/config/chilli|old-style | /etc/chilli/defaults |
| -radiusnasid <value> |》radiusnasid=<value> | option radiusnasid “value”|HS_NASID=“value” |
| -radiussecret <value> | radiussecret=<value> | option radiussecret “value” | HS_RADSECRET=“value” |
| -uamsecret <value> | uamsecret=<value> | option uamsecret “value” | HS_UAMSECRET=“value” |

Pengecualian adalah ketika ada opsi null atau boolean. Misalnya swapbyte. Cukup menyetel opsi ini ke nol berarti OpenWrt tidak menanganinya. Jadi untuk opsi ini Anda harus menetapkan 1.

| command line | chilli -c <file> | /etc/config/chilli |
| -swapoctets | swapoctets | option swapoctets 1 |
| -uamanydns | uamanydns | option uamanydns 1 |

Pengecualian lain adalah opsi -uamallowed (dan mungkin uamdomain). Biner cabai menerima banyak contoh dari tema ini, sehingga Anda dapat memasukkan beberapa alamat host dengan benar. Namun, file konfigurasi OpenWrt hanya menerima satu tema. Oleh karena itu, Anda harus mengelompokkan semua host dalam satu baris, mungkin dengan tanda hubung di depan simbol "\".

| chilli -c multiline | becomes 'single' line |
| uamallowed=“hosta,hostb” | option uamallowed “hosta,hostb,\ |
| uamallowed=“hostc,hostd” | hostc,hostd” |

Saya tidak akan mengulangi daftar opsi di sini. Silakan merujuk ke halaman dokumentasi Coova sebagai gantinya: [http://coova.github.io/CoovaChilli/chilli.conf(5).html](http://coova.github.io/CoovaChilli/chilli.conf(5).html)
 
Pengaturan 
Dapatkan OpenWrt 
Gunakan setidaknya versi 15.05 Chaos Calmer atau yang lebih baru, karena di sinilah skrip init.d baru diperkenalkan. Alat web OpenWrt akan membantu Anda memutuskan firmware mana yang Anda perlukan untuk perangkat Anda dan bagaimana melakukannya. Pastikan perangkat Anda berfungsi dengan baik sebagai perute sebelum melanjutkan penyiapan CoovaChilli 
 
Instal CoovaChilli

```
opkg update
opkg install coova-chilli
```

Konfigurasikan CoovaChilli 
Untuk alasan keamanan, kami berhenti dan mematikan cabai. Begini caranya jika Anda terkunci karena kesalahan konfigurasi, Anda masih dapat mengakhiri captive portal dengan memulai ulang:

```
/etc/init.d/chilli stop
/etc/init.d/chilli disable
```

{% include links.html %}
