---
title: Belajar Clash
tags: clash
keywords: "global setting, konfigurasi, proksi, grup, rule, konfig editor, fake ip, redir host"
last_updated: "Desember 6, 2022"
summary: "Semua Penjelasan tentang clash ada di halaman ini."
published: true
sidebar: dokument
permalink: belajar_clash.html
toc: true
folder: mwns
---

### Pengenalan Clash

Clash adalah system operasional berbasis linux dan bersifat terbuka.

Di dirikan oleh [Vernesong](https://github.com/vernesong) bersama teman-teman nya di [Github](https://github.com)

Dalam clash ada beberapa kelebih dan kekurangan nya. Mari kita simak dengan seksama:

## Fitur Kelebihan

Fitur | Mendukung | Catatan
--------|-----------|-----------
Proksi | Iya | Dengan proksi, sangat memudahkan para pengguna untuk mengalihkan dan mengamankan dari data pengguna yang sebenarnya.|

## Fitur Kekurangan

Beberapa hal yang tidak di miliki oleh clash.

Fitur | Mendukung | Catatan
--------|-----------|-----------
Address List | Tidak | Address list sangat penting untuk melakukan pemisahan antar trafik dengan interface.|

### Cara Install Clash

Hal yang perlu anda lakukan adalah:

* Aktifkan OpenWRT anda

* Aktifkan Modem anda dan hubungkan ke WAN router OpenWRT

* Jika paket data habis, silahkan isi terlebih dahulu

* Login ke router OpenWRT anda

* Masuk ke Ttyd atau terminal emulator atau bisa menggunakan putty atau termux

* Salin script di bawah ini lalu tempelkan ke terminal

<pre>
opkg update
</pre>

* Tekan enter

* Salin kembali script di bawah ini untuk install paket repository

<pre>
opkg install luci luci-base dnsmasq-full coreutils coreutils-nohup bash curl ca-certificates ipset ip-full libcap libcap-bin ruby ruby-yaml unzip iptables kmod-ipt-nat iptables-mod-tproxy iptables-mod-extra kmod-tun luci-compat ip6tables-mod-nat kmod-inet-diag kmod-nft-tproxy
</pre>

* Tekan enter

* Download file [clash version 45.70](https://github.com/vernesong/OpenClash/raw/v0.45.70-beta/luci-app-openclash_0.45.70-beta_all.ipk)

* Masuk ke filemanager OpenWRT atau bisa gunakan Winscp

* Masuk ke folder root

* Upload file clash version 45.70

* Kembali masuk ke Ttyd atau terminal OpenWRT

* Salin script di bawah ini lalu tempelkan ke terminal

<pre>
cd /root
</pre>

* Tekan enter

* Salin lagi script di bawah ini

<pre>
opkg update
</pre>

* Tekan enter

<pre>
opkg install *.ipk
</pre>

* Tekan enter

Tunggu hingga selesai installasi clash pada openwrt anda.

### Mengubah Mode

Pada artikel ini, saya akan memandu anda untuk mengatur global setting anda.

Untuk mengubah mode proksi, anda bisa masuk terlebih dahulu ke halaman menu overview pada global setting.

Kemudian anda masuk saja halaman overview.

Lakukan pilihan mode proksi pada bagian di bawah ini:

- Direct

- Global

- Rule

- Script

Lakukan pilihan mode Tun pada bagian di bawah ini:

- Tun (game only)

- Tun Mix (game dan browsing)

Jika sudah, anda bisa menekan *Commit Setting* kemudian tekan kembali *Apply Setting*

### Mengatur Redir Host atau Fake IP

untuk mengatur redir host atau fake ip di globall setting.

Anda bisa masuk terlebih dahulu ke halaman menu overview pada global setting.

Kemudian anda tekan saja tombol panjang berwarna merah yang bertuliskan *Switch Page To Fake IP* jika anda berada pada mode redir host akan menjadi fake ip.

Sebaliknya, jika anda tekan tombol panjang berwarna merah yang bertuliskan *Switch Page To Redir Host* jika anda berada pada mode fake ip akan menjadi redir host.

Lakukan centang pada bagian di bawah ini:

- Pilih Type Stack menjadi system

- Router-Self Proxy

- Bypass Gateway Compatible (jika anda wifi on pada openwrt)

Lakukan nonaktifkan centang pada bagian di bawah ini:

- Trafik Proksi IPv6

- Matikan QUIC

- Rule Match Proxy Mode

- Common Ports Proxy Mode

- China IP Route

- Only intranet allowed

- Small Flash Memory

Jika sudah, anda bisa menekan *Commit Setting* kemudian tekan kembali *Apply Setting*


{% include links.html %}
