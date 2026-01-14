先检测是否是bash，输入echo $SHELL，            必须是/bin/sh



nano /usr/local/bin/x，输入



#!/bin/bash



cd /var/www/blog1 || exit 1



# 捕获完整命令名（如 x测试文章ABC）

cmd="$0"



# 去掉前缀 x，剩下的就是标题

title="${cmd#x}"



if [ -z "$title" ]; then

  echo "标题不能为空"

  exit 1

fi



file="source/_posts/${title}.md"



# 如果文件不存在就创建空白文件

[ -f "$file" ] || touch "$file"



# 打开编辑器

nano "$file"



# 自动 push

git add .

git commit -m "post: $title"

git push



# 自动部署

hexo clean

hexo g

hexo d



授予权限:    chmod +x /usr/local/bin/x



以后只要输入x加文章标题就可以进入编辑框，并且文章自动推送到github


而hexo一键生成 + 部署则是这样:



nano ~/.bashrc     输入:



alias h='cd /var/www/blog1 && hexo clean && hexo g && hexo d'



保存后输入：source ~/.bashrc



确认 alias 是否生效:



输入alias h



应该是:   alias h='cd /var/www/blog1 && hexo clean && hexo g && hexo d'



以后输入h，Hexo 就一键生成 + 部署。


