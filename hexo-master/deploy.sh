#!/bin/sh
hexo clean
hexo g
rm -rf /var/www/site1/*
cp -r public/* /var/www/site1/
rc-service nginx restart

