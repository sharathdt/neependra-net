---
id: 79
title: Deleting a speical character file
date: 2008-09-03T22:45:00+00:00
author: admin
layout: post
guid: http://neependra.net/?p=79
permalink: /2008/09/03/deleting-a-speical-character-file/
blogger_blog:
  - techieneeps.blogspot.com
blogger_permalink:
  - /2008/09/deleting-speical-character-file.html
blogger_author:
  - Neeps
categories:
  - Uncategorized
tags:
  - tips and tricks
---
<pre wrap="">Sometimes we need to delete a <span style="background-color: rgb(255, 255, 0);" name="textmarker_3" id="textmarked_2"></span>special <span style="background-color: rgb(255, 255, 0);" name="textmarker_2" id="textmarked_1"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_1" id="textmarked_0"></span>character file, which we can not delete with normal rm command.So here is the solution...delete it with the help inode number.<span style="background-color: rgb(255, 255, 0);" name="textmarker_19" id="textmarked_18"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_18" id="textmarked_17"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_17" id="textmarked_16"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_16" id="textmarked_15"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_15" id="textmarked_14"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_14" id="textmarked_13"></span><br /><span style="background-color: rgb(255, 255, 0);" name="textmarker_13" id="textmarked_12"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_12" id="textmarked_11"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_11" id="textmarked_10"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_10" id="textmarked_9"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_9" id="textmarked_8"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_8" id="textmarked_7"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_7" id="textmarked_6"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_6" id="textmarked_5"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_5" id="textmarked_4"></span><span style="background-color: rgb(255, 255, 0);" name="textmarker_4" id="textmarked_3"></span><br />$find . -inum __inode number from ls -i of the file __ -exec rm {} \;&lt;inode>&lt;/inode>&lt;inode>&lt;/inode></pre>