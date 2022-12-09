---
title: Install Clash
keywords: install, pasang, clash
last_updated: Desember 9, 2022
tags: [belajar_clash]
summary: "Siapkan koneksi internet anda untuk kelancaran instalasi clash."
sidebar: dokument_master
permalink: dokumen_install_clash.md
folder: dokument
---

## Cara Install Clash

Hal yang perlu anda lakukan adalah:

* Aktifkan OpenWRT anda

* Aktifkan Modem anda dan hubungkan ke WAN router OpenWRT

* Jika paket data habis, silahkan isi terlebih dahulu

* Login ke router OpenWRT anda

* Masuk ke Ttyd atau terminal emulator atau bisa menggunakan putty atau termux

* Salin script di bawah ini lalu tempelkan ke terminal

```
opkg update
```

* Tekan enter

* Salin kembali script di bawah ini untuk install paket repository

```
opkg install luci luci-base dnsmasq-full coreutils coreutils-nohup bash curl ca-certificates ipset ip-full libcap libcap-bin ruby ruby-yaml unzip iptables kmod-ipt-nat iptables-mod-tproxy iptables-mod-extra kmod-tun luci-compat ip6tables-mod-nat kmod-inet-diag kmod-nft-tproxy
```

* Tekan enter

* Download file [clash version 45.70](https://github.com/vernesong/OpenClash/raw/v0.45.70-beta/luci-app-openclash_0.45.70-beta_all.ipk)

* Masuk ke filemanager OpenWRT atau bisa gunakan Winscp

* Masuk ke folder root

* Upload file clash version 45.70

* Kembali masuk ke Ttyd atau terminal OpenWRT

* Salin script di bawah ini lalu tempelkan ke terminal

```
cd /root
```

* Tekan enter

* Salin lagi script di bawah ini

```
opkg update
```

* Tekan enter

```
opkg install *.ipk
```

* Tekan enter

Tunggu hingga selesai installasi clash pada openwrt anda.

{% include links.html %}