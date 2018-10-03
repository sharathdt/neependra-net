---
id: 80
title: 'Highlighting the searched keyword with &#039;grep&#039;.'
date: 2008-08-11T08:06:00+00:00
author: admin
layout: post
guid: http://neependra.net/?p=80
permalink: /2008/08/11/highlighting-the-searched-keyword-with-grep/
blogger_blog:
  - techieneeps.blogspot.com
blogger_permalink:
  - /2008/08/highlighting-searched-keyword-with-grep.html
blogger_author:
  - Neeps
categories:
  - Uncategorized
tags:
  - tips and tricks
---
Add following lines in the &#8220;.bashrc&#8221; file, which is in your home directory. 

> alias grep=&#8221;grep &#8211;color&#8221; 

> export GREP_COLOR=&#8221;1;32&#8243; 

You can run either run following command to take this change in-effect 

$ source ~/.bashrc 

OR 

Logout and then login.