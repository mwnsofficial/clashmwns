---
title: cara install clash
keywords: documentation, technical writers, help authoring tools, hat replacements
last_updated: July 3, 2020
tags: [getting_started]
summary: "Sebelum anda melakukan install, pastikan paket data internet anda sudah ada dan stabil."
sidebar: mydoc_sidebar
permalink: install_clash.html
folder: global_setting
---

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

{% include links.html %}
