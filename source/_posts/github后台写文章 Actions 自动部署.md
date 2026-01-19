github后台写文章 Actions 自动部署，自动生成描述，摘要等等的方法如下:



 1：进入仓库（main 分支），点击右上角Add file → Create new file，文件名输入框里输入：scripts/auto-front-matter.js，输入文件内容:

const fs = require('fs');

const matter = require('gray-matter');



hexo.extend.filter.register('before_post_render', function (data) {

  const content = data.content.trim();



  // 自动生成 date

  if (!data.date) {

    data.date = new Date();

  }



  // 提取第一段作为摘要

  const firstParagraph = content.split('\n\n')[0].replace(/[#>*`]/g, '').trim();



  // 限制摘要长度（150 字）

  const summary = firstParagraph.length > 150

    ? firstParagraph.substring(0, 150) + '...'

    : firstParagraph;



  // 自动生成 description

  if (!data.description) {

    data.description = summary;

  }



  // 自动生成 excerpt

  if (!data.excerpt) {

    data.excerpt = summary;

  }



  // 自动生成 SEO 描述

  if (!data.seo_description) {

    data.seo_description = summary;

  }



  // 自动生成封面图字段（按日期生成路径）

  if (!data.cover) {

    const date = new Date(data.date);

    const y = date.getFullYear();

    const m = ('0' + (date.getMonth() + 1)).slice(-2);

    const d = ('0' + date.getDate()).slice(-2);



    data.cover = `/images/${y}/${m}/${d}/cover.jpg`;

  }

return data; });

保存（Commit changes）。



2:    往根目录的 _config.yml  输入:

scripts:

  - scripts/auto-front-matter.js

3:   往根目录package.json 的 dependencies 里输入：

"gray-matter": "^4.0.3"

完毕
