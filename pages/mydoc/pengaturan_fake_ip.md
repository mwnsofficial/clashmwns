---
title: cara mengatur fake ip
keywords: documentation, technical writers, help authoring tools, hat replacements
last_updated: Desember 06, 2020
tags: [getting_started]
summary: "Sebelum anda melakukan pengaturan, pastikan anda sudah memiliki sebuah konfigurasi."
sidebar: mydoc_sidebar
permalink: pengaturan_fake_ip.html
folder: mydoc
---

Pada artikel ini, saya akan memandu anda untuk mengatur global setting anda untuk menjadi sistem fake ip.

Dalam fake ip, anda bisa masuk terlebih dahulu ke halaman menu overview pada global setting.

Kemudian anda tekan saja tombol panjang berwarna merah yang bertuliskan *Switch Page To Fake IP* jika anda berada pada mode redir host.

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
