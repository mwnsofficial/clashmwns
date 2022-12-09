---
title: Pengaturan Rule Provider
tags: [belajar_clash]
keywords: setting rule provider
last_updated: Desember 9, 2022
summary: "Siapkan file akun anda sambil praktik langsung pada materi ini."
sidebar: dokument_master
permalink: dokument_setting_rule_provider.html
folder: dokument
---

## Creating tooltips
Because this theme is built on Bootstrap, you can simply use a specific attribute on an element to insert a tooltip.

Suppose you have a glossary.yml file inside your \_data folder. You could pull in that glossary definition like this:

{% raw %}
```html
<a href="#" data-toggle="tooltip" data-original-title="{{site.data.glossary.jekyll_platform}}">Jekyll</a> is my favorite tool for building websites.
```
{% endraw %}

This renders to the following:

<a href="#" data-toggle="tooltip" data-original-title="{{site.data.glossary.jekyll_platform}}">Jekyll</a> is my favorite tool for building websites.

{% include links.html %}