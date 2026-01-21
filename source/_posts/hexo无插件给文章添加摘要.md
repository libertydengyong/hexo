---
title: hexo无插件给文章添加摘要
date: 2026-01-17 23:18:09
tags:
---
编辑nano scaffolds/post.md文件，输入:

---
title: {{ title }}
date: {{ date }}
tags:
categories:
---

摘要

<!-- more -->

然后:  hexo clean
hexo g
hexo s



<!-- more -->
