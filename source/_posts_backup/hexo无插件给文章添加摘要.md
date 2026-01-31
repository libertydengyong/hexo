---
excerpt: 自动生成的摘要
title: hexo无插件给文章添加摘要
date: 2026-01-17 23:18:09
tags:
---
excerpt: 自动生成的摘要
编辑nano scaffolds/post.md文件，输入:

---
excerpt: 自动生成的摘要
title: {{ title }}
date: {{ date }}
tags:
categories:
---
excerpt: 自动生成的摘要

摘要

<!-- more -->

然后:  hexo clean
hexo g
hexo s



<!-- more -->
